import axios from "axios";

const Api = axios.create({
    baseURL: "https://646d28cc9c677e232189c986.mockapi.io"
});

export default Api;