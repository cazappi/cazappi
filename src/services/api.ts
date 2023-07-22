import axios from 'axios';

const url = 'https://api-agcqapi5sa-uw.a.run.app/api';

const api = axios.create({
    // baseURL: url || process.env.REACT_APP_API_URL,
    baseURL: 'https://api-agcqapi5sa-uw.a.run.app/api',
})

api.get('/')
    .then((response) => {
        console.log("OK");
    })
    .catch((err) => {  
        console.log("Problema direto.");
    })

export default api;
