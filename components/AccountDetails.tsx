import { utils } from "near-api-js";
import { H5, H6 } from "./Headings";

interface AccountDetailsProps {
    accountId: string | undefined;
    balance: string | undefined;
    signIn: () => void;
    signOut: () => void;
}

const AccountDetails = ({
    accountId,
    balance,
    signIn,
    signOut,
}: AccountDetailsProps) => {
    return (
        <>
            {accountId && balance ? (
                <div>
                    <H6>{accountId}</H6>
                    <H5 className="text-brand-600">
                        {`${utils.format
                            .formatNearAmount(balance)
                            .substr(0, 6)} NEAR`}
                    </H5>
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
