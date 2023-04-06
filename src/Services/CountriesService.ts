import axios from "axios";

export const getCountries = () =>
{

    let response = axios.get("https://restcountries.com/v3.1/all");

    return response.then((res) => {
        return res.data;
    });
}


