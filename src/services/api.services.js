const baseURL = 'https://jsonplaceholder.typicode.com';

const apiService = {
    getAllData: (endpoint) => fetch(`${baseURL}/${endpoint}`)
        .then(value => value.json()),

    getSingleData: (endpoint, id) => fetch(`${baseURL}/${endpoint}/${id}`)
        .then(value => value.json()),

    getUserPosts: (id) => fetch(`${baseURL}/users/${id}/posts`)
        .then(value => value.json())
}

export {apiService}