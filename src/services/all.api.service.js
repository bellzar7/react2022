const usersUrl = 'https://jsonplaceholder.typicode.com/users';
const postsUrl = 'https://jsonplaceholder.typicode.com/posts';
const commentsUrl = 'https://jsonplaceholder.typicode.com/comments';


const getUsers = () => fetch(usersUrl).then(value => value.json());
const getPosts = () => fetch(postsUrl).then(value => value.json());
const getComments = () => fetch(commentsUrl).then(value => value.json());

export {getUsers, getPosts, getComments}