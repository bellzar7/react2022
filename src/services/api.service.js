const baseUrl = 'https://jsonplaceholder.typicode.com';

const apiService = ()=> {
  this.getAll: (endPoint) => {
        fetch(`${baseUrl}/${endPoint}`)
            .then(value => value.json())
    },
    this.getSingle: (endPoint, id) => {
        fetch(`${baseUrl}/${endPoint}/${id}`)
            .then(value => value.json())
    }
}

export {apiService}