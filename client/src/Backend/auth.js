import config from "../config/config";

import axios from "axios";

class AuthService {

    // CreateAccount
    async createAccount({ username, email, number, password, isAdmin = false, avatar }) {
        try {
            // Response
            const response = await axios.post("/api/v1/users/register", {
                username,
                email,
                number,
                password,
                isAdmin,
                avatar
            },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true
                });

            // UserAccount
            const userAccount = response.data;
            return userAccount;

        } catch (error) {
            if (error.response.data) {
                throw error.response.data.message;
            } else {
                throw error
            }
        }
    }

    // Login Form
    async login({ email = "", username = "", password }) {
        try {
            const response = await axios.post(`/api/v1/users/login`, {
                email,
                username,
                password
            },
                {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );

            // UserAccount
            const userAccount = response.data;
            return userAccount;
        } catch (error) {
            if (error.response.data) {
                throw error.response.data.message;
            } else {
                throw error
            }
        }
    }

    // GetUser Data
    async getUserData() {
        try {
            const url = `${config.backend_url}users/get-user`;
            const response = await axios.get("/api/v1/users/get-user", {
                withCredentials: true
            });
            if (response.status == "200") {
                return response.data;
            }
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    // update Avatar

    async updateAvatar(img) {
        try {
            const formData = new FormData();
            formData.append('avatar', img);
            // Send a PATCH request to the server with the FormData containing the image file
            const response = await axios.patch("/api/v1/users/updateAvatar", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }, {
                withCredentials: true
            });
            // Handle the response from the server
            return response.data; // Return the response data if needed
        } catch (error) {
            throw error
        }
    }

    async getAllUser() {
        try {
            const response = await axios.get("/api/v1/users/getAllUsers", { withCredentials: true });
            return response.data
        } catch (error) {
            console.log(error);
        }
    }



    async deleteAccount(id) {
        // /deleteAccount
        try {
            // Response
            const response = await axios.post("/api/v1/users/deleteAccount", {
                id: id
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

    // Logout
    async logout() {
        try {
            const response = await axios.post("/api/v1/users/logout");
            return response.data
        } catch (error) {
            console.log(error);
        }
    }
}
export const AuthServices = new AuthService()