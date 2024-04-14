

export const getHost = (): string => {
    return process.env.NODE_ENV === "development" ? "http://localhost:8080" : "";
}