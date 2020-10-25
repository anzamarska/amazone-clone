import axios from "axios";

const instance = axios.create({
    // we need our API there
    baseURL: 'http://localhost:5001/e-challenge-99ec4/us-central1/api'
});

export default instance;