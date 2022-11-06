import { Host } from "../types";
import { H5, H6 } from "./Headings";

const Host = ({ host }: { host: Host }) => {
    return (
        <li>
            <div className="flex flex-col justify-center">
                <H6>Host</H6>
                <H5 className="text-purple-500 text-md">{host.name}</H5>
                <H6 className="text-purple-700 font-semibold text-sm">
                    {host.email}
                </H6>
            </div>
        </li>
    );
};

export default Host;
