import {axiosInstance} from "./axios.service";
import {urls} from "../constants";

const commentsService = {
    getAll: ()=> axiosInstance(urls.comments)
}
export {commentsService};