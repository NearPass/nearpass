import { InputHTMLAttributes, useState } from "react";
import { RadioGroup } from "@headlessui/react";
import clsx from "clsx";
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from "react-icons/md";
import { H6 } from "./Headings";

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
    values: ({ [key: string]: string } & { name: string })[];
    label: string;
    name: string;
    id: string;
}

const Radio = ({
    value,
    values,
    label,
    name,
    id,
    disabled,
    onChange,
    onBlur,
    ...props
}: RadioProps) => {
    return (
        <RadioGroup
            className="flex flex-col space-y-4"
            name={name}
            id={id}
            onChange={onChange}
            onBlur={onBlur}
        >
            <RadioGroup.Label>
                <H6 className="text-gray-700 mb-[6px] font-inter">{label}</H6>
            </RadioGroup.Label>
            <div className="flex flex-col space-y-2">
                {values.map((value) => (
                    <RadioGroup.Option
                        className={({ disabled, checked }) =>
                            clsx(
                                {
                                    "outline-none border-[1px] border-brand-200":
                                        !checked,
                                },
                                {
                                    "hover:border-brand-300 focus:border-brand-300 focus:shadow-brand-100 focus:shadow-md":
                                        !checked && !disabled,
                                },
                                {
                                    "border-2 border-brand-600 bg-brand-50":
                                        checked,
                                },
                                {
                                    "bg-gray-50": disabled,
                                },
                                "group rounded-xl p-4"
                            )
                        }
                        key={value.name}
                        value={value.value}
                    >
                        {({ active, checked }) => (
                            <div className="flex w-full space-x-2 items-start justify-between">
                                <div className="text-lg">
                                    {checked ? (
                                        <MdRadioButtonChecked className="fill-brand-700" />
                                    ) : (
                                        <MdRadioButtonUnchecked
                                            className={clsx({
                                                "fill-brand-700":
                                                    !checked && !disabled,
                                            })}
                                        />
                                    )}
                                </div>
                                <div className="flex flex-1  flex-col space-y-2">
                                    <RadioGroup.Label
                                        as="span"
                                        className={clsx(
                                            "text-brand-700 font-medium",
                                            { "text-brand-800": checked }
                                        )}
                                    >
                                        {value.name}
                                    </RadioGroup.Label>
                                    <RadioGroup.Description
                                        className={clsx(
                                            {
                                                "text-brand-700": checked,
                                            },
                                            "text-gray-600"
                                        )}
                                        as="span"
                                    >
                                        {value.description}
                                    </RadioGroup.Description>
                                </div>
                            </div>
                        )}
                    </RadioGroup.Option>
                ))}
            </div>
        </RadioGroup>
    );
};

export default Radio;
