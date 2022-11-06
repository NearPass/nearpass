export const H1 = ({
    children,
    className,
}: {
    children: string;
    className?: string;
}) => {
    return (
        <h1
            className={`text-gray-700 font-bold text-3xl selection:bg-brand-200 selection:text-brand-700 ${className}`}
        >
            {children}
        </h1>
    );
};

export const H2 = ({
    children,
    className,
}: {
    children: string;
    className?: string;
}) => {
    return (
        <h2
            className={`text-gray-600 font-semibold text-2xl selection:bg-brand-200 selection:text-brand-700 ${className}`}
        >
            {children}
        </h2>
    );
};

export const H3 = ({
    children,
    className,
}: {
    children: string;
    className?: string;
}) => {
    return (
        <h3
            className={`text-gray-500 text-xl selection:bg-brand-200 selection:text-brand-700 ${className}`}
        >
            {children}
        </h3>
    );
};

export const H4 = ({
    children,
    className,
}: {
    children: string;
    className?: string;
}) => {
    return (
        <h4
            className={`text-gray-400 text-lg selection:bg-brand-200 selection:text-brand-700 ${className}`}
        >
            {children}
        </h4>
    );
};

export const H5 = ({
    children,
    className,
}: {
    children: string;
    className?: string;
}) => {
    return (
        <h5
            className={`text-gray-400 text-base selection:bg-brand-200 selection:text-brand-700 ${className}`}
        >
            {children}
        </h5>
    );
};

export const H6 = ({
    children,
    className,
}: {
    children: any;
    className?: string;
}) => {
    return (
        <h6
            className={`text-gray-400 text-xs selection:bg-brand-200 selection:text-brand-700 ${className}`}
        >
            {children}
        </h6>
    );
};
