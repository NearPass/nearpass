import React, { ReactNode } from "react";
import useWallet from "../helpers/useWallet";
import { H3 } from "./Headings";

const PrivateRoute = ({ children }) => {
    const [_, walletConnection] = useWallet();

    return (
        <React.Fragment>
            {walletConnection && walletConnection.isSignedIn() ? (
                { children }
            ) : (
                <div className="flex items-center justify-center p-4">
                    <div className="border-2 border-gray-200 w-full rounded-md flex items-center justify-center p-4">
                        <H3>Please Connect Wallet First.</H3>
                    </div>
                </div>
            )}
        </React.Fragment>
    );
};

export default PrivateRoute;
