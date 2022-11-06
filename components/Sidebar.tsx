import ZapIcon from "./Icons/ZapIcon";
import SidebarMenuItem from "./SidebarMenuItem";
import CheckCircle from "./Icons/CheckCircle";
import { useEffect, useState } from "react";
import useWallet from "../helpers/useWallet";
import { WalletConnection, utils } from "near-api-js";
import { H4, H5, H6 } from "./Headings";
import AccountDetails from "./AccountDetails";
import Link from "next/link";

const Sidebar = () => {
    let [_, walletConnection] = useWallet();
    let [accountId, setAccountId] = useState<string | undefined>();
    let [balance, setBalance] = useState<string | undefined>();

    useEffect(() => {
        (async () => {
            if (walletConnection) {
                let accountId = walletConnection.getAccountId();
                if (accountId) {
                    setAccountId(accountId);
                    let balance = (await walletConnection.account().state())
                        .amount;
                    setBalance(balance);
                }
            }
        })();
    }, [walletConnection]);

    async function signOut() {
        if (walletConnection) {
            (walletConnection as WalletConnection).signOut();
            setAccountId("");
            setBalance("");
        }
    }

    return (
        <div className="flex flex-col justify-between h-full border-r-2 border-gray-200 min-w-[270px] bg-white">
            <div>
                <div className="text-emerald-800 p-5">
                    <img src="/logo.png" className="bg-transparent h-14" />
                </div>
                <ul className="flex flex-col space-y-2 p-3 text-emerald-700">
                    <Link href="/">
                        <a>
                            <SidebarMenuItem
                                icon={<ZapIcon />}
                                itemName="Upcoming Events"
                            />
                        </a>
                    </Link>
                    <SidebarMenuItem
                        icon={<CheckCircle />}
                        itemName="Past Events"
                    />
                </ul>
            </div>
            <div className="bg-white border-t-2 border-gray-200 px-2 py-4 flex items-center justify-center">
                <AccountDetails
                    accountId={accountId}
                    balance={balance}
                    signOut={signOut}
                />
            </div>
        </div>
    );
};

export default Sidebar;
