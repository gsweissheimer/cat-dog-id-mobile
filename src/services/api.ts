import AsyncStorage from "@react-native-async-storage/async-storage";
import { AnswerDTO, UserFull, Pet, Event } from "../types";

const API_BASE = 'https://nodejs-nlw-production.up.railway.app'

export async function DeleteEventByIdService(id: string) : Promise<AnswerDTO<boolean>> {
    const token = await AsyncStorage.getItem('userToken');
    console.log(token);
    const response = await fetch(`${API_BASE}/miau/event/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': token ?? '',
        }
    });
    console.log(response);
    if (response.ok) {
        return response.json();
    }
    return response.ok;
}

export async function CreateEventService(event: Event) : Promise<AnswerDTO<boolean>> {
    const token = await AsyncStorage.getItem('userToken');
    const response = await fetch(`${API_BASE}/miau/event/add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token ?? '',
        },
        body: JSON.stringify(event),
    });
    if (response.ok) {
        return response.json();
    }
    return response.ok;
}

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

export async function getPetFromId(id: string) : Promise<AnswerDTO<Pet>> {
    const token = await AsyncStorage.getItem('userToken');
    const response = await fetch(`${API_BASE}/miau/pet/${id}`, {
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

export async function getEventFromPetId(id: string) : Promise<AnswerDTO<Event[]>> {
    const token = await AsyncStorage.getItem('userToken');
    const response = await fetch(`${API_BASE}/miau/event/pet/${id}`, {
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

export async function getEventFromTutorId(id: string) : Promise<AnswerDTO<Event[]>> {
    const token = await AsyncStorage.getItem('userToken');
    const response = await fetch(`${API_BASE}/miau/event/${id}`, {
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