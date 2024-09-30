import http from 'k6/http';
import { AUTH_URL, HEADERS } from '../config/config.js';

let token = null;

export function authenticate() {
    if (!token) {
        const credentials = JSON.stringify({
            username: __ENV.USERNAME || 'admin',  // Cambia estos valores para pruebas
            password: __ENV.PASSWORD || 'Admin$88',
            rememberMe: false
        });

        const res = http.post(AUTH_URL, credentials, { headers: HEADERS });

        // Verifica si la autenticación fue exitosa
        if (res.status === 200) {
            const body = JSON.parse(res.body);
            // Asegúrate de que el campo "token" es el correcto
            token = body.token;
        } else {
            console.log('Error en autenticación:', res.status, res.body); // Mostrar error detallado
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
