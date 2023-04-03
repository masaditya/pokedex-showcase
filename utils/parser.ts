export const URLParserId = (url : string) => {
    return url.split("/").slice(-2, -1)[0]
}