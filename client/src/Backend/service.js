import config from "../config/config";

import axios from "axios";

class DataService {
    // GetUser Data
    async getService() {
        try {
            const url = `${config.backend_url}services/get-service`;
            const response = await axios.get("api/v1/services/get-service");
            console.log(response);
            if(response.status =="200"){
                return response.data;
            }
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}

export const dataService = new DataService();