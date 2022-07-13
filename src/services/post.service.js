import {axiosInstance} from "./axios.service";
import {urls} from "../constants";

const postService = {
    getAll: ()=> axiosInstance(urls.posts)
}
export {postService};