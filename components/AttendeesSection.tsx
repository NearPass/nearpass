import AttendeesList from "./AttendeesList";
import { H4 } from "./Headings";

const AttendeesSection = () => {
    return (
        <div className="p-4 w-full flex flex-col border-2 border-brand-100 space-y-2 rounded-md">
            <div className="flex items-center space-x-2">
                <H4 className="text-gray-700">Attendees</H4>
                <span className="bg-brand-200 text-brand-600 px-2 py-[2px] rounded-md text-xs">
                    64
                </span>
            </div>
            <AttendeesList />
        </div>
    );
};

export default AttendeesSection;
