import axios from "axios";
import React from "react";
import { useEffect } from "react";
const GetCountryData =()=> {
    useEffect(() => {

        // Runs after the first render() lifecycle
        axios.get(`https://www.universal-tutorial.com/api/countries`, { headers: { "Authorization": `Bearer ${process.env.REACT_APP_API_TOKEN}` } })
            .then((res) => { console.log(res.data); })
            .catch((error) => { console.log(error); });
    }, []);

}
export default GetCountryData;


