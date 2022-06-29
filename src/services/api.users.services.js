let baseURL = 'https://jsonplaceholder.typicode.com/users'

const getUsers = () => fetch(baseURL).then(value => value.json());
const getUser = (id) => fetch(baseURL + '/' + id).then(value => value.json());
const getPosts = (id) => fetch(baseURL + '/' + id + '/posts').then(value => value.json());

export {getUsers, getUser, getPosts};