import axios from "axios";

class DataService {
    // GetUser Data

    constructor() {
        this.api = axios.create({
            baseURL: '/api/v1/',
            withCredentials: true // Add withCredentials option
        });
    }

    async addService({ name, description, price, serviceImage, category }) {
        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('description', description);
            formData.append('category', category);
            formData.append('price', price);
            formData.append('serviceImage', serviceImage[0]); // Assuming serviceImage is a File object

            const response = await this.api.post(`/services/add-service`, formData);
            return response.data;
        } catch (error) {
            if (error.response.data) {
                throw error.response.data.message;
            } else {
                throw error
            }
        }
    }

    async updateService({ name, description, price, category }, id) {
        try {
            const response = await this.api.patch(`/services/update-service/${id}`, {
                name,
                description,
                price,
                category
            });
            return response.data;
        } catch (error) {
            if (error.response.data) {
                throw error.response.data.message;
            } else {
                throw error
            }
        }
    }

    async updateServiceImg({ serviceImage }, id) {
        try {
            const formData = new FormData();
            formData.append('serviceImage', serviceImage[0]);
            const response = await this.api.patch(`/services/updateserviceimg/${id}`, formData);
            return response.data;
        } catch (error) {
            if (error.response.data) {
                throw error.response.data.message;
            } else {
                throw error
            }
        }
    }

    async deleteService(serviceId) {
        try {
            const response = await this.api.post(`/services/delete-service`, {
                serviceId
            });
            return response;
        } catch (error) {
            if (error.response.data) {
                throw error.response.data.message;
            } else {
                throw error
            }
        }
    }

    async getSingleService(id) {
        try {
            const response = await this.api.get(`/services/get-one-service/${id}`);
            if (response.status == "200") {
                return response.data;
            }
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async getService() {
        try {
            const response = await this.api.get(`/services/get-service`);
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
