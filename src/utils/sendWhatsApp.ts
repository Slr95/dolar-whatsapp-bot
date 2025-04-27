import dotenv from "dotenv";
import { Twilio } from "twilio";

dotenv.config();

const client = new Twilio(
  process.env.TWILIO_SID!,
  process.env.TWILIO_AUTH_TOKEN!
);

export const sendWhatsAppMessage = async (message: string) => {
  // Validar que MY_PHONE esté definida
  const myPhone = process.env.MY_PHONE;
  if (!myPhone) {
    throw new Error("La variable de entorno MY_PHONE no está definida.");
  }

  try {
    // Asegurarse de que TWILIO_PHONE esté también definida
    const twilioPhone = process.env.TWILIO_PHONE;
    if (!twilioPhone) {
      throw new Error("La variable de entorno TWILIO_PHONE no está definida.");
    }

    await client.messages.create({
      body: message,
      from: twilioPhone,
      to: myPhone,
    });
    console.log("📲 Mensaje enviado por WhatsApp.");
  } catch (error) {
    console.error("Error enviando WhatsApp:", error);
  }
};
