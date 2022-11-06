// Main events Page, all events on the platform will be visible here.

import type { NextPage } from "next";
import EventCard from "../components/Event/EventCard";
import { H1, H4 } from "../components/Headings";
import { Event } from "../types";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";

const GET_EVENTS = `{ 
    events {
        id
        title
        thumbnail
        eventType
        active
        price
        telegram
        discord
        venue
        timestamp
        host { 
            name
            address
            email
        }
        description            
    }
}`;

const Home: NextPage = () => {
    const [eventData, setEventData] = useState<Event[]>();
    useEffect(() => {
        (async () => {
            const res = await axios.post(
                "https://api.thegraph.com/subgraphs/name/therealharpaljadeja/nearpass",
                {
                    query: GET_EVENTS,
                }
            );
            setEventData(res.data.data.events);
        })();
    }, []);

    return (
        <div className="flex space-y-8 flex-1 p-5 flex-col">
            <div className="flex flex-col space-y-2">
                <H1>Upcoming Events</H1>
                <H4 className="text-gray-400 selection:bg-brand-200 selection:text-brand-700">
                    Awesome upcoming events!
                </H4>
            </div>
            <div className="grid gap-2 grid-cols-4">
                {eventData &&
                    eventData.map((event) => (
                        <Link
                            id={event.id}
                            key={event.id}
                            href={`/event/${event.id}`}
                        >
                            <a>
                                <EventCard event={event} key={event.id} />
                            </a>
                        </Link>
                    ))}
            </div>
        </div>
    );
};

export default Home;
