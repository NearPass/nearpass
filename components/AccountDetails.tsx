import { utils } from "near-api-js";
import useWallet from "../helpers/useWallet";
import { H5, H6 } from "./Headings";
import { WalletConnection } from "near-api-js";
import ExternalLinkAlt from "./Icons/ExternalLinkAlt";

interface AccountDetailsProps {
    accountId: string | undefined;
    balance: string | undefined;
    signOut: () => void;
}

const EVENTS_CONTRACT = process.env.NEXT_PUBLIC_EVENT_CONTRACT_ADDRESS;

const AccountDetails = ({
    accountId,
    balance,
    signOut,
}: AccountDetailsProps) => {
    let [_, walletConnection] = useWallet();

    async function signIn() {
        // @ts-ignore
        if (walletConnection !== null) {
            if (walletConnection) {
                walletConnection.requestSignIn({
                    contractId: EVENTS_CONTRACT,
                    successUrl: "http://localhost:3000",
                    failureUrl: "localhost:3000",
                });
            } else {
                console.log(`Not yet init` + walletConnection);
            }
        }
    }

    return (
        <>
            {accountId && balance ? (
                <div className="flex flex-col pl-2">
                    <H6>{accountId}</H6>
                    <div className="flex space-x-2">
                        <H5 className="text-brand-600 ">
                            {`${utils.format
                                .formatNearAmount(balance)
                                .substr(0, 6)} NEAR`}
                        </H5>
                        <a
                            href={`https://explorer.testnet.near.org/accounts/${accountId}`}
                            target="_blank"
                        >
                            <ExternalLinkAlt className="h-3 w-3" />
                        </a>
                    </div>
                </div>
            ) : (
                <button
                    onClick={signIn}
                    className="bg-brand-600 text-lg border-2 focus:ring-2 focus:ring-brand-500 outline-none ring-offset-2 border-transparent shadow-md px-5 py-2 w-full h-full rounded-md active:ring-2 active:ring-brand-500"
                >
                    Connect Wallet
                </button>
            )}
        </>
    );
};

export default AccountDetails;
