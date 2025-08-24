import dotenv from 'dotenv';

dotenv.config({path: '.env'});

// Простий об'єкт тільки з потрібними змінними
export const env = {
  NGROK_AUTHTOKEN: process.env.NGROK_AUTHTOKEN,
};

// Перевірка тільки того, що потрібно
if (!env.NGROK_AUTHTOKEN) {
  throw new Error('NGROK_AUTHTOKEN is required');
}