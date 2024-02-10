import axios from "axios";

class AuthService {
    constructor() {
        this.api = axios.create({
            baseURL: '/api/v1/',
            withCredentials: true
        });
    }

    // CreateAccount
    async createAccount({ username, email, number, password, isAdmin = false, avatar }) {
        try {
            const response = await this.api.post("/users/register", {
                username,
                email,
                number,
                password,
                isAdmin,
                avatar
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const userAccount = response.data;
            return userAccount;

        } catch (error) {
            if (error.response.data) {
                throw error.response.data.message;
            } else {
                throw error;
            }
        }
    }

    // Login Form
    async login({ email = "", username = "", password }) {
        try {
            const response = await this.api.post(`/users/login`, {
                email,
                username,
                password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const userAccount = response.data;
            return userAccount;
        } catch (error) {
            if (error.response.data) {
                throw error.response.data.message;
            } else {
                throw error;
            }
        }
    }

    // GetUser Data
    async getUserData() {
        try {
            const response = await this.api.get("/users/get-user");
            if (response.status === 200) {
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

            const response = await this.api.patch("/users/updateAvatar", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });

            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async getAllUser() {
        try {
            const response = await this.api.get("/users/getAllUsers");
            return response.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async deleteAccount(id) {
        try {
            const response = await this.api.post("/users/deleteAccount", {
                id: id
            });
            return response;
        } catch (error) {
            if (error.response.data) {
                throw error.response.data.message;
            } else {
                throw error;
            }
        }
    }

    // Logout
    async logout() {
        try {
            const response = await this.api.post("/users/logout");
            return response.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

export const AuthServices = new AuthService();
