import AsyncStorage from "@react-native-async-storage/async-storage";
import { AnswerDTO, UserFull } from "../types";

const API_BASE = 'https://nodejs-nlw-production.up.railway.app'

export async function postLogin(email: string, password: string) {
    const response = await fetch(`${API_BASE}/au/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: email, password }),
    });
    if (response.ok) {
        return response.json();
    }
    return response.ok;
}

export async function getUserFullFromUserId(id: string) : Promise<AnswerDTO<UserFull>> {
    const token = await AsyncStorage.getItem('userToken');
    const response = await fetch(`${API_BASE}/miau/user/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token ?? '',
        },
    });
    if (response.ok) {
        return response.json();
    }
    return response.ok;
}
