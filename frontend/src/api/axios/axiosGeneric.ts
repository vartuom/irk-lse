import axios from "axios";
import { BASE_URL } from "../../utils/constants";

const axiosGeneric = axios.create({
    baseURL: BASE_URL,
});

export default axiosGeneric;
