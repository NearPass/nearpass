import { Disclosure } from "@headlessui/react";
import clsx from "clsx";
import { H3, H4, H5 } from "./Headings";
import ChevronDown from "./Icons/ChevronDown";

const FAQSection = () => {
    return (
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
                                        "border-b-2 border-gray-200": !open,
                                    }
                                )}
                            >
                                <H4 className="text-gray-700">
                                    When is the event?
                                </H4>
                                <div className={open ? `rotate-180` : ""}>
                                    <ChevronDown
                                        className={clsx("stroke-gray-400")}
                                    />
                                </div>
                            </Disclosure.Button>
                            <Disclosure.Panel
                                className={clsx("mt-2 pb-4 pl-4 w-full", {
                                    "border-b-2 border-gray-200": open,
                                })}
                            >
                                <H5 className="text-gray-700">
                                    The event is on 1st January 2023.
                                </H5>
                            </Disclosure.Panel>
                        </div>
                    )}
                </Disclosure>
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
                                        "border-b-2 border-gray-200": !open,
                                    }
                                )}
                            >
                                <H4 className="text-gray-700">
                                    When is the event?
                                </H4>
                                <div className={open ? `rotate-180` : ""}>
                                    <ChevronDown
                                        className={clsx("stroke-gray-400")}
                                    />
                                </div>
                            </Disclosure.Button>
                            <Disclosure.Panel
                                className={clsx("mt-2 pb-4 pl-4 w-full", {
                                    "border-b-2 border-gray-200": open,
                                })}
                            >
                                <H5 className="text-gray-700">
                                    The event is on 1st January 2023.
                                </H5>
                            </Disclosure.Panel>
                        </div>
                    )}
                </Disclosure>
            </div>
        </section>
    );
};

export default FAQSection;
