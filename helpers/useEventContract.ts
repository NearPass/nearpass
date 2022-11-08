import { Account, Contract, utils } from "near-api-js";
import { useEffect, useState } from "react";
import useWallet from "./useWallet";
import { timestampToDateTime } from "./utils";

const EVENTS_CONTRACT = process.env.NEXT_PUBLIC_EVENT_CONTRACT_ADDRESS;

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
        const contract = new Contract(
            account as Account,
            EVENTS_CONTRACT as string,
            {
                changeMethods: ["createEvent", "buyTicket"],
                viewMethods: [],
            }
        );
        return contract;
    }

    async function createEventOnChain({
        title,
        hostName,
        price,
        timestamp,
        eventMetadata,
    }) {
        let eventContract = await prepareEventContract();
        const tx = await eventContract.createEvent({
            args: {
                eventId: titleToEventId(title),
                title,
                eventMetadata,
                eventStart: timestamp,
                hostName,
                price: utils.format.parseNearAmount(price.toString()),
            },
        });
        console.log(tx);
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
        let eventContract = await prepareEventContract();
        const tx = await eventContract.buyTicket({
            args: {
                eventId,
                name,
                email,
                phone,
                answer1,
                answer2,
            },
            amount: price,
        });
        console.log(tx);
    }

    return { contract, createEventOnChain, buyTicket };
}

export default useEventContract;
