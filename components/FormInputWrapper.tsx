import { ReactNode } from "react";

const FormInputWrapper = ({ children }: { children: ReactNode }) => {
    return <div className="flex w-full flex-col space-y-2">{children}</div>;
};

export default FormInputWrapper;
