// Dedicated page for every event containing information like description, venue, date, time and sign up form.

import { Disclosure } from "@headlessui/react";
import clsx from "clsx";
import { useFormik } from "formik";
import AttendeesSection from "../../../components/AttendeesSection";
import BuyTicketForm from "../../../components/BuyTicketForm";
import CreateEventForm from "../../../components/CreateEventForm";
import FAQSection from "../../../components/FAQSection";
import FormInput from "../../../components/FormInput";
import FormInputWrapper from "../../../components/FormInputWrapper";
import { H1, H3, H4, H5, H6 } from "../../../components/Headings";
import Host from "../../../components/Host";
import Calendar from "../../../components/Icons/Calendar";
import ChevronDown from "../../../components/Icons/ChevronDown";
import Mail from "../../../components/Icons/Mail";
import MarkerPin from "../../../components/Icons/MarkerPin";
import MessageChatCircle from "../../../components/Icons/MessageChatCircle";
import Telegram from "../../../components/Icons/Telegram";
import LocationSection from "../../../components/LocationSection";
import Text from "../../../components/Text";

const FORM_INITIAL_VALUES = {
    title: "",
    description: "",
    thumbnail: undefined,
    ticketcap: "nocap",
    tickets: 100,
    price: 0,
    eventtype: "",
    venue: "",
    datetime: "1998-09-15T23:00",
    hostname: "",
    hostwallet: "",
    hostemail: "",
    passgraphic: "",
    extraquestions: [],
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
    const formik = useFormik({
        initialValues: FORM_INITIAL_VALUES,
        onSubmit: (values, { setSubmitting }) => {
            console.log(values);
            setSubmitting(false);
        },
        validate: (values) => {},
    });

    return (
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
                        {/* <div className="flex flex-col space-y-2">
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
                            <FAQSection />
                        </div> */}
                    </div>
                </div>
                <div className="flex space-y-4 flex-col">
                    <H3 className="font-semibold text-gray-700">Preview</H3>
                    <H3>{formik.values.title}</H3>
                    <H5>{formik.values.description}</H5>
                    {formik.values.datetime && (
                        <div className="flex items-center space-x-2">
                            <Calendar />
                            <H5 className="font-medium text-brand-600 leading-tight">
                                {dateTimeLocalToString(formik.values.datetime)}
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
                    <div className="grid grid-cols-2">
                        {(formik.values.eventtype || formik.values.venue) && (
                            <div className="flex flex-col border-2 border-brand-500 p-2 rounded-lg">
                                <H5>Venue Details</H5>
                                <H4 className="text-brand-600">
                                    {formik.values.eventtype}
                                </H4>
                                {formik.values.eventtype === "irl" && (
                                    <div className="flex items-center space-x-2">
                                        <MarkerPin />
                                        <H4 className="text-brand-600 leading-tight">
                                            {formik.values.venue}
                                        </H4>
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
                                <H4 className="text-white">Join Telegram</H4>
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
                            <H3 className="font-semibold text-gray-700">FAQ</H3>
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
                                                    {formik.values.faqquestion1}
                                                </H4>
                                                <div
                                                    className={
                                                        open ? `rotate-180` : ""
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
                                                                formik.values
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
                    {/* <div className="flex flex-col space-y-4 sticky top-10">
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
                                    <ul className="flex flex-1 justify-end space-x-4 w-full">
                                        <Host />
                                    </ul>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <LocationSection />
                                <AttendeesSection />
                            </div>
                            <div className="flex space-x-2">
                                <button className="bg-brand-100 text-brand-700 max-w-fit text-lg border-2 focus:ring-2 focus:ring-brand-100 outline-none ring-offset-2 border-transparent shadow-inner px-5 py-2 w-full h-full rounded-md active:ring-2 active:ring-brand-100">
                                    Share this event
                                </button>
                                <button className="bg-[#7289da] flex space-x-2 max-w-fit text-lg border-2 focus:ring-2 focus:ring-[#7289da] outline-none ring-offset-2 border-transparent shadow-md px-5 py-2 w-full h-full rounded-md active:ring-2 active:ring-[#7289da]">
                                    <MessageChatCircle className="!stroke-white" />
                                    <H4 className="text-white">Join Discord</H4>
                                </button>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default CreateEvent;
