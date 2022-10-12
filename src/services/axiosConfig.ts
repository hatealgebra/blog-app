import axios from "axios";
import { BASE_API_URL } from "../utils/contants";

const instance = axios.create({ baseURL: BASE_API_URL });

export default instance;
