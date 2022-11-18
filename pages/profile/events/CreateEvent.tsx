// Dedicated page for every event containing information like description, venue, date, time and sign up form.
//@ts-nocheck
import { Disclosure } from "@headlessui/react";
import axios from "axios";
import clsx from "clsx";
import { useFormik } from "formik";
import React from "react";
import toast from "react-hot-toast";
import CreateEventForm from "../../../components/CreateEventForm";
import FormInput from "../../../components/FormInput";
import FormInputWrapper from "../../../components/FormInputWrapper";
import { H1, H3, H4, H5, H6 } from "../../../components/Headings";
import Calendar from "../../../components/Icons/Calendar";
import ChevronDown from "../../../components/Icons/ChevronDown";
import ExternalLinkAlt from "../../../components/Icons/ExternalLinkAlt";
import Mail from "../../../components/Icons/Mail";
import MarkerPin from "../../../components/Icons/MarkerPin";
import MessageChatCircle from "../../../components/Icons/MessageChatCircle";
import Telegram from "../../../components/Icons/Telegram";
import PrivateRoute from "../../../components/PrivateRoute";
import fileFromPath from "../../../helpers/ipfs";
import useEventContract from "../../../helpers/useEventContract";
import useWallet from "../../../helpers/useWallet";

const FORM_INITIAL_VALUES = {
    title: "",
    description: "",
    thumbnail: "",
    ticketcap: "nocap",
    tickets: 0,
    price: 0,
    eventtype: "",
    venue: "",
    datetime: "1998-09-15T23:00",
    hostname: "",
    hostemail: "",
    telegramgroup: "",
    discordinvitelink: "",
    question1: "",
    faqquestion1: "",
    answer1: "",
    question2: "",
    faqquestion2: "",
    answer2: "",
};

const dateTimeLocalToString = (datetimelocal: string) => {
    return new Date(datetimelocal).toString();
};

