const CONTRACT_NAME = "TBD";

function getConfig(env: string) {
    switch (env) {
        case "mainnet":
            return {
                networkId: "mainnet",
                nodeUrl: "https://rpc.mainnet.near.org",
                contractName: CONTRACT_NAME,
                walletUrl: "https://wallet.near.org",
                helperUrl: "https://helper.mainnet.near.org",
            };
        // This is an example app so production is set to testnet.
        // You can move production to mainnet if that is applicable.
        case "production":
        case "development":
        case "testnet":
        default:
            return {
                networkId: "testnet",
                nodeUrl: "https://rpc.testnet.near.org",
                contractName: CONTRACT_NAME,
                walletUrl: "https://wallet.testnet.near.org",
                helperUrl: "https://helper.testnet.near.org",
            };
    }
}

export default getConfig;
