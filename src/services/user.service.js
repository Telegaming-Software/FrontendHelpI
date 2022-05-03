import axios from 'axios';
import authHeader from "@/services/auth-header";

const API_URL = 'https://help-i-api.azurewebsites.net/api/players';

class UserService {
    getAll() {
        console.log(authHeader());
        return axios.get(API_URL, { headers: authHeader() });
    }
}

export default new UserService();