const CreateEvent = () => {
    const { contract, createEventOnChain } = useEventContract();

    const formik = useFormik({
        initialValues: FORM_INITIAL_VALUES,
        onSubmit: async (values, { setSubmitting }) => {
            let {
                title,
                price,
                hostname,
                hostemail,
                venue,
                eventtype,
                telegramgroup,
                discordinvitelink,
                faqquestion1,
                faqquestion2,
                question1,
                question2,
                answer1,
                answer2,
                datetime,
                description,
                thumbnail,
            } = formik.values;

            let eventMetadata = {
                description,
                eventType: eventtype,
                venue,
                hostemail,
                telegram: telegramgroup,
                discord: discordinvitelink,
                faqquestion1,
                faqquestion2,
                answer1,
                answer2,
                question1,
                question2,
            };

            let result = fileFromPath(
                title,
                thumbnail,
                eventMetadata,
                async (result: any) => {
                    let res = await axios.get(
                        `https://ipfs.io/ipfs/${result.url.replace(
                            "ipfs://",
                            ""
                        )}`
                    );
                    let tx = createEventOnChain({
                        title,
                        hostName: hostname,
                        price,
                        timestamp: new Date(datetime).getTime(),
                        eventMetadata: {
                            ...eventMetadata,
                            thumbnail: res.data.image,
                        },
                    });

                    toast.promise(tx, {
                        loading: "Creating Event",
                        success: (data) => {
                            return (
                                <a
                                    href={`https://explorer.testnet.near.org/transactions/${data?.transaction.hash}`}
                                    target="_blank"
                                    className="text-brand-500 flex items-center space-x-2"
                                    rel="noreferrer"
                                >
                                    Sucessfully created
                                    <ExternalLinkAlt />
                                </a>
                            );
                        },
                        error: (err) => `Event Might already be created!`,
                    });
                }
            );
        },
        validate: (values) => {
            const errors: typeof FORM_INITIAL_VALUES =
                {} as typeof FORM_INITIAL_VALUES;
            if (!values.thumbnail) {
                errors.thumbnail = "Thumbnail is required";
            }
            if (!values.title) {
                errors.title = "Title is required";
            }
            if (!values.ticketcap) {
                errors.ticketcap = "Ticket Capacity is required";
            }
            if (!values.price) {
                errors.price = "Price is required";
            }
            if (!values.hostname) {
                errors.hostname = "Host Name is required";
            }
            if (!values.hostemail) {
                errors.hostemail = "Host Email is required";
            }
            if (!values.eventtype) {
                errors.eventtype = "Event Type is required";
            }
            if (values.eventtype === "irl" && !values.venue) {
                errors.venue = "Venue is required";
            }
            if (values.ticketcap === "limited" && !values.tickets) {
                errors.tickets = "Maximum Tickets is required";
            }
            if (
                values.faqquestion1 === ""
                    ? values.answer1 !== ""
                    : values.answer1 === ""
            ) {
                errors.faqquestion1 =
                    "Question and answer both must be provided";
            }
            if (
                values.faqquestion2 === ""
                    ? values.answer2 !== ""
                    : values.answer2 === ""
            ) {
                errors.faqquestion2 =
                    "Question and answer both must be provided";
            }
            return errors;
        },
    });

    return (
        <PrivateRoute>
            <div className="flex flex-col items-start space-y-8 justify-center pl-10 pr-28 pt-12">
                <div className="flex flex-col space-y-2">
                    <H1>Create New Event</H1>
                    {/* <div className="flex space-x-2 items-center">
                    <Calendar />
                    <H4 className="text-purple-500 text-base">
                        Thu, Oct 27 · 6:30 PM IST
                    </H4>
                </div> */}
                </div>

                <div className="grid grid-cols-2 gap-10 h-full w-full">
                    <div className="flex flex-col">
                        <div className="flex space-y-4 flex-col">
                            <div className="flex flex-col space-y-2 mb-6">
                                <H3 className="font-semibold text-gray-700">
                                    Event Form
                                </H3>
                                <CreateEventForm formik={formik} />
                            </div>
                        </div>
                    </div>
                    <div className="flex space-y-4 flex-col sticky top-10">
                        <H3 className="font-semibold text-gray-700">Preview</H3>
                        {formik.values.thumbnail !== "" && (
                            <img
                                src={formik.values.thumbnail}
                                className="rounded-lg"
                            />
                        )}
                        <H3>{formik.values.title}</H3>
                        <H5>{formik.values.description}</H5>
                        {formik.values.datetime && (
                            <div className="flex items-center space-x-2">
                                <Calendar />
                                <H5 className="font-medium text-brand-600 leading-tight">
                                    {dateTimeLocalToString(
                                        formik.values.datetime
                                    )}
                                </H5>
                            </div>
                        )}
                        {formik.values.price && (
                            <div className="flex items-end space-x-2">
                                <H5 className="leading-tight">Price:</H5>
                                <H4 className="leading-tight text-brand-600">
                                    {`${formik.values.price.toString()} NEAR`}
                                </H4>
                            </div>
                        )}
                        <div className="grid grid-cols-2 gap-2">
                            {(formik.values.eventtype ||
                                formik.values.venue !== "") && (
                                <div className="flex flex-col border-2 space-y-2 border-brand-500 p-2 rounded-lg">
                                    <H5>Venue Details</H5>

                                    {formik.values.eventtype === "irl" && (
                                        <div className="flex items-center space-x-2">
                                            <MarkerPin />
                                            <H4 className="text-brand-600 leading-tight">
                                                {formik.values.venue}
                                            </H4>
                                        </div>
                                    )}
                                    {formik.values.eventtype === "virtual" && (
                                        <div className="flex items-center space-x-2">
                                            <H4>Virtual</H4>
                                        </div>
                                    )}
                                </div>
                            )}
                            {(formik.values.hostname ||
                                formik.values.hostemail) && (
                                <div className="flex flex-col border-2 border-brand-500 p-2 rounded-lg">
                                    <H5>Host Details</H5>
                                    <H4 className="text-brand-600">
                                        {formik.values.hostname}
                                    </H4>
                                    <div className="flex items-center space-x-2">
                                        <Mail />
                                        <H4 className="text-brand-600 leading-tight">
                                            {formik.values.hostemail}
                                        </H4>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="grid grid-cols-2 justify-items-center">
                            {formik.values.telegramgroup && (
                                <button className="bg-[#229ED9] flex space-x-2 max-w-fit text-lg border-2 focus:ring-2 focus:ring-[#229ED9] outline-none ring-offset-2 border-transparent shadow-md px-5 py-2 w-full rounded-md active:ring-2 active:ring-[#229ED9]">
                                    <Telegram className="!stroke-white" />
                                    <H4 className="text-white">
                                        Join Telegram
                                    </H4>
                                </button>
                            )}
                            {formik.values.discordinvitelink && (
                                <button className="bg-[#7289da] flex space-x-2 max-w-fit text-lg border-2 focus:ring-2 focus:ring-[#7289da] outline-none ring-offset-2 border-transparent shadow-md px-5 py-2 w-full rounded-md active:ring-2 active:ring-[#7289da]">
                                    <MessageChatCircle className="!stroke-white" />
                                    <H4 className="text-white">Join Discord</H4>
                                </button>
                            )}
                        </div>
                        <div className="border-2 bg-brand-50 border-brand-100 p-4 rounded-lg">
                            <FormInputWrapper>
                                <FormInput
                                    placeholder="Enter your name"
                                    id="name"
                                    label="Name"
                                    className="bg-purple-500"
                                    disabled
                                />
                            </FormInputWrapper>
                            <FormInputWrapper>
                                <FormInput
                                    placeholder="Enter your email"
                                    id="email"
                                    label="Email"
                                    type="email"
                                    className="bg-purple-500"
                                    disabled
                                    leftIcon={<Mail />}
                                />
                            </FormInputWrapper>
                            {formik.values.question1 && (
                                <FormInputWrapper>
                                    <FormInput
                                        placeholder={formik.values.question1}
                                        id="question1"
                                        label={formik.values.question1}
                                        type="text"
                                        className="bg-purple-500"
                                        disabled
                                    />
                                </FormInputWrapper>
                            )}
                            {formik.values.question2 && (
                                <FormInputWrapper>
                                    <FormInput
                                        placeholder={formik.values.question2}
                                        id="question1"
                                        label={formik.values.question2}
                                        type="text"
                                        className="bg-purple-500"
                                        disabled
                                    />
                                </FormInputWrapper>
                            )}
                        </div>
                        {formik.values.faqquestion1 && formik.values.answer1 && (
                            <section className="text-2xl font-medium flex mb-6 flex-col space-y-4 text-black">
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
                                                        {
                                                            formik.values
                                                                .faqquestion1
                                                        }
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
                                                        {formik.values.answer1}
                                                    </H5>
                                                </Disclosure.Panel>
                                            </div>
                                        )}
                                    </Disclosure>
                                    {formik.values.faqquestion2 &&
                                        formik.values.answer2 && (
                                            <Disclosure>
                                                {({ open }) => (
                                                    <div
                                                        className={clsx(
                                                            "w-full",
                                                            {
                                                                "bg-gray-100":
                                                                    open,
                                                            }
                                                        )}
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
                                                                {
                                                                    formik
                                                                        .values
                                                                        .faqquestion2
                                                                }
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
                                                                {
                                                                    formik
                                                                        .values
                                                                        .answer2
                                                                }
                                                            </H5>
                                                        </Disclosure.Panel>
                                                    </div>
                                                )}
                                            </Disclosure>
                                        )}
                                </div>
                            </section>
                        )}
                    </div>
                </div>
            </div>
        </PrivateRoute>
    );
};

export default CreateEvent;
