import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { timestampToDateTime } from "../helpers/utils";
import { Ticket } from "../types";
import { H3, H4, H5, H6 } from "./Headings";

const Ticket = ({ ticket }: { ticket: Ticket }) => {
    let { event, name, email } = ticket;
    const [image, setImage] = useState();

    useEffect(() => {
        if (ticket) {
            (async () => {
                const image = await axios.get(ticket.event.thumbnail);
                setImage(image.data);
            })();
        }
    }, [ticket]);

    return (
        <div className="border-2 rounded-md overflow-hidden border-gray-200">
            <div className="relative">
                <img src={image} />
                <div className="absolute bg-white border-gray-200 border-2 p-4 -bottom-4 right-4 rounded-md">
                    <H3 className="text-brand-500">#0</H3>
                </div>
            </div>
            <div className="p-4 flex flex-col space-y-2">
                <H4 className="text-brand-500">{event.title}</H4>
                <H5>
                    Hosted By:
                    <a
                        href={`https://explorer.testnet.near.org/accounts/${event.host.address}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span className="text-brand-500 ml-1 font-semibold">
                            {event.host.name}
                        </span>
                    </a>
                </H5>
                <H6 className="text-brand-500">
                    {timestampToDateTime(event.timestamp)}
                </H6>
            </div>
        </div>
    );
};

export default Ticket;
