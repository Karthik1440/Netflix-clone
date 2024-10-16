import axios from "axios";
import { baseurl } from "../constant/Constant";

const instance = axios.create({
    baseURL: baseurl,
  });

  export default instance