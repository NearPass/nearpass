import Icon from "./Icon";

const ChevronDown = ({ className }: { className?: string }) => {
    return (
        <Icon>
            <path
                xmlns="http://www.w3.org/2000/svg"
                d="M6 9L12 15L18 9"
                className={`stroke-brand-500 group-hover:stroke-brand-600 ${className}`}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Icon>
    );
};

export default ChevronDown;
