import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Events from "..";
import { H1, H2, H3, H4, H5, H6 } from "../../../../components/Headings";
import PrivateRoute from "../../../../components/PrivateRoute";
import TicketRow from "../../../../components/TicketRow";
import { concat, timestampToDateTime } from "../../../../helpers/utils";
import { Event } from "../../../../types";

// List of attendees for the event created by the user.
const Attendees = () => {
    let router = useRouter();
    const [event, setEvent] = useState<Event>();

    useEffect(() => {
        (async () => {
            let query = concat`
                { 
                    events(where: { id: "${router.query.id}" }) {
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
                        tickets {
                            id
                            answer1
                            answer2
                            name
                            email
                            phone
                            accountId
                            used
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
            setEvent(res.data.data.events[0]);
        })();
    }, [router]);

    return (
        <PrivateRoute>
            <div className="flex space-y-8 flex-1 p-5 flex-col">
                {event && (
                    <div>
                        <div className="flex flex-col space-y-2">
                            <H1>{event.title}</H1>
                            <H5 className="text-brand-500">
                                {timestampToDateTime(event.timestamp)}
                            </H5>
                            <H5>{event.attendees} Attendees</H5>
                        </div>
                        <div className="mt-8 rounded-md overflow-hidden">
                            {event.tickets && (
                                <table className="border-2 border-gray-200 w-full">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                                        <tr>
                                            <th className="p-4" scope="col">
                                                Ticket Number
                                            </th>
                                            <th>Name</th>
                                            <th>Account Address</th>
                                            <th>Email</th>
                                            <th>Used?</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {event.tickets.map((ticket) => (
                                            <TicketRow
                                                key={ticket.id}
                                                ticket={ticket}
                                            />
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </PrivateRoute>
    );
};

export default Attendees;
