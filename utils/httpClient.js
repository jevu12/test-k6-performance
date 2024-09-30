import http from 'k6/http';
import { AUTH_URL, HEADERS } from '../config/config.js';

let token = null;

export function authenticate() {
    if (!token) {
        const credentials = JSON.stringify({
            username: __ENV.USERNAME || 'tu_usuario',
            password: __ENV.PASSWORD || 'tu_contraseña',
        });

        const res = http.post(AUTH_URL, credentials, { headers: HEADERS });

        if (res.status === 200) {
            const body = JSON.parse(res.body);
            token = body.token; // Ajusta según la respuesta real de tu API
        } else {
            throw new Error('Error en autenticación: ' + res.status);
        }
    }
    return token;
}

// Función para realizar solicitudes GET con autenticación
export function getRequest(url, params = {}) {
    const authToken = authenticate();
    const headers = {
        ...HEADERS,
        'Authorization': `Bearer ${authToken}`,
    };

    return http.get(url, { headers, ...params });
}
