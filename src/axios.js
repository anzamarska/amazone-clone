import axios from "axios";

const instance = axios.create({
    // we need our API there
    baseURL: '...'
});

export default instance;