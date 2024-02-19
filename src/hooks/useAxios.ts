import React from "react";

interface AxiosProps {
    axiosInstance: any,
    method: string,
    url: string,
    othersConfigs: any
}

export default function useAxios<T>(configRequest: AxiosProps) {

    const { axiosInstance, method, url, othersConfigs = {} } = configRequest;

    const [data, setData] = React.useState<T>();
    const [isFetching, setIsFetching] = React.useState(true);
    const [error, setError] = React.useState<Error | null>();
    const effectRun = React.useRef(false);

    React.useEffect(() => {
        const controller = new AbortController();
        const fetchData = async () => {
            try {
                const res = await axiosInstance[method.toLowerCase()](url, {
                    ...othersConfigs,
                    signal: controller.signal
                })
                setData(res)
            }
            catch (error: any) {
                console.log(error.message);
                setError(error.message)
            }
            finally {
                setIsFetching(false);
            }
        }
        if (effectRun.current)
            fetchData();
        return () => {
            controller.abort()
            effectRun.current = true;
        }
    }, [])

    return {
        data,
        isFetching,
        error
    }
}

