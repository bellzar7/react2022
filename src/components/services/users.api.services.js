import axios from "axios";


let axiosInstance = axios.create({baseURL: 'https://jsonplaceholder.typicode.com/users'});

const getUsers = () => axiosInstance.get('').then(value => value);
const getPosts = (id) => axiosInstance('/' + id + '/posts').then(value => value.data);

export {getUsers, getPosts};