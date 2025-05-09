# Bot de Notificación del Precio del Dólar

Este es un proyecto de **notificación automatizada** que envía el precio del dólar blue a través de **WhatsApp** todos los días a las **9 AM** usando la API de **Twilio**.

El bot obtiene el precio actual del dólar blue de un sitio web confiable y lo envía como mensaje de WhatsApp a un número específico. El proceso se ejecuta de manera programada utilizando **cron jobs** y está diseñado para ejecutarse de manera automática a la hora configurada.

## Tecnologías

- **Node.js**: Plataforma para ejecutar el código del servidor.
- **TypeScript**: Lenguaje de programación para escribir el código de manera más segura y estructurada.
- **Twilio API**: Usado para enviar mensajes de WhatsApp automáticamente.
- **node-cron**: Paquete que permite ejecutar tareas de manera programada, como los cron jobs.
- **dotenv**: Para gestionar las variables de entorno de manera segura.

## Funcionalidades

- Obtención del precio del dólar blue desde una fuente externa.
- Envío automático de mensajes a través de WhatsApp usando la API de Twilio.
- Ejecución programada a las 9 AM todos los días (configurable).
- Seguridad en las variables sensibles mediante el uso de un archivo `.env`.

## Instalación

### Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/nombre-del-repositorio.git
cd nombre-del-repositorio
