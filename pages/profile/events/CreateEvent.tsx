// Dedicated page for every event containing information like description, venue, date, time and sign up form.

import { useFormik } from "formik";
import AttendeesSection from "../../../components/AttendeesSection";
import BuyTicketForm from "../../../components/BuyTicketForm";
import CreateEventForm from "../../../components/CreateEventForm";
import FAQSection from "../../../components/FAQSection";
import { H1, H3, H4, H5, H6 } from "../../../components/Headings";
import Host from "../../../components/Host";
import Calendar from "../../../components/Icons/Calendar";
import MessageChatCircle from "../../../components/Icons/MessageChatCircle";
import LocationSection from "../../../components/LocationSection";
import Text from "../../../components/Text";

const FORM_INITIAL_VALUES = {
    title: "",
    description: "",
    thumbnail: undefined,
    ticketcap: "nocap",
    tickets: 0,
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
                <div className="flex flex-col">
                    <H3 className="font-semibold text-gray-700">Preview</H3>
                    <H3>{formik.values.title}</H3>
                    <H5>{formik.values.description}</H5>
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
