import Icon from "./Icon";

function CheckCircle() {
    return (
        <Icon>
            <path
                d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="stroke-purple-500 group-hover:stroke-purple-600"
            />
        </Icon>
    );
}

export default CheckCircle;