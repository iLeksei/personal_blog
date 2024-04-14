import {useEffect, useState} from "react";
import {getHost} from "../utils";

export function useFetch<T>(url: string): [T | undefined, boolean, unknown] {
    const [data, setData] = useState<T>();
    const [error, setError] = useState<unknown>();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const abortController = new AbortController();
        fetchData(url, abortController.signal);
        return () => abortController.abort();
    }, [url])

    const fetchData = async (url: string, signal: AbortSignal | undefined) => {
        try {
            setIsLoading(true);
            setError(undefined);
            const _url: URL = new URL(getHost());
            _url.pathname = url;
            const response = await fetch(_url, {signal});
            const data = await response.json();
            setData(data);
        } catch (err) {
            setError(err);
        }
        setIsLoading(false);
    }

    return [data, isLoading, error];
}