import { useCallback, useState } from "react";

const UseHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = useCallback ( async ( requestConfig, applyData) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(
                requestConfig.url,
                {
                    method: requestConfig.method ? requestConfig.method : 'GET',
                    headers: requestConfig.headers ? requestConfig.headers : {},
                    body: requestConfig.body ? JSON.stringify(requestConfig.body) : null
                }
            );

            if (!response.ok) {
                throw new Error("Something went wrong!");
            }

            const recourse = await response.json();

            console.log(recourse);
            applyData(recourse);

        } catch (error) {
            setError(error.message);
        }

        setIsLoading(false);

    }, []);

    return {
        isLoading,
        error,
        sendRequest
    }
}

export default UseHttp;