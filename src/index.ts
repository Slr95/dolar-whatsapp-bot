import { fetchDolarBlue } from "./utils/fetchDolar";
import { sendWhatsAppMessage } from "./utils/sendWhatsApp";
import cron from "node-cron";

const main = async () => {
  const message = await fetchDolarBlue();
  await sendWhatsAppMessage(message);
};

// Ejecutar todos los días a las 9:00 AM
cron.schedule("0 9 * * *", () => {
  console.log("⏰ Ejecutando tarea diaria...");
  main();
});
