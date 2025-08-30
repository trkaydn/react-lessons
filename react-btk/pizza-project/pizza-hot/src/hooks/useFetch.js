import { useEffect, useState, useCallback } from "react";

export default function useFetch(url, config, initialData) {
    const [data, setData] = useState(initialData);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const sendRequest = useCallback(async function sendRequest(data) {
        setIsLoading(true);
        try {
            const response = await fetch(url, {...config, body: data});
            const responseData = await response.json();

            if(!response.ok){
                setError(responseData.message || "Something went wrong.");
            }else{
                setData(responseData);
            }
        }
        catch (err) {
            setError(err.message || "Something went wrong.");
        }
        finally {
            setIsLoading(false);
        }
    }, [url, config]);

    useEffect(() => {
        if(config && config.method === "GET"){
            sendRequest();
        }
    }, [sendRequest, config]);

    return { data, error, isLoading, sendRequest };
}