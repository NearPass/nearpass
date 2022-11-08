import Icon from "./Icon";

const Plus = () => {
    return (
        <Icon>
            <path
                xmlns="http://www.w3.org/2000/svg"
                d="M12 5V19M5 12H19"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="stroke-brand-500 group-hover:stroke-brand-600"
            />
        </Icon>
    );
};

export default Plus;
