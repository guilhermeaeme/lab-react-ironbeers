import React from 'react';
import axios from 'axios';

const BeersApi = axios.create({
    baseURL: 'https://api.punkapi.com/v2/'
});

export default BeersApi;
