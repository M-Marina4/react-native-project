import axios from 'axios';

const json = axios.create({
    baseURL: 'https://kitsu.io/api/edge/',
});

export default json;


