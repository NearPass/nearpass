import clsx from "clsx";

const Avatar = ({ element }: { element: string }) => {
    return (
        <li
            className={clsx(
                `overflow-hidden border-2 box-border hover:border-brand-500 hover:translate-y-[-.5rem] transition-transform duration-300 border-gray-200 rounded-full h-12 w-12`,
                `${element}`
            )}
        >
            <img
                className="bg-cover"
                src="https://secure.meetupstatic.com/photos/member/5/2/9/0/thumb_312621136.jpeg"
            />
        </li>
    );
};

export default Avatar;
