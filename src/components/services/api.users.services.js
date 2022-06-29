import axios from "axios";

let axiosInstance = axios.create({baseURL: 'https://jsonplaceholder.typicode.com/users'});

const getUsers = () => axiosInstance('').then(value => value);
const getUser = (id) => axiosInstance('/' + id).then(value => value);
const getUserPosts = (id) => axiosInstance('/'+id+'/posts').then(value => value);

export {getUsers, getUser, getUserPosts}