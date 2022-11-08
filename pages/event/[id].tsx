// Dedicated page for every event containing information like description, venue, date, time and sign up form.

import Text from "../../components/Text";
import { H1, H4, H3 } from "../../components/Headings";
import Calendar from "../../components/Icons/Calendar";
import BuyTicketForm from "../../components/BuyTicketForm";
import MessageChatCircle from "../../components/Icons/MessageChatCircle";
import LocationSection from "../../components/LocationSection";
import Host from "../../components/Host";
import FAQSection from "../../components/FAQSection";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { Event } from "../../types";
import { timestampToDateTime } from "../../helpers/utils";
import Telegram from "../../components/Icons/Telegram";

const Event = () => {
    const router = useRouter();

    const [event, setEvent] = useState<Event>();
    const [image, setImage] = useState<string>();

    const GET_EVENT_BY_ID = `
    {
        events (where: { id: "${router.query.id}" }) {
            id
            title
            description
            thumbnail
            timestamp
            price
            host {
                name
                address
                email
            }
            faq {
                question1
                answer1
                question2
                answer2
            }
            question1
            question2
            telegram
            discord
        }
    }
    `;

    useEffect(() => {
        if (router.query.id) {
            (async () => {
                let res = await axios.post(
                    "https://api.thegraph.com/subgraphs/name/therealharpaljadeja/nearpass",
                    {
                        query: GET_EVENT_BY_ID,
                    }
                );
                setEvent(res.data.data.events[0]);
            })();
        }
    }, [router]);

    useEffect(() => {
        if (event && event.thumbnail) {
            (async () => {
                try {
                    let res = await axios.get(
                        `https://ipfs.io/ipfs/${event.thumbnail.replace(
                            "ipfs://",
                            ""
                        )}`
                    );
                    let image = await axios.get(
                        `https://ipfs.io/ipfs/${res.data.image.replace(
                            "ipfs://",
                            ""
                        )}`
                    );
                    setImage(image.data);
                } catch (e) {
                    console.log(e);
                }
            })();
        }
    }, [event]);

    return (
        <div className="flex flex-col items-start space-y-8 justify-center pl-10 pr-28 pt-12">
            <div className="flex flex-col space-y-2">
                {event && <H1>{event.title}</H1>}
                <div className="flex space-x-2 items-center">
                    <Calendar />
                    {event && (
                        <H4 className="text-purple-500 text-base">
                            {timestampToDateTime(event.timestamp)}
                        </H4>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-2 gap-10 h-full w-full">
                <div className="flex flex-col">
                    <div className="flex space-y-4 flex-col">
                        <div className="flex flex-col space-y-2">
                            <H3 className="font-semibold text-gray-700">
                                Registration
                            </H3>
                            {event && router.query.id && (
                                <BuyTicketForm
                                    extraQuestions={[
                                        event.question1,
                                        event.question2,
                                    ]}
                                    price={event.price}
                                    eventId={router.query.id as string}
                                />
                            )}
                        </div>
                        <div className="flex flex-col space-y-2">
                            <div className="text-2xl font-medium  text-black">
                                <H3 className="font-semibold text-gray-700">
                                    Event Information
                                </H3>
                            </div>
                            {event && (
                                <div className="text-black">
                                    <Text className="text-gray-500">
                                        {event.description}
                                    </Text>
                                </div>
                            )}
                        </div>
                        {event && event.faq && (
                            <div>
                                <FAQSection faq={event.faq} />
                            </div>
                        )}
                    </div>
                </div>
                <div>
                    <div className="flex flex-col space-y-4 sticky top-10">
                        <img className="rounded-lg" src={image} />
                        <div className="flex flex-col space-y-4">
                            <div className="grid grid-cols-2 gap-2">
                                {event && event.host && (
                                    <div className="flex hover:bg-brand-100 hover:border-brand-600 items-center justify-between max-w-fit space-x-4 border-2 border-brand-100 p-4 rounded-md">
                                        <ul className="flex flex-1 justify-end space-x-4 w-full">
                                            <Host host={event.host} />
                                        </ul>
                                    </div>
                                )}
                            </div>
                            {event && event.venue && (
                                <div className="grid grid-cols-2 gap-2">
                                    <LocationSection venue={event.venue} />
                                </div>
                            )}
                            <div className="flex space-x-2">
                                {/* <button className="bg-brand-100 text-brand-700 max-w-fit text-lg border-2 focus:ring-2 focus:ring-brand-100 outline-none ring-offset-2 border-transparent shadow-inner px-5 py-2 w-full h-full rounded-md active:ring-2 active:ring-brand-100">
                                    Share this event
                                </button> */}
                                {event && event.discord && (
                                    <a
                                        href={`https://${event.discord}`}
                                        className="outline-none flex"
                                        target="_blank"
                                    >
                                        <button className="bg-[#7289da] flex space-x-2 text-lg border-2 focus:ring-2 focus:ring-[#7289da] outline-none ring-offset-2 border-transparent shadow-md px-5 py-2 w-full h-full rounded-md active:ring-2 active:ring-[#7289da]">
                                            <MessageChatCircle className="!stroke-white" />
                                            <H4 className="text-white">
                                                Join Discord
                                            </H4>
                                        </button>
                                    </a>
                                )}

                                {event && event.telegram && (
                                    <a
                                        href={`https://${event.telegram}`}
                                        className="outline-none flex"
                                        target="_blank"
                                    >
                                        <button className="bg-[#229ED9] flex space-x-2 text-lg border-2 focus:ring-2 focus:ring-[#229ED9] outline-none ring-offset-2 border-transparent shadow-md px-5 py-2 w-full rounded-md active:ring-2 active:ring-[#229ED9]">
                                            <Telegram className="!stroke-white" />
                                            <H4 className="text-white">
                                                Join Telegram
                                            </H4>
                                        </button>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Event;
