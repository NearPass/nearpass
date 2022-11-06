import { H5 } from "./Headings";
import MarkerPin from "./Icons/MarkerPin";
import Text from "./Text";

const LocationSection = ({ venue }: { venue: string }) => {
    return (
        <div className="p-4 flex space-x-2 items-start border-brand-100 border-2 rounded-md">
            <div className="">
                <MarkerPin />
            </div>
            <div className="flex justify-center flex-col space-y-2">
                <H5 className="text-gray-700 leading-tight">Location</H5>
                <Text className="text-gray-700 font-medium">{venue}</Text>
                <Text className="text-sm text-brand-600">
                    <a href="https://www.google.com">Show on Map</a>
                </Text>
            </div>
        </div>
    );
};
export default LocationSection;
