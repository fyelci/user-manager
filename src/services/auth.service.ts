import {User} from "../types";
import axios from "axios";

const apiBaseUrl = 'http://localhost:8000';

async function login(username: string, password: string): Promise<User> {
    const response = await axios.post(`${apiBaseUrl}/login`, {username, password}, );
    if (response.status === 200) {
        return response.data;
    }
    throw new Error('Could not authenticate user');
}

async function logout(): Promise<void> {
    const response = await axios.post(`${apiBaseUrl}/logout`, {});
    if (response.status === 200) {
        return;
    }
    throw new Error('Could not logout user');
}

export {
    login,
    logout
}
