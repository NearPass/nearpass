// Dedicated page for every event containing information like description, venue, date, time and sign up form.

import CheckCircle from "../../components/CheckCircle";
import { Formik } from "formik";
import Text from "../../components/Text";

const Event = () => {
    return (
        <div className="flex flex-col items-start space-y-8 justify-center px-32 pt-12">
            <div className="flex flex-col space-y-2">
                <h1 className="text-black text-3xl font-semibold">
                    Learn from Founders of 9 Figure Online Stores
                </h1>
                <div className="text-purple-700">Thu, Oct 27 · 6:30 PM IST</div>
            </div>

            <div className="grid grid-cols-2 gap-10 h-full w-full">
                <div className="flex flex-col">
                    <div className="flex space-y-4 flex-col">
                        <div className="flex flex-col space-y-2">
                            <h3 className="text-2xl font-medium text-black">
                                Registration
                            </h3>
                            <div className="border-2 bg-brand-50 border-brand-100 p-4 rounded-lg">
                                <Formik
                                    initialValues={{ email: "", name: "" }}
                                    validate={(values) => {
                                        const errors = {};

                                        return errors;
                                    }}
                                    onSubmit={(values, { setSubmitting }) => {
                                        setSubmitting(false);
                                    }}
                                >
                                    {({
                                        values,
                                        errors,
                                        touched,
                                        handleChange,
                                        handleSubmit,
                                        isSubmitting,
                                    }) => (
                                        <form
                                            onSubmit={handleSubmit}
                                            className="flex flex-col space-y-4"
                                        >
                                            <div className="flex flex-col space-y-2">
                                                <label
                                                    className="text-black"
                                                    htmlFor="name"
                                                >
                                                    Name
                                                </label>
                                                <input
                                                    className="bg-white border-2 outline-none border-purple-200 rounded-md px-2 py-1 text-black"
                                                    value={values.name}
                                                    onChange={handleChange}
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                />
                                            </div>

                                            <div className="flex flex-col space-y-2">
                                                <label
                                                    className="text-black"
                                                    htmlFor="name"
                                                >
                                                    Email
                                                </label>
                                                <input
                                                    className="bg-white border-2 outline-none border-purple-200 rounded-md px-2 py-1 text-black"
                                                    value={values.email}
                                                    onChange={handleChange}
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                />
                                            </div>
                                            <button className="bg-brand-600 max-w-fit text-lg border-2 focus:ring-2 focus:ring-brand-500 outline-none ring-offset-2 border-transparent shadow-md py-1 px-4 w-full h-full rounded-md active:ring-2 active:ring-brand-500">
                                                Book
                                            </button>
                                        </form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <div className="text-2xl font-medium  text-black">
                                <h3>Event Information</h3>
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
                            <div>FAQ</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col space-y-4">
                    <img
                        className="rounded-lg"
                        src="https://secure-content.meetupstatic.com/images/classic-events/507570333/530x298.webp"
                    />
                    <div className="flex flex-col space-y-4">
                        <div className="grid grid-cols-2 gap-2">
                            <div className="flex items-center justify-between max-w-fit space-x-4 border-2 border-purple-100 p-4 rounded-md">
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
                            <button className="bg-indigo-600 max-w-fit text-lg border-2 focus:ring-2 focus:ring-indigo-500 outline-none ring-offset-2 border-transparent shadow-md px-5 py-2 w-full h-full rounded-md active:ring-2 active:ring-indigo-500">
                                Join Discord
                            </button>
                        </div>
                        {/* Host Details, Join Details, Share, Telegram / Discord */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Event;
