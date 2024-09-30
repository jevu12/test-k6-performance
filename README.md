# Proyecto de Pruebas de Rendimiento con K6

## Descripción

Este proyecto está diseñado para realizar pruebas de rendimiento de aplicaciones web utilizando K6. Se implementan diferentes tipos de pruebas de carga para evaluar el rendimiento y la escalabilidad de los servicios. Los tipos de pruebas incluyen:

- **Pruebas de Humo (Smoke Tests)**
- **Pruebas de Estrés (Stress Tests)**
- **Pruebas de Picos (Spike Tests)**
- **Pruebas de Soak (Soak Tests)**

El proyecto se conecta a un sistema backend para probar la capacidad de procesamiento de eventos a través de múltiples endpoints de una API.

## Estructura del Proyecto

- **config.js**: Archivo que contiene las configuraciones generales como URL base y cabeceras para las solicitudes HTTP.
- **testOptions.js**: Configura las opciones para las diferentes pruebas de rendimiento.
- **testData.json**: Datos que se usan durante las pruebas, como el rango de fechas, IDs de participantes y eventos.
- **httpClient.js**: Módulo para manejar la autenticación y las solicitudes HTTP.
- **smokeTest.js**: Implementación de la prueba de humo.
- **stressTest.js**: Implementación de la prueba de estrés.
- **spikeTest.js**: Implementación de la prueba de picos.
- **soakTest.js**: Implementación de la prueba de soak.

## Requisitos Previos

- Node.js
- k6 instalado en tu sistema: [Instrucciones de instalación de K6](https://k6.io/docs/getting-started/installation/)

## Configuración

1. Clona este repositorio:

   ```bash
   git clone https://github.com/usuario/proyecto-pruebas-k6.git
   cd proyecto-pruebas-k6
