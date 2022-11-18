import { H5 } from "./Headings";
import MarkerPin from "./Icons/MarkerPin";
import Text from "./Text";

const LocationSection = ({ venue }: { venue: string }) => {
    return (
        <div className="p-4 flex hover:bg-brand-100 hover:border-brand-600 space-x-2 items-start border-brand-100 border-2 rounded-md">
            <div className="">
                <MarkerPin />
            </div>
            <div className="flex justify-center flex-col">
                <H5 className="text-gray-700 leading-tight">Location</H5>
                <Text className="text-gray-700 font-medium">{venue}</Text>
                <Text className="text-sm text-brand-600">
                    <a
                        href={`https://www.google.com/maps/search/${venue}/@20.7710884,73.7280409`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Show on Map
                    </a>
                </Text>
            </div>
        </div>
    );
};
export default LocationSection;
