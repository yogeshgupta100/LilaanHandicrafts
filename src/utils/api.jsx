import axios from "axios";

// const response = await fetch( {headers: {
//     accept: "application/json " + `${import.meta.env.VITE_STRAPI_APP_KEY}`,
// },});

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

// export const makePaymentRequest = axios.create({
//     baseURL: import.meta.env.VITE_REACT_APP_STRIPE_APP_KEY,
//     headers: {
//         Authorization: "bearer " + import.meta.env.VITE_REACT_APP_STRIPE_APP_KEY,
//     },
// });
