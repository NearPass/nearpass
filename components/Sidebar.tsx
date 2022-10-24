import ZapIcon from "./Icons/ZapIcon";
import SidebarMenuItem from "./SidebarMenuItem";
import CheckCircle from "./Icons/CheckCircle";
import { useEffect, useState } from "react";
import useWallet from "../helpers/useWallet";
import { WalletConnection } from "near-api-js";
import { H4, H6 } from "./Headings";

const Sidebar = () => {
    let [near, walletConnection] = useWallet();
    let [accountId, setAccountId] = useState("");
    let [balance, setBalance] = useState(0);

    useEffect(() => {
        (async () => {
            // check if user is signed in
            await checkIfUserAlreadySignedIn();
        })();
    }, []);

    async function checkIfUserAlreadySignedIn() {
        if (walletConnection) {
            if (walletConnection.getAccountId()) {
                setAccountId(walletConnection!.getAccountId());
                let balance = (await walletConnection.account().state()).amount;
                setBalance(balance);
            }
        }
    }

    async function signIn() {
        // @ts-ignore
        if (walletConnection !== null) {
            if (walletConnection) {
                (walletConnection as WalletConnection).requestSignIn({
                    contractId: "testing5.testnet",
                    successUrl: "localhost:3000",
                    failureUrl: "localhost:3000",
                });
            } else {
                console.log(`Not yet init` + walletConnection);
            }
        }
    }

    return (
        <div className="flex flex-col justify-between h-full border-r-2 border-gray-200 min-w-[270px] bg-white">
            <div>
                <div className="text-emerald-800 p-5"></div>
                <div className="flex flex-col space-y-2 p-3 text-emerald-700">
                    <SidebarMenuItem
                        icon={<ZapIcon />}
                        itemName="Upcoming Events"
                    />
                    <SidebarMenuItem
                        icon={<CheckCircle />}
                        itemName="Past Events"
                    />
                </div>
            </div>
            <div className="bg-white border-t-2 border-gray-200 px-2 py-4 flex items-center justify-center">
                {accountId && balance ? (
                    <div>
                        <H6>{accountId}</H6>
                    </div>
                ) : (
                    <button
                        onClick={signIn}
                        className="bg-brand-600 text-lg border-2 focus:ring-2 focus:ring-brand-500 outline-none ring-offset-2 border-transparent shadow-md px-5 py-2 w-full h-full rounded-md active:ring-2 active:ring-brand-500"
                    >
                        Connect Wallet
                    </button>
                )}
            </div>
        </div>
    );
};

export default Sidebar;
