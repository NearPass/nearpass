import { ErrorMessage, Formik } from "formik";
import { utils } from "near-api-js";
import useWallet from "../helpers/useWallet";
import FormInput from "./FormInput";
import FormInputWrapper from "./FormInputWrapper";
import { H3, H4, H5, H6 } from "./Headings";
import Mail from "./Icons/Mail";
import Phone from "./Icons/Phone";

type FormInputs = {
    email?: string;
    name?: string;
    phone?: string;
    question1?: string;
    question2?: string;
};

const BuyTicketForm = ({
    price,
    extraQuestions,
}: {
    price: string;
    extraQuestions: string[];
}) => {
    const [_, walletConnection] = useWallet();

    return (
        <div className="border-2 bg-brand-50 border-brand-100 p-4 rounded-lg">
            <Formik
                initialValues={{
                    email: "",
                    name: "",
                    phone: "",
                    question1: "",
                    question2: "",
                }}
                validate={(values) => {
                    let errors: FormInputs = {};
                    if (!values.name) {
                        errors.name = "Name is required";
                    }
                    if (!values.email) {
                        errors.email = "Email is required";
                    }
                    if (!values.question1) {
                        errors.question1 = "Answer is required";
                    }
                    if (!values.question2) {
                        errors.question2 = "Answer is required";
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
                        {walletConnection && (
                            <div className="flex flex-col">
                                <H6>Connected as:</H6>
                                <i>
                                    <H3 className="font-medium text-brand-500">
                                        {walletConnection?.getAccountId()}
                                    </H3>
                                </i>
                            </div>
                        )}
                        <FormInputWrapper>
                            <FormInput
                                placeholder="Enter your name"
                                id="name"
                                label="Name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                                error={
                                    errors.name !== undefined && touched.name
                                }
                                errorMessage={errors.name}
                                className="bg-purple-500"
                            />
                        </FormInputWrapper>

                        <FormInputWrapper>
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
                        </FormInputWrapper>
                        <FormInputWrapper>
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
                        </FormInputWrapper>
                        {extraQuestions &&
                            extraQuestions.map((question, index) => (
                                <FormInputWrapper>
                                    <FormInput
                                        placeholder={question}
                                        id={`question${index + 1}`}
                                        label={question}
                                        type="text"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values[`question${index + 1}`]}
                                        error={
                                            errors[`question${index + 1}`] !==
                                                undefined &&
                                            touched[`question${index + 1}`]
                                        }
                                        errorMessage={
                                            errors[`question${index + 1}`]
                                        }
                                        className="bg-purple-500"
                                        name={`question${index + 1}`}
                                    />
                                </FormInputWrapper>
                            ))}
                        <div className="flex items-end space-x-[2px]">
                            <span className="text-black">Price:</span>
                            <H4 className="text-brand-600 font-semibold text-xl leading-tight">
                                {price
                                    ? `${utils.format.formatNearAmount(
                                          price
                                      )} NEAR`
                                    : "Free"}
                            </H4>
                        </div>
                        <button
                            type="submit"
                            className="bg-brand-600 max-w-fit text-md border-2 focus:ring-2 focus:ring-brand-500 outline-none ring-offset-2 border-transparent shadow-md py-1 px-4 w-full h-full rounded-md active:ring-2 active:ring-brand-500"
                        >
                            Book
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default BuyTicketForm;
