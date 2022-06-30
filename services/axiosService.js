import axios from "axios";

import baseURL from "../config/config";

export const axiosService = axios.create({ baseURL });
