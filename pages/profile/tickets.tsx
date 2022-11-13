import React, { useEffect, useState } from "react";
import { H1, H2, H3, H4 } from "../../components/Headings";
import PrivateRoute from "../../components/PrivateRoute";
import axios from "axios";
import useWallet from "../../helpers/useWallet";
import { Ticket } from "../../types";
import TicketComp from "../../components/Ticket";
import { concat } from "../../helpers/utils";

// Tickets bought by the user
const Tickets = () => {
    const [_, walletConnection] = useWallet();
    const [tickets, setTickets] = useState<Ticket[]>();

    useEffect(() => {
        (async () => {
            if (walletConnection) {
                let accountId = walletConnection.getAccountId();
                let query = concat`
                    { 
                        tickets(where: { accountId: "${accountId}" }) {
                            id
                            name
                            event {
                                id
                                title
                                description
                                thumbnail
                                timestamp
                                host {
                                    name
                                    address
                                }
                            }
                        }
                    }
                `;
                const res = await axios.post(
                    "https://api.thegraph.com/subgraphs/name/therealharpaljadeja/nearpass",
                    {
                        query,
                    }
                );
                setTickets(res.data.data.tickets);
                console.log(res.data.data.tickets);
            }
        })();
    }, [walletConnection]);

    return (
        <PrivateRoute>
            <div className="flex space-y-8 flex-1 p-5 flex-col">
                {tickets && tickets.length <= 0 ? (
                    <div className="flex items-center justify-center p-4">
                        <div className="border-2 border-gray-200 w-full rounded-md flex items-center justify-center p-4">
                            <H3>No Tickets</H3>
                        </div>
                    </div>
                ) : (
                    <React.Fragment>
                        <div className="flex flex-col space-y-2">
                            <H1>Tickets</H1>
                        </div>
                        <div className="grid gap-2 grid-cols-4">
                            {tickets &&
                                tickets.map((ticket) => (
                                    <TicketComp ticket={ticket} />
                                ))}
                        </div>
                    </React.Fragment>
                )}
            </div>
        </PrivateRoute>
    );
};

export default Tickets;
