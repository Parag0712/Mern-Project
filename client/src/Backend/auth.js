import config from "../config/config";

import axios from "axios";

class AuthService {

    async createAccount({username,email,number,password,isAdmin,avatar}){
        try {
            const url = `${config.backend_url}users/register`;
            const formData = new FormData();
            formData.append('username', username);
            formData.append('email', email);
            formData.append('number', number);
            formData.append('password', password);
            formData.append('isAdmin', isAdmin);
            formData.append('avatar', avatar);

            // Response
            const response = await axios.post(url, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            // UserAccount
            const userAccount = response.data;
            return userAccount;
            
        } catch (error) {
            throw error
        }
    }
    
    // Login Form
    async login({ email="",username="", password }) {
        try {
            const url = `${config.backend_url}users/login`;
            const response = await axios.post(url, {
                email,
                username,
                password
            });

            // Assuming the response contains user account data
            const userAccount = response.data;
            return userAccount;
        } catch (error) {
            throw error;
        }
    }

    // GetUser Data
    async getUserData() {
        try {
            const url = `${config.backend_url}users/get-user`;
            const response = await axios.get("api/v1/users/get-user");
            console.log(response.data);
            if(response.status =="200"){
                return response.data;
            }
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}
export const AuthServices = new AuthService()