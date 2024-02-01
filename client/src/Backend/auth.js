import config from "../config/config";

import axios from "axios";

class AuthService {

    // CreateAccount
    async createAccount({username,email,number,password,isAdmin=false,avatar}){
        try {
            // Response
            const response = await axios.post("api/v1/users/register", {
                username,
                email,
                number,
                password,
                isAdmin,
                avatar
            });

            // UserAccount
            const userAccount = response.data;
            return userAccount;
            
        } catch (error) {
            if(error.response.data){
                throw error.response.data.message;
            }else{
                throw error
            }
        }
    }
    
    // Login Form
    async login({ email="",username="", password }) {
        try {
            const url = "api/v1/users/logint";
            const response = await axios.post("api/v1/users/login", {
                email,
                username,
                password
            });
            
            // UserAccount
            const userAccount = response.data;
            return userAccount;
        } catch (error) {
            if(error.response.data){
                throw error.response.data.message;
            }else{
                throw error
            }
        }
    }

    // GetUser Data
    async getUserData() {
        try {
            const url = `${config.backend_url}users/get-user`;
            const response = await axios.get("api/v1/users/get-user");
            if(response.status =="200"){
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
            const response = await axios.patch("api/v1/users/updateAvatar", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            // Handle the response from the server
            return response.data; // Return the response data if needed
        } catch (error) {
            throw error
        }
    }

    // Logout
    async logout(){
        try {
            const response = await axios.post("api/v1/users/logout");
            return response.data
        } catch (error) {
            console.log(error);
        }
    }
}
export const AuthServices = new AuthService()