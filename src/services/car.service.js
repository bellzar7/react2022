import {axiosInstance} from "./axios.service";
import {urls} from "../constants";

const carService = {
    getAll: () => axiosInstance.get(urls.cars),
    updateById: (id, data) => axiosInstance.put(`${urls.cars}/${id}`, data),
    create:(car) => axiosInstance.post(urls.cars, car),
    deleteById: (id)=> axiosInstance.delete(`${urls.cars}/${id}`)
}

export {carService}