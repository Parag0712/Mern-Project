import config from "../config/config";

import axios from "axios";

class DataService {
    // GetUser Data

    async addService({ name, description, price, serviceImage, category }) {

        try {
            // console.log(name,category,description,price,serviceImage[0]);

            const formData = new FormData();
            formData.append('name', name);
            formData.append('description', description);
            formData.append('category', category);
            formData.append('price', price);
            formData.append('serviceImage', serviceImage[0]); // Assuming serviceImage is a File object

            const response = await axios.post(`/api/v1/services/add-service`, formData);
            const service = response.data;
            return service;
        } catch (error) {
            if (error.response.data) {
                throw error.response.data.message;
            } else {
                throw error
            }
        }
    }

    //updateService
    async updateService({ name, description, price, category }, id) {
        try {
            const response = await axios.patch(`/api/v1/services/update-service/${id}`, {
                name:name,
                description:description,
                price:price,
                category:category
            });
            const service = response.data;
            return service;
        } catch (error) {
            if (error.response.data) {
                throw error.response.data.message;
            } else {
                throw error
            }
        }
    }

    //updateServiceImg
    async updateServiceImg({serviceImage},id) {
        try {
            console.log(serviceImage[0]);
            const formData = new FormData();
            formData.append('serviceImage', serviceImage[0]);
            const response = await axios.patch(`/api/v1/services/updateserviceimg/${id}`, formData);
            const service = response.data;
            return service;
        } catch (error) {
            if (error.response.data) {
                throw error.response.data.message;
            } else {
                throw error
            }
        }

    }
    // 
    async deleteService(serviceId) {
        // /deleteAccount
        try {
            const response = await axios.post(`/api/v1/services/delete-service`, {
                serviceId: serviceId
            });
            console.log(response);
            return response;
        } catch (error) {
            if (error.response.data) {
                throw error.response.data.message;
            } else {
                throw error
            }
        }
    }

    // getSingleService
    async getSingleService(id) {

        
        try {
            const response = await axios.get(`/api/v1/services/get-one-service/${id}`);
            if (response.status == "200") {
                return response.data;
            }
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    //Get All Service
    async getService() {
        try {
            const response = await axios.get(`/api/v1/services/get-service`);
            console.log(response);
            if (response.status == "200") {
                return response.data;
            }
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}

export const dataService = new DataService();