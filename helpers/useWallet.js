import * as nearAPI from "near-api-js";
import { WalletConnection } from "near-api-js";
import { useEffect, useState } from "react";
import getConfig from "./config";

function useWallet() {
    const [walletConnection, setWalletConnection] = useState(null);
    const [near, setNear] = useState(null);

    useEffect(() => {
        (async () => {
            const nearConfig = getConfig("testnet");
            const keyStore =
                new nearAPI.keyStores.BrowserLocalStorageKeyStore();

            let near = await nearAPI.connect({ keyStore, ...nearConfig });
            setNear(near);
            let wallet = new nearAPI.WalletConnection(near, "event");
            setWalletConnection(wallet);
        })();
    }, []);

    return [near, walletConnection];
}

export default useWallet;
