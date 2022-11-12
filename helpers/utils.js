export function timestampToDateTime(timestamp) {
    return new Date(Number(timestamp / 1000000)).toString();
}

export function concat(args, accountId) {
    return args[0] + accountId + args[1];
}
