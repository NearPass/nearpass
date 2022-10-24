import clsx from "clsx";
import Avatar from "./Avatar";
import { H5 } from "./Headings";

const AttendeesList = () => {
    return (
        <ul className="max-w-fit items-center flex space-x-[-15px]">
            {Array.from(Array(5).keys(), (x) => `z-[${x}]`).map((element) => (
                <Avatar element={element} />
            ))}
            <li className="!ml-[10px]">
                <H5 className="text-brand-600 font-medium">+59 More</H5>
            </li>
        </ul>
    );
};

export default AttendeesList;
