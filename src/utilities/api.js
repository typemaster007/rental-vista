import axios from 'axios'

const loginInstance = axios.create({
    baseURL: 'http://127.0.0.1:8080/users/login',
    timeout: 1000,
    responseType: "json"
  });

  const registerInstance = axios.create({
    baseURL: 'http://127.0.0.1:8080/users/signup',
    timeout: 1000,
    responseType: "json"
  });

export default registerInstance;