// Dedicated page for every event containing information like description, venue, date, time and sign up form.

import { Formik } from "formik";
import Text from "../../components/Text";
import { H1, H4, H3, H5, H6 } from "../../components/Headings";
import Calendar from "../../components/Icons/Calendar";
import BuyTicketForm from "../../components/BuyTicketForm";
import MessageChatCircle from "../../components/Icons/MessageChatCircle";
import { Disclosure } from "@headlessui/react";
import ChevronDown from "../../components/Icons/ChevronDown";
import clsx from "clsx";

const Event = () => {
    return (
        <div className="flex flex-col items-start space-y-8 justify-center pl-10 pr-28 pt-12">
            <div className="flex flex-col space-y-2">
                <H1>Learn from Founders of 9 Figure Online Stores</H1>
                <div className="flex space-x-2 items-center">
                    <Calendar />
                    <H4 className="text-purple-500 text-base">
                        Thu, Oct 27 · 6:30 PM IST
                    </H4>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-10 h-full w-full">
                <div className="flex flex-col">
                    <div className="flex space-y-4 flex-col">
                        <div className="flex flex-col space-y-2">
                            <H3 className="font-semibold text-gray-700">
                                Registration
                            </H3>
                            <BuyTicketForm />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <div className="text-2xl font-medium  text-black">
                                <H3 className="font-semibold text-gray-700">
                                    Event Information
                                </H3>
                            </div>
                            <div className="text-black">
                                <Text className="text-gray-500">
                                    Join us for our next Investor pitching
                                    event. We help Startups test, grow and even
                                    get funding for their business ideas. With
                                    our afternoon Workshop you can get help
                                    shaping and testing your idea. At 6pm you
                                    can sign up to pitch to our panel of Angel
                                    VCs, win prizes and a shot at funding. If
                                    you are not ready for formal pitching, join
                                    our open 1 minute pitching to test Investor
                                    interest, get advice and even mentorship.
                                    More judges, the same prizes and its FREE to
                                    attend. To PITCH go to bit.ly/nyplooza Our
                                    Winners have raised over $16 million in the
                                    past 3 years!
                                </Text>
                            </div>
                        </div>
                        <div>
                            <div className="text-2xl font-medium flex mb-6 flex-col space-y-4 text-black">
                                <H3 className="font-semibold text-gray-700">
                                    FAQ
                                </H3>
                                <div className="flex flex-col items-start">
                                    <Disclosure>
                                        {({ open }) => (
                                            <div
                                                className={clsx("w-full", {
                                                    "bg-gray-100": open,
                                                })}
                                            >
                                                <Disclosure.Button
                                                    className={clsx(
                                                        "text-left hover:bg-gray-50 p-4 flex justify-between w-full",
                                                        {
                                                            "border-b-2 border-gray-200":
                                                                !open,
                                                        }
                                                    )}
                                                >
                                                    <H4 className="text-gray-700">
                                                        When is the event?
                                                    </H4>
                                                    <div
                                                        className={
                                                            open
                                                                ? `rotate-180`
                                                                : ""
                                                        }
                                                    >
                                                        <ChevronDown
                                                            className={clsx(
                                                                "stroke-gray-400"
                                                            )}
                                                        />
                                                    </div>
                                                </Disclosure.Button>
                                                <Disclosure.Panel
                                                    className={clsx(
                                                        "mt-2 pb-4 pl-4 w-full",
                                                        {
                                                            "border-b-2 border-gray-200":
                                                                open,
                                                        }
                                                    )}
                                                >
                                                    <H5 className="text-gray-700">
                                                        The event is on 1st
                                                        January 2023.
                                                    </H5>
                                                </Disclosure.Panel>
                                            </div>
                                        )}
                                    </Disclosure>
                                    <Disclosure>
                                        {({ open }) => (
                                            <div
                                                className={clsx("w-full", {
                                                    "bg-gray-100": open,
                                                })}
                                            >
                                                <Disclosure.Button
                                                    className={clsx(
                                                        "text-left hover:bg-gray-50 p-4 flex justify-between w-full",
                                                        {
                                                            "border-b-2 border-gray-200":
                                                                !open,
                                                        }
                                                    )}
                                                >
                                                    <H4 className="text-gray-700">
                                                        When is the event?
                                                    </H4>
                                                    <div
                                                        className={
                                                            open
                                                                ? `rotate-180`
                                                                : ""
                                                        }
                                                    >
                                                        <ChevronDown
                                                            className={clsx(
                                                                "stroke-gray-400"
                                                            )}
                                                        />
                                                    </div>
                                                </Disclosure.Button>
                                                <Disclosure.Panel
                                                    className={clsx(
                                                        "mt-2 pb-4 pl-4 w-full",
                                                        {
                                                            "border-b-2 border-gray-200":
                                                                open,
                                                        }
                                                    )}
                                                >
                                                    <H5 className="text-gray-700">
                                                        The event is on 1st
                                                        January 2023.
                                                    </H5>
                                                </Disclosure.Panel>
                                            </div>
                                        )}
                                    </Disclosure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col space-y-4 sticky top-10">
                        <img
                            className="rounded-lg"
                            src="https://secure-content.meetupstatic.com/images/classic-events/507570333/530x298.webp"
                        />
                        <div className="flex flex-col space-y-4">
                            <div className="grid grid-cols-2 gap-2">
                                <div className="flex hover:bg-brand-100 hover:border-brand-600 items-center justify-between max-w-fit space-x-4 border-2 border-brand-100 p-4 rounded-md">
                                    <img
                                        className="rounded-full h-14 w-14"
                                        src="https://cdn.lu.ma/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=85,width=40,height=40/avatars/3b/df87ba2b-f455-4f41-ba3b-814721f505f1"
                                    />
                                    <div className="flex flex-1 justify-end space-x-4 w-full">
                                        <div className="flex flex-col justify-center">
                                            <h5 className="text-purple-500 text-md">
                                                Avi from Pesto
                                            </h5>
                                            <h6 className="text-purple-700 font-semibold text-sm">
                                                Host
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex space-x-2">
                                <button className="bg-brand-100 text-brand-700 max-w-fit text-lg border-2 focus:ring-2 focus:ring-brand-100 outline-none ring-offset-2 border-transparent shadow-inner px-5 py-2 w-full h-full rounded-md active:ring-2 active:ring-brand-100">
                                    Share this event
                                </button>
                                <button className="bg-[#7289da] flex space-x-2 max-w-fit text-lg border-2 focus:ring-2 focus:ring-[#7289da] outline-none ring-offset-2 border-transparent shadow-md px-5 py-2 w-full h-full rounded-md active:ring-2 active:ring-[#7289da]">
                                    <MessageChatCircle className="stroke-white" />{" "}
                                    <H4 className="text-white">Join Discord</H4>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Event;
