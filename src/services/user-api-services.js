import axios from "axios";

const axiosInstance = axios.create({baseURL:'https://jsonplaceholder.typicode.com/users'});

const createUser = (obj) => axiosInstance.post('', obj);
export {createUser}