import {
    ErrorMessage,
    Field,
    Formik,
    FormikConfig,
    FormikHandlers,
    FormikProps,
} from "formik";
import useWallet from "../helpers/useWallet";
import FormInput from "./FormInput";
import FormInputWrapper from "./FormInputWrapper";
import { H4, H5, H6 } from "./Headings";
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
    hostemail: "",
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

const CreateEventForm = ({
    formik,
}: {
    formik: FormikProps<typeof FORM_INITIAL_VALUES>;
}) => {
    const [_, walletConnection] = useWallet();

    let accountId = walletConnection?.getAccountId();

    return (
        <div className="border-2 bg-brand-50 border-brand-100 p-4 rounded-lg">
            <form
                onSubmit={formik.handleSubmit}
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
                    {formik.values.thumbnail ? (
                        <img
                            className="rounded-lg"
                            src={formik.values.thumbnail}
                        />
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
                                value={formik.values.thumbnail}
                                onChange={(e) => {
                                    if (e.target !== null) {
                                        formik.setFieldValue(
                                            "thumbnail",
                                            URL.createObjectURL(
                                                e.target.files[0]
                                            )
                                        );
                                    }
                                }}
                                onBlur={formik.handleBlur}
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
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.title}
                        error={
                            formik.errors.title !== undefined &&
                            formik.touched.title
                        }
                        errorMessage={formik.errors.title}
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
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Event Description"
                            className={clsx(
                                {
                                    "focus-within:ring-error-200 focus-within:!border-error-300 border-error-300":
                                        formik.errors.description &&
                                        formik.touched.description,
                                },
                                "flex text-brand-600 h-32 outline-none rounded-lg w-full bg-white px-[14px] py-[10px] focus-within:ring-2 focus-within:ring-offset-0 focus-within:ring-brand-200 font-inter items-center border-2 border-gray-300  focus-within:border-brand-300"
                            )}
                        ></textarea>
                        <div className="mt-[6px]">
                            {formik.errors.description &&
                                formik.touched.description &&
                                formik.errors.description && (
                                    <H6 className="text-error-500 font-inter">
                                        {formik.errors.description}
                                    </H6>
                                )}
                        </div>
                    </label>
                </FormInputWrapper>

                <FormInputWrapper>
                    <H6 className="text-gray-700 mb-[6px] font-inter">
                        Ticket Limit
                    </H6>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col">
                            <input
                                type="radio"
                                name="ticketcap"
                                id="unlimited"
                                className="hidden peer"
                                value="unlimited"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            <label
                                htmlFor="unlimited"
                                className="border-2 text-center peer-checked:bg-brand-500 peer-checked:text-white border-brand-500 bg-transparent rounded-lg text-brand-500 px-2 py-4"
                            >
                                Unlimited
                            </label>
                        </div>
                        <div className="flex flex-col">
                            <input
                                type="radio"
                                name="ticketcap"
                                id="limited"
                                className="peer hidden"
                                value="limited"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            <label
                                htmlFor="limited"
                                className="border-2 peer-checked:bg-brand-500 peer-checked:text-white text-center border-brand-500 bg-transparent rounded-lg text-brand-500 px-2 py-4"
                            >
                                Limited
                            </label>
                        </div>
                    </div>
                </FormInputWrapper>
                {/* <Radio
                        label="Tickets Capped"
                        name="ticketcap"
                        id="ticketcap"
                        value={formik.values.ticketcap}
                        // onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        values={[
                            { name: "Unlimited", value: "nocap" },
                            { name: "Limited", value: "limited" },
                        ]}
                    /> */}

                {formik.values.ticketcap === "limited" && (
                    <FormInputWrapper>
                        <FormInput
                            name="tickets"
                            id="tickets"
                            placeholder="No. of tickets"
                            label="Ticket Count"
                            value={formik.values.tickets}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
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
                                onChange={formik.handleChange}
                                value={formik.values.datetime}
                                className="bg-white w-full text-brand-600 rounded-lg border-gray-300 outline-none px-[14px] py-[10px]"
                            />
                        </label>
                    </FormInputWrapper>
                </div>

                <FormInputWrapper>
                    <H6 className="text-gray-700 mb-[6px] font-inter">
                        Event Type
                    </H6>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col">
                            <input
                                type="radio"
                                name="eventtype"
                                id="irl"
                                className="hidden peer"
                                value="irl"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            <label
                                htmlFor="irl"
                                className="border-2 text-center peer-checked:bg-brand-500 peer-checked:text-white border-brand-500 bg-transparent rounded-lg text-brand-500 px-2 py-4"
                            >
                                IRL
                            </label>
                        </div>
                        <div className="flex flex-col">
                            <input
                                type="radio"
                                name="eventtype"
                                id="virtual"
                                className="peer hidden"
                                value="virtual"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            <label
                                htmlFor="virtual"
                                className="border-2 peer-checked:bg-brand-500 peer-checked:text-white text-center border-brand-500 bg-transparent rounded-lg text-brand-500 px-2 py-4"
                            >
                                Virtual
                            </label>
                        </div>
                    </div>
                </FormInputWrapper>

                {formik.values.eventtype === "irl" && (
                    <FormInputWrapper>
                        <FormInput
                            label="Venue"
                            name="venue"
                            id="venue"
                            value={formik.values.venue}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={
                                formik.errors.venue !== undefined &&
                                formik.touched.venue
                            }
                            placeholder="Venue"
                            errorMessage={formik.errors.venue}
                        />
                    </FormInputWrapper>
                )}

                <FormInputWrapper>
                    <FormInput
                        name="price"
                        id="price"
                        placeholder="Ticket Price"
                        label="Ticket Price"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                            formik.errors.price !== undefined &&
                            formik.touched.price
                        }
                        errorMessage={formik.errors.price}
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
                        value={formik.values.hostname}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </FormInputWrapper>

                <FormInputWrapper>
                    <FormInput
                        label="Host Email"
                        name="hostemail"
                        id="hostemail"
                        type="email"
                        placeholder="Host Email"
                        value={formik.values.hostemail}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </FormInputWrapper>
                <div className="border-t-2 border-brand-200"></div>
                <FormInputWrapper>
                    <FormInput
                        name="telegramgroup"
                        id="telegramgroup"
                        placeholder="Telegram Group Link"
                        value={formik.values.telegramgroup}
                        label="Telegram Group Link"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        leftIcon={<Telegram />}
                    />
                </FormInputWrapper>

                <FormInputWrapper>
                    <FormInput
                        name="discordinvitelink"
                        id="discordinvitelink"
                        placeholder="Discord Invite Link"
                        value={formik.values.discordinvitelink}
                        label="Discord Invite Link"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
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
                            value={formik.values.question1}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <FormInput
                            name="question2"
                            id="question2"
                            label="Question 2"
                            placeholder="Question 2"
                            value={formik.values.question2}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
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
                                value={formik.values.faqquestion1}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            <FormInput
                                name="answer1"
                                id="answer1"
                                label="Answer 1"
                                placeholder="Answer 1"
                                value={formik.values.answer1}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        <div className="flex flex-col border-2 border-brand-200 p-4 rounded-lg">
                            <FormInput
                                name="faqquestion2"
                                id="faqquestion2"
                                label="Question 2"
                                placeholder="Question 2"
                                value={formik.values.faqquestion2}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            <FormInput
                                name="answer2"
                                id="answer2"
                                label="Answer 2"
                                placeholder="Answer 2"
                                value={formik.values.answer2}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                    </div>
                </div>

                <button
                    type="submit"
                    className="bg-brand-600 max-w-fit text-md border-2 focus:ring-2 focus:ring-brand-500 outline-none ring-offset-2 border-transparent shadow-md py-1 px-4 w-full h-full rounded-md active:ring-2 active:ring-brand-500"
                >
                    Create
                </button>
            </form>
        </div>
    );
};

export default CreateEventForm;
