import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import EventCard from "../../../components/Event/EventCard";
import { H1, H3 } from "../../../components/Headings";
import PrivateRoute from "../../../components/PrivateRoute";
import useWallet from "../../../helpers/useWallet";
import { concat } from "../../../helpers/utils";
import { Event } from "../../../types";

// List of events created by User
const Events = () => {
    const [_, walletConnection] = useWallet();
    const [eventsData, setEventsData] = useState<Event[]>();

    useEffect(() => {
        (async () => {
            if (walletConnection) {
                let accountId = walletConnection.getAccountId();
                let query = concat`
                { 
                    events(where: { host_: { address: "${accountId}" } }) {
                        id
                        title
                        description
                        thumbnail
                        timestamp
                        attendees
                        host {
                            id
                            name
                            address
                        }
                    }
                }
                `;

                let res = await axios.post(
                    "https://api.thegraph.com/subgraphs/name/therealharpaljadeja/nearpass",
                    {
                        query,
                    }
                );

                setEventsData(res.data.data.events);
            }
        })();
    }, [walletConnection]);
    return (
        <PrivateRoute>
            <div className="flex space-y-8 flex-1 p-5 flex-col">
                {eventsData && eventsData.length <= 0 ? (
                    <div className="flex items-center justify-center p-4">
                        <div className="border-2 border-gray-200 w-full rounded-md flex items-center justify-center p-4">
                            <H3>No Events Created</H3>
                        </div>
                    </div>
                ) : (
                    <React.Fragment>
                        <div className="flex flex-col space-y-2">
                            <H1>Events created by you</H1>
                        </div>
                        <div className="grid gap-2 grid-cols-4">
                            {eventsData &&
                                eventsData.map((event) => (
                                    <Link
                                        id={event.id}
                                        key={event.id}
                                        href={`/profile/events/${event.id}/attendees`}
                                    >
                                        <a>
                                            <EventCard
                                                event={event}
                                                key={event.id}
                                            />
                                        </a>
                                    </Link>
                                ))}
                        </div>
                    </React.Fragment>
                )}
            </div>
        </PrivateRoute>
    );
};

export default Events;
