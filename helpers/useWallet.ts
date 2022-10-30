import * as nearAPI from "near-api-js";
import { Near, WalletConnection } from "near-api-js";
import { BrowserLocalStorageKeyStore } from "near-api-js/lib/key_stores";
import { useEffect, useState } from "react";
import getConfig from "./config";

function useWallet(): [
    near: Near | null,
    walletConnection: WalletConnection | null,
    keyStore: BrowserLocalStorageKeyStore | null
] {
    const [walletConnection, setWalletConnection] =
        useState<WalletConnection | null>(null);
    const [near, setNear] = useState<Near | null>(null);
    const [keyStore, setKeyStore] =
        useState<BrowserLocalStorageKeyStore | null>(null);

    useEffect(() => {
        (async () => {
            const nearConfig = getConfig("testnet");
            const keyStore =
                new nearAPI.keyStores.BrowserLocalStorageKeyStore();
            setKeyStore(keyStore);
            let near = await nearAPI.connect({ keyStore, ...nearConfig });
            setNear(near);
            let wallet = new nearAPI.WalletConnection(near, "event");
            setWalletConnection(wallet);
        })();
    }, []);

    return [near, walletConnection, keyStore];
}

export default useWallet;
