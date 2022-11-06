import { Event } from "../../types";
import { timestampToDateTime } from "../../helpers/utils";
import { useEffect, useState } from "react";
import axios from "axios";
import { H5, H6 } from "../Headings";

const EventCard = ({ event }: { event: Event }) => {
    const { title, thumbnail, host, timestamp } = event;

    const [imageB64, setImageB64] = useState<string>();

    useEffect(() => {
        if (thumbnail) {
            (async () => {
                try {
                    let res = await axios.get(
                        `https://ipfs.io/ipfs/${thumbnail.replace(
                            "ipfs://",
                            ""
                        )}`
                    );
                    let image = await axios.get(
                        `https://ipfs.io/ipfs/${res.data.image.replace(
                            "ipfs://",
                            ""
                        )}`
                    );
                    setImageB64(image.data);
                } catch (e) {
                    console.log(e);
                }
            })();
        }
    }, [thumbnail]);

    return (
        <div className="w-full hover:bg-slate-50 hover:shadow-inner p-3 rounded-md flex flex-col space-y-2">
            <div className="flex relative items-center justify-center rounded-md overflow-hidden">
                {/* <span className="absolute top-2 left-2 bg-brand-500 px-[6px] py-[3px] text-xs rounded-md">
                    {`${attendees} Attendees`}
                </span> */}
                {thumbnail && <img src={imageB64} />}
            </div>
            <div className="flex flex-col space-y-1">
                <H6 className="text-brand-500 text-sm font-semibold">
                    {timestampToDateTime(timestamp)}
                </H6>
                <H5 className="text-gray-600 text-md font-medium">{title}</H5>
                <H6 className="text-slate-500 text-sm">
                    Hosted by:{" "}
                    {host && (
                        <span className="text-brand-600 font-bold">
                            {host.name}
                        </span>
                    )}
                </H6>
            </div>
        </div>
    );
};

export default EventCard;
