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
