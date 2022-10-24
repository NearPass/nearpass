import { ReactNode } from "react";

const SidebarMenuItem = ({
    icon,
    itemName,
}: {
    icon: ReactNode;
    itemName: string;
}) => {
    return (
        <li className="hover:bg-brand-200 hover:shadow-inner transition-colors duration-150 ease-in-out group w-full flex space-x-2 items-center rounded-md px-3 py-2">
            {icon}
            <h4 className="text-lg text-brand-500 transition-colors duration-150 group-hover:text-brand-700 ">
                {itemName}
            </h4>
        </li>
    );
};

export default SidebarMenuItem;
