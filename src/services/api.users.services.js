let baseURL = 'https://jsonplaceholder.typicode.com/users'

const getUsers = fetch(baseURL).then(value => value);
const getUser = (id) => fetch(baseURL + '/' + id).then(value => value);
const getPosts = (id) => fetch(baseURL+`/${id}/posts`).then(value => value);

export {getUsers, getUser, getPosts};