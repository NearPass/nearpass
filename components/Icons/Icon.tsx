import { ReactNode } from "react";

const Icon = ({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`w-5 ${className}`}
        >
            {children}
        </svg>
    );
};

export default Icon;
