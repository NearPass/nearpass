// Main events Page, all events on the platform will be visible here.

import type { NextPage } from "next";
import EventCard from "../components/Event/EventCard";
import { Event } from "../types";

const EVENT_DATA: Event[] = [
    {
        hostName: "Nikhil",
        attendees: 11,
        eventTitle: "Learn from Founders of 9 Figure Online Stores",
        thumbnailUrl:
            "https://secure-content.meetupstatic.com/images/classic-events/507570333/530x298.webp",
    },
    {
        hostName: "Augustine Correa",
        attendees: 415,
        eventTitle: "Global AI Developer Days 2022 - Mumbai",
        thumbnailUrl:
            "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F367894019%2F9417950381%2F1%2Foriginal.20221005-214739?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=0435ac94af403d0bd64dfb8c943fd029",
    },
    {
        hostName: "Sudato O'Benshee",
        eventTitle: "Early Access AirDrop Details",
        attendees: 13,
        thumbnailUrl:
            "https://www.meetup.com/_next/image/?url=https%3A%2F%2Fsecure-content.meetupstatic.com%2Fimages%2Fclassic-events%2F507464163%2F676x380.webp&w=3840&q=75",
    },
];

const Home: NextPage = () => {
    return (
        <div className="flex space-y-8 flex-1 p-5 flex-col">
            <div className="flex flex-col space-y-2">
                <h1 className="text-gray-700 font-bold text-3xl selection:bg-brand-200 selection:text-brand-700">
                    Upcoming Events
                </h1>
                <h3 className="text-gray-400 selection:bg-brand-200 selection:text-brand-700">
                    Awesome upcoming events!
                </h3>
            </div>
            <div className="grid gap-2 grid-cols-4">
                {EVENT_DATA.map((event) => (
                    <EventCard event={event} key={event.hostName} />
                ))}
            </div>
        </div>
    );
};

export default Home;
