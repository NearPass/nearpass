import { InputHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import { MdOutlineErrorOutline } from "react-icons/md";
import { H6 } from "./Headings";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    className?: string;
    leftIcon?: ReactNode;
    hint?: string;
    errorMessage?: string;
    error?: boolean;
    prefix?: string;
}

const FormInput = ({
    label,
    className,
    leftIcon,
    placeholder = "placeholder",
    type = "text",
    prefix,
    error,
    errorMessage,
    id,
    ...props
}: InputProps): React.ReactElement => {
    return (
        <label className="w-full" htmlFor={id}>
            {label && (
                <H6 className="text-gray-700 mb-[6px] font-inter">{label}</H6>
            )}
            <div className="flex w-full">
                {prefix && (
                    <span className="rounded-l-lg border-gray-300 border-2 border-r-0 bg-base-white inline-flex items-center px-3 font-inter text-gray-600">
                        {prefix}
                    </span>
                )}
                <div
                    className={clsx(
                        {
                            "!bg-gray-50": props.disabled,
                            "rounded-r-lg": prefix,
                            "rounded-lg": !prefix,
                        },
                        {
                            "focus-within:ring-error-200 focus-within:!border-error-300 border-error-300":
                                error,
                        },
                        "flex w-full bg-white px-[14px] py-[10px] focus-within:ring-2 focus-within:ring-offset-0 focus-within:ring-brand-200 font-inter items-center border-2 border-gray-300  focus-within:border-brand-300"
                    )}
                >
                    <input
                        className={clsx(
                            "peer w-full bg-transparent text-brand-600 selection:text-brand-700 selection:bg-brand-200",
                            "outline-none",
                            {
                                "!bg-gray-50": props.disabled,
                            }
                        )}
                        type={type}
                        name={id}
                        id={id}
                        placeholder={placeholder}
                        {...props}
                    />
                    {leftIcon && (
                        <span
                            className={clsx(
                                { "!text-error-400": error },
                                "peer-focus:text-brand-600 text-gray-300 order-first mr-2 h-5 w-5 flex items-center"
                            )}
                        >
                            {leftIcon}
                        </span>
                    )}
                    {error && (
                        <MdOutlineErrorOutline className="h-5 w-5 text-error-500" />
                    )}
                </div>
            </div>
            <div className="mt-[6px]">
                {props.hint && !error && (
                    <div className="text-gray-500 font-inter">{props.hint}</div>
                )}
                {error && errorMessage && (
                    <H6 className="text-error-500 font-inter">
                        {errorMessage}
                    </H6>
                )}
            </div>
        </label>
    );
};

export default FormInput;
