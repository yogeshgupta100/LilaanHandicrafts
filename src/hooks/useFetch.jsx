import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";
const useFetch = (endpoint) => {
    const [data, setData] = useState();

    useEffect(() => {
        makeApiCall();
    }, [endpoint]);

    const makeApiCall = async () => {
        // const res = await fetchDataFromApi(endpoint);
        const res = await fetch(`${import.meta.env.VITE_STRAPI_SERVER_URL}`+ endpoint);
        const data = await res.json();
        setData(data.data);
    };

    return { data };
};
export default useFetch;
