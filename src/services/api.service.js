const getTodos = () => fetch('https://jsonplaceholder.typicode.com/todos').then(value => value.json());

const getComments = () => fetch('https://jsonplaceholder.typicode.com/comments').then(value => value.json());

const getAlbums = () => fetch('https://jsonplaceholder.typicode.com/albums').then(value => value.json());

const getCurrentPost = (id) => fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(value => value.json());


export {getCurrentPost, getComments, getTodos, getAlbums}