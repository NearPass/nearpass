import { Account, Contract, utils } from "near-api-js";
import { useEffect, useState } from "react";
import useWallet from "./useWallet";

const EVENTS_CONTRACT = "dev-1667138638377-68355460764535";

function titleToEventId(title: string) {
    let titleSplit = title.split(" ");
    let titleLower = titleSplit.map((word) => {
        return `${word[0].toLowerCase()}${word.slice(1, word.length)}`;
    });
    return titleLower.join("-");
}

function useEventContract() {
    const [near, walletConnection] = useWallet();
    const [contract, setContract] = useState();

    useEffect(() => {
        if (walletConnection) {
        }
    }, [walletConnection]);
    async function prepareEventContract() {
        let account = await near?.account(
            walletConnection?.getAccountId() as string
        );
        const contract = new Contract(account as Account, EVENTS_CONTRACT, {
            changeMethods: ["createEvent"],
            viewMethods: [],
        });
        return contract;
    }

    async function createEventOnChain({ title, hostName, price }, ipfsResult) {
        let eventContract = await prepareEventContract();
        const tx = await eventContract.createEvent({
            args: {
                eventId: titleToEventId(title),
                title,
                eventMetadataUrl: ipfsResult.url,
                eventStart: Date.now(),
                hostName,
                price: utils.format.formatNearAmount(price.toString()),
            },
        });
        console.log(tx);
    }

    return { contract, createEventOnChain };
}

export default useEventContract;
