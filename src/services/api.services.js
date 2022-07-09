
const baseURL = 'https://jsonplaceholder.typicode.com/';

export default apiService (endPoint) {
    getAll: ()=> fetch(`${baseURL}${endPoint}`)
}