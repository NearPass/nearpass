import { Account, Contract, KeyPair, utils } from "near-api-js";
import { useEffect, useState } from "react";
import useWallet from "./useWallet";
import { timestampToDateTime } from "./utils";

const EVENTS_CONTRACT = process.env.NEXT_PUBLIC_EVENT_CONTRACT_ADDRESS;

function titleToEventId(title: string) {
    let titleSplit = title.split(" ");
    let titleLower = titleSplit.map((word) => {
        if (word[0]) {
            return `${word[0].toLowerCase()}${word.slice(1, word.length)}`;
        }
    });
    return titleLower.join("-");
}

function useEventContract() {
    const [near, walletConnection, keyStore] = useWallet();
    const [contract, setContract] = useState<Contract>();

    useEffect(() => {
        if (walletConnection) {
            (async () => {
                prepareEventContract();
            })();
        }
    }, [walletConnection]);

    async function getAccountAccessKeys() {
        if (walletConnection) {
            let keys = await walletConnection.account().getAccessKeys();
            console.log(keys);
            console.log(utils.format.parseNearAmount("1"));
            let keys2 = keys.filter((key) => {
                let permission = key.access_key.permission;
                if (typeof permission === "object") {
                    return (
                        key.access_key.permission["FunctionCall"]
                            .receiver_id === EVENTS_CONTRACT &&
                        key.access_key.permission["FunctionCall"].allowance ===
                            utils.format.parseNearAmount("10")
                    );
                }
            });
            return keys2;
        }
    }

    async function checkIfKeyInKeyStore() {
        if (walletConnection && keyStore) {
            let accessKeys = await getAccountAccessKeys();

            if (accessKeys && accessKeys.length > 0) {
                for (let i = 0; i < accessKeys.length; i++) {
                    let key = await keyStore.getAccounts(
                        accessKeys[i].public_key.split(":")[1]
                    );
                    if (key.length > 0) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    async function addKeyToKeyStore() {
        if (keyStore && walletConnection) {
            const keyPair = KeyPair.fromRandom("ed25519");
            const publicKey = keyPair.getPublicKey().toString();
            console.log(publicKey);
            await keyStore.setKey("testnet", publicKey, keyPair);
            let account = await walletConnection.account();
            await account.addKey(
                publicKey, // public key for new account
                EVENTS_CONTRACT, // contract this key is allowed to call (optional)
                [
                    "createEvent",
                    "buyTicket",
                    "cancelEvent",
                    "withdraw",
                    "claimRefund",
                    "redeem",
                ], // methods this key is allowed to call (optional)
                utils.format.parseNearAmount("10") // allowance key can use to call methods (optional)
            );
        }
    }

    async function prepareEventContract() {
        let account = await near?.account(
            walletConnection?.getAccountId() as string
        );
        const contract = new Contract(
            account as Account,
            EVENTS_CONTRACT as string,
            {
                changeMethods: ["createEvent", "buyTicket"],
                viewMethods: [],
            }
        );
        setContract(contract);
    }

    async function createEventOnChain({
        title,
        hostName,
        price,
        timestamp,
        eventMetadata,
    }) {
        if (contract) {
            const tx = await contract.createEvent({
                eventId: titleToEventId(title),
                title,
                eventMetadata,
                eventStart: timestamp * 1000000,
                hostName,
                price: utils.format.parseNearAmount(price.toString()),
            });
        }
    }

    async function buyTicket({
        eventId,
        name,
        email,
        phone,
        answer1,
        answer2,
        price,
    }) {
        if (contract) {
            console.log({ eventId, name, email, price });
            let tx = await walletConnection?.account().functionCall({
                contractId: EVENTS_CONTRACT,
                methodName: "buyTicket",
                args: { eventId, name, email, phone, answer1, answer2 },
                gas: BigInt(300_000_000_000_000).toString(),
                attachedDeposit: price,
            });
            return tx;
        }
    }

    return { contract, createEventOnChain, buyTicket };
}

export default useEventContract;
