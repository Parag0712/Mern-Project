import config from "../config/config";


export class AuthService {

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
}