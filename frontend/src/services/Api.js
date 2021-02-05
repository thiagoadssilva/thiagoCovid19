import axios from 'axios';

const environment = "https://covid19-brazil-api.now.sh/api/report/v1/";

const api = axios.create({
    baseURL: environment
});

export default api;