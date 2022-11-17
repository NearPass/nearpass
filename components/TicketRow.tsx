import { Event, Ticket } from "../types";
import { H5 } from "./Headings";

const TicketRow = ({ ticket }: { ticket: Ticket }) => {
    let { id, name, accountId, email, redeemable, used } = ticket;

    return (
        <tr id={id} className="hover:bg-gray-200">
            <th className="p-4 ">
                <H5 className="text-gray-700">
                    {`#${id.replaceAll('"', "").split("#")[1]}`}
                </H5>
            </th>
            <th>
                <H5 className="text-gray-700">{name}</H5>
            </th>
            <th>
                <H5 className="text-gray-700">{accountId}</H5>
            </th>
            <th>
                <H5 className="text-gray-700">{email}</H5>
            </th>
            <th>
                {used ? (
                    <H5 className="text-white bg-green-500 inline p-2 rounded-md">
                        Used
                    </H5>
                ) : (
                    <H5 className="text-white bg-red-500 inline p-2 rounded-md">
                        Not Used
                    </H5>
                )}
            </th>
        </tr>
    );
};

export default TicketRow;
