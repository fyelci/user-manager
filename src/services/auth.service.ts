import {RegistrationRequest, User} from "../types";
import axios from "axios";

const apiBaseUrl = process.env.REACT_APP_USER_API_URL;
const config = {withCredentials: true}

async function login(username: string, password: string): Promise<User> {
    const response = await axios.post(`${apiBaseUrl}/login`, {username, password}, config);
    if (response.status === 200) {
        return response.data;
    }
    throw new Error('Could not authenticate user');
}

async function register(request: RegistrationRequest): Promise<User> {
    const response = await axios.post(`${apiBaseUrl}/signup`, request, config);
    if (response.status === 201) {
        return response.data;
    }
    throw new Error('Could not create user');
}

async function getProfile(): Promise<User> {
    const response = await axios.get(`${apiBaseUrl}/users/profile`, config);
    if (response.status === 200) {
        return response.data;
    }
    throw new Error('Could not get user data');
}

async function logout(): Promise<void> {
    const response = await axios.post(`${apiBaseUrl}/logout`, {}, config);
    if (response.status === 200) {
        return;
    }
    throw new Error('Could not logout user');
}

export {
    getProfile,
    login,
    logout,
    register
}
