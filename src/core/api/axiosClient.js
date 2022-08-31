import axios from "axios";


const AXIOS = axios.create({
    baseURL: "https://nts-musicapp.herokuapp.com/",
    timeout: 120000,
    headers: {
        "Content-Type": "application/json",
    },
});

export default AXIOS;