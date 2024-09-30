
export const smokeTestOptions = {
    vus: 10, // 10 usuarios virtuales
    duration: '10s', // Duración de 10 segundos
};

export const stressTestOptions = {
    stages: [
        { duration: '2m', target: 50 }, // Escalar a 50 VUs en 2 minutos
        { duration: '5m', target: 100 }, // Mantener 100 VUs durante 5 minutos
        { duration: '2m', target: 0 },   // Reducir a 0 VUs en 2 minutos
    ],
    thresholds: {
        http_req_failed: ['rate<0.05'], // Menos del 5% de las solicitudes deben fallar
        http_req_duration: ['p(95)<2000'], // 95% de las solicitudes debajo de 2s: ['p(95)<5000'], // 95% de las solicitudes deben completarse en menos de 5 segundos

    },
};

export const spikeTestOptions = {
    stages: [
        { duration: '10s', target: 100 },  // Aumentar rápidamente a 100 VUs en 10 segundos
        { duration: '1m', target: 100 },   // Mantener 100 VUs durante 1 minuto
        { duration: '10s', target: 0 },    // Reducir rápidamente a 0 VUs en 10 segundos
    ],
    thresholds: {
        http_req_failed: ['rate<0.05'], // Menos del 5% de las solicitudes deben fallar
        http_req_duration: ['p(95)<2000'], // 95% de las solicitudes debajo de 2s
        
    },
};

export const soakTestOptions = {
    stages: [
        { duration: '10m', target: 100 },  // Escalar a 100 VUs en 10 minutos
        { duration: '3h', target: 100 },   // Mantener 100 VUs durante 3 horas
        { duration: '10m', target: 0 },    // Reducir a 0 VUs en 10 minutos
    ],
    thresholds: {
        http_req_failed: ['rate<0.05'], // Menos del 5% de las solicitudes deben fallar
        http_req_duration: ['p(95)<2000'], // 95% de las solicitudes debajo de 2s
    },
};
