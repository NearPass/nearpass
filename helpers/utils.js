export function timestampToDateTime(timestamp) {
    return new Date(Number(timestamp / 1000000)).toString();
}
