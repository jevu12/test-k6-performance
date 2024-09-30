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