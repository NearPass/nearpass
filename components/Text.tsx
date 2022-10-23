import { ReactNode } from "react";

const Text = ({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) => {
    return (
        <p
            className={`text-gray-400 selection:bg-brand-200 selection:text-brand-700 ${className}`}
        >
            {children}
        </p>
    );
};

export default Text;
