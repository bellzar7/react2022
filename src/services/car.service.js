import {axiosInstance} from "./axios.service";
import {urls} from "../constants";

const carService = {
    getAll:()=> axiosInstance.get(urls.cars),
    create:(car)=> axiosInstance.post(urls.cars, car),
    updateById:(id, car) => axiosInstance.put(`${urls.cars}/${id}}`, car),
    deleteById:(id)=> axiosInstance.delete(`${urls.cars}/${id}`)
};

export {carService};
