import { useState, useEffect, useCallback } from "react";

export const useFetch = (url) => {
    const [appData, setAppData] = useState([]);

    const fetchData = useCallback(async () => {
        const response = await fetch(url);
        if (response.status >= 200 || response.status <= 299) {
            const answer = await response.json();
            setAppData(answer);
        }
    }, [url]);

    useEffect(() => {
        fetchData();
    }, [url, fetchData]);
    return { appData };
}