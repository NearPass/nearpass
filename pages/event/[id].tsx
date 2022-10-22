// Dedicated page for every event containing information like description, venue, date, time and sign up form.

import { Formik } from "formik";
import Text from "../../components/Text";
import { H1, H4, H3, H5, H6 } from "../../components/Headings";
import Calendar from "../../components/Icons/Calendar";

type FormInputs = {
    email?: string;
    name?: string;
};

const Event = () => {
    return (
        <div className="flex flex-col items-start space-y-8 justify-center px-32 pt-12">
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
                            <div className="border-2 bg-brand-50 border-brand-100 p-4 rounded-lg">
                                <Formik
                                    initialValues={{ email: "", name: "" }}
                                    validate={(values) => {
                                        let errors: FormInputs = {};
                                        if (!values.name) {
                                            errors.name = "Name is required";
                                        }
                                        if (!values.email) {
                                            errors.email = "Email is required";
                                        }
                                        return errors;
                                    }}
                                    onSubmit={(values, { setSubmitting }) => {
                                        console.log(values);
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
                                        handleBlur,
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
                                                    onBlur={handleBlur}
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                />
                                                <H6 className="text-red-500">{`${
                                                    errors.name && touched.name
                                                        ? errors.name
                                                        : ""
                                                }`}</H6>
                                            </div>

                                            <div className="flex flex-col space-y-2">
                                                <label
                                                    className="text-black"
                                                    htmlFor="name"
                                                >
                                                    <H5 className="!text-gray-700">
                                                        Email
                                                    </H5>
                                                </label>
                                                <input
                                                    className="bg-white border-2 outline-none border-purple-200 rounded-md px-2 py-1 text-black"
                                                    value={values.email}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                />
                                                <H6 className="text-red-500">{`${
                                                    errors.email &&
                                                    touched.email
                                                        ? errors.email
                                                        : ""
                                                }`}</H6>
                                            </div>
                                            <div className="flex items-end space-x-[2px]">
                                                <span className="text-black">
                                                    Price:
                                                </span>
                                                <H4 className="text-brand-600 font-semibold text-xl leading-tight">
                                                    Free
                                                </H4>
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
