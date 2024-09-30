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