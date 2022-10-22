import { ReactNode } from "react";
import { Event } from "../../types";

const EventCard = ({ event }: { event: Event }) => {
    const { attendees, eventTitle, hostName, thumbnailUrl } = event;

    return (
        <div className="w-full hover:bg-slate-50 hover:shadow-inner p-3 rounded-md flex flex-col space-y-2">
            <div className="flex relative items-center justify-center rounded-md overflow-hidden">
                <span className="absolute top-2 left-2 bg-brand-500 px-[6px] py-[3px] text-xs rounded-md">
                    {`${attendees} Attendees`}
                </span>
                <img src={thumbnailUrl} />
            </div>
            <div className="flex flex-col space-y-1">
                <h6 className="text-brand-500 text-sm font-semibold">
                    Thu, Oct 27 · 6:30 PM IST
                </h6>
                <h5 className="text-gray-600 text-md font-medium">
                    {eventTitle}
                </h5>
                <h6 className="text-slate-500 text-sm">
                    Hosted by:{" "}
                    <span className="text-brand-600 font-bold">{hostName}</span>
                </h6>
            </div>
        </div>
    );
};

export default EventCard;
