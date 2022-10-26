import { Formik } from "formik";
import useWallet from "../helpers/useWallet";
import FormInput from "./FormInput";
import FormInputWrapper from "./FormInputWrapper";
import { H3, H4, H5, H6 } from "./Headings";
import Mail from "./Icons/Mail";
import clsx from "clsx";
import Radio from "./Radio";
import Telegram from "./Icons/Telegram";
import MessageChatCircle from "./Icons/MessageChatCircle";

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

const CreateEventForm = () => {
    const [_, walletConnection] = useWallet();

    let accountId = walletConnection?.getAccountId();

    return (
        <div className="border-2 bg-brand-50 border-brand-100 p-4 rounded-lg">
            <Formik
                initialValues={FORM_INITIAL_VALUES}
                validate={(values) => {
                    // let errors: any = {};
                    // if (!values.title) {
                    //     errors.title = "Title is required";
                    // }
                    // if (!values.description) {
                    //     errors.description = "Description is required";
                    // }
                    // if (!values.venue) {
                    //     errors.venue = "Venue is required";
                    // }
                    // return errors;
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
                        <div className="flex flex-col">
                            <H6>Connected as:</H6>
                            <i>
                                <H5 className="font-medium text-brand-500">
                                    {accountId as string}
                                </H5>
                            </i>
                        </div>
                        <FormInputWrapper>
                            {values.thumbnail ? (
                                <img />
                            ) : (
                                <label
                                    htmlFor="thumbnail"
                                    className="w-full flex cursor-pointer items-center justify-center border-2 border-dashed border-brand-500 h-48 rounded-lg"
                                >
                                    <H6 className="text-brand-600">
                                        Upload Event Thumbnail
                                    </H6>
                                    <input
                                        className="hidden"
                                        type="file"
                                        name="thumbnail"
                                        id="thumbnail"
                                        value={values.thumbnail}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        accept=".jpg, .png"
                                    />
                                </label>
                            )}
                        </FormInputWrapper>

                        <FormInputWrapper>
                            <FormInput
                                placeholder="Enter Title"
                                id="title"
                                label="Title of Event"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.title}
                                error={
                                    errors.title !== undefined && touched.title
                                }
                                errorMessage={errors.title}
                                className="bg-purple-500"
                            />
                        </FormInputWrapper>

                        <FormInputWrapper>
                            <label className="" id="description">
                                <H6 className="text-gray-700 mb-[6px] font-inter">
                                    Description
                                </H6>
                                <textarea
                                    name="description"
                                    value={values.description}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Event Description"
                                    className={clsx(
                                        {
                                            "focus-within:ring-error-200 focus-within:!border-error-300 border-error-300":
                                                errors.description &&
                                                touched.description,
                                        },
                                        "flex text-brand-600 h-32 outline-none rounded-lg w-full bg-white px-[14px] py-[10px] focus-within:ring-2 focus-within:ring-offset-0 focus-within:ring-brand-200 font-inter items-center border-2 border-gray-300  focus-within:border-brand-300"
                                    )}
                                ></textarea>
                                <div className="mt-[6px]">
                                    {errors.description &&
                                        touched.description &&
                                        errors.description && (
                                            <H6 className="text-error-500 font-inter">
                                                {errors.description}
                                            </H6>
                                        )}
                                </div>
                            </label>
                        </FormInputWrapper>

                        <FormInputWrapper>
                            <Radio
                                label="Tickets Capped"
                                name="ticketcap"
                                id="ticketcap"
                                value={values.ticketcap}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                values={[
                                    { name: "Unlimited", value: "nocap" },
                                    { name: "Limited", value: "limited" },
                                ]}
                            />
                        </FormInputWrapper>

                        {values.ticketcap === "nocap" && (
                            <FormInputWrapper>
                                <FormInput
                                    name="tickets"
                                    id="tickets"
                                    placeholder="No. of tickets"
                                    label="Ticket Count"
                                    value={values.tickets}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </FormInputWrapper>
                        )}

                        <div className="flex w-full space-x-2 justify-between">
                            <FormInputWrapper>
                                <label htmlFor="datetime">
                                    <H6 className="text-gray-700 mb-[6px] font-inter">
                                        Date & Time for Event
                                    </H6>
                                    <input
                                        type="datetime-local"
                                        id="datetime"
                                        name="datetime"
                                        onChange={handleChange}
                                        value={values.datetime}
                                        className="bg-white w-full text-brand-600 rounded-lg border-gray-300 outline-none px-[14px] py-[10px]"
                                    />
                                </label>
                            </FormInputWrapper>
                            {/* <FormInputWrapper>
                                <FormInput
                                    label="Venue for Input"
                                    placeholder="Venue"
                                    id="venue"
                                    name="venue"
                                    value={values.venue}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={
                                        errors.venue !== undefined &&
                                        touched.venue
                                    }
                                    errorMessage={errors.venue}
                                />
                            </FormInputWrapper> */}
                        </div>

                        <FormInputWrapper>
                            <Radio
                                label="Event Type"
                                name="eventtype"
                                id="eventtype"
                                value={values.eventtype}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                values={[
                                    { name: "IRL", value: "irl" },
                                    { name: "Virtual", value: "virtual" },
                                ]}
                            />
                        </FormInputWrapper>
                        <FormInputWrapper>
                            <FormInput
                                name="price"
                                id="price"
                                placeholder="Ticket Price"
                                label="Ticket Price"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={
                                    errors.price !== undefined && touched.price
                                }
                                errorMessage={errors.price}
                                prefix="NEAR"
                            />
                        </FormInputWrapper>
                        <div className="border-t-2 border-brand-200"></div>
                        <H5 className="text-brand-600">Host Details</H5>
                        <div className="flex flex-col border-2 border-brand-200 p-2 space-y-2 rounded-lg">
                            <H6 className="text-gray-600">
                                Host Wallet: (for approving)
                            </H6>
                            <i>
                                <H5 className="font-medium text-brand-500">
                                    {accountId as string}
                                </H5>
                            </i>
                        </div>
                        <FormInputWrapper>
                            <FormInput
                                label="Host Name"
                                id="hostname"
                                name="hostname"
                                placeholder="Host Name"
                                value={values.hostname}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </FormInputWrapper>

                        <FormInputWrapper>
                            <FormInput
                                label="Host Email"
                                name="hostemail"
                                id="hostemail"
                                type="email"
                                placeholder="H  ost Email"
                                value={values.hostemail}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </FormInputWrapper>
                        <div className="border-t-2 border-brand-200"></div>
                        <FormInputWrapper>
                            <FormInput
                                name="telegramgroup"
                                id="telegramgroup"
                                placeholder="Telegram Group Link"
                                value={values.telegramgroup}
                                label="Telegram Group Link"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                leftIcon={<Telegram />}
                            />
                        </FormInputWrapper>

                        <FormInputWrapper>
                            <FormInput
                                name="discordinvitelink"
                                id="discordinvitelink"
                                placeholder="Discord Invite Link"
                                value={values.discordinvitelink}
                                label="Discord Invite Link"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                leftIcon={<MessageChatCircle />}
                            />
                        </FormInputWrapper>

                        <div className="border-2 border-brand-200 p-4 rounded-lg flex flex-col">
                            <H5 className="text-gray-700 mb-4 font-inter">
                                Extra Questions for Attendee
                            </H5>
                            <div className="flex flex-col space-y-4">
                                <FormInput
                                    name="question1"
                                    id="question1"
                                    label="Question 1"
                                    placeholder="Question 1"
                                    value={values.question1}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <FormInput
                                    name="question2"
                                    id="question2"
                                    label="Question 2"
                                    placeholder="Question 2"
                                    value={values.question2}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </div>
                        </div>

                        <div className="border-2 border-brand-200 p-4 rounded-lg flex flex-col">
                            <H5 className="text-gray-700 mb-4 font-inter">
                                FAQ for Attendee
                            </H5>
                            <div className="flex flex-col space-y-4">
                                <div className="flex flex-col border-2 border-brand-200 p-4 rounded-lg">
                                    <FormInput
                                        name="faqquestion1"
                                        id="faqquestion1"
                                        label="Question 1"
                                        placeholder="Question 1"
                                        value={values.faqquestion1}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <FormInput
                                        name="answer1"
                                        id="answer1"
                                        label="Answer 1"
                                        placeholder="Answer 1"
                                        value={values.answer1}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>
                                <div className="flex flex-col border-2 border-brand-200 p-4 rounded-lg">
                                    <FormInput
                                        name="faqquestion2"
                                        id="faqquestion2"
                                        label="Question 2"
                                        placeholder="Question 2"
                                        value={values.faqquestion2}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <FormInput
                                        name="answer2"
                                        id="answer2"
                                        label="Answer 2"
                                        placeholder="Answer 2"
                                        value={values.answer2}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>
                            </div>
                        </div>
                        {/* <FormInputWrapper>
                            <FormInput
                                placeholder="Enter your email"
                                id="email"
                                label="Email"
                                type="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                error={
                                    errors.email !== undefined && touched.email
                                }
                                errorMessage={errors.email}
                                className="bg-purple-500"
                                leftIcon={<Mail />}
                            />
                        </FormInputWrapper> */}
                        {/* <FormInputWrapper>
                            <FormInput
                                placeholder="Enter your phone number"
                                id="phone"
                                label="Phone"
                                type="tel"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.phone}
                                error={
                                    errors.phone !== undefined && touched.phone
                                }
                                errorMessage={errors.phone}
                                className="bg-purple-500"
                                pattern="[0-9]{10}"
                                name="phone"
                                leftIcon={<Phone />}
                            />
                        </FormInputWrapper> */}
                        {/* <div className="flex items-end space-x-[2px]">
                            <span className="text-black">Price:</span>
                            <H4 className="text-brand-600 font-semibold text-xl leading-tight">
                                Free
                            </H4>
                        </div> */}
                        <button
                            type="submit"
                            className="bg-brand-600 max-w-fit text-md border-2 focus:ring-2 focus:ring-brand-500 outline-none ring-offset-2 border-transparent shadow-md py-1 px-4 w-full h-full rounded-md active:ring-2 active:ring-brand-500"
                        >
                            Create
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default CreateEventForm;
