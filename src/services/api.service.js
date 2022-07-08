const baseUrl = 'https://jsonplaceholder.typicode.com';

export default function apiService() {
    this.getAllUsers = () => fetch(`${baseUrl}/users`).then(value => value.json())

    this.getAllPosts = () => fetch(`${baseUrl}/posts`).then(value => value.json())

}
