import axios from "axios";
// hell


export const fetchDataFromApi = async(url) => {
    try {
        const data = await axios.get(
            `${import.meta.env.VITE_STRAPI_SERVER_URL}${url}`,
            response
        );
    } catch (err) {
        console.log(err);
        return err;
    }
};
