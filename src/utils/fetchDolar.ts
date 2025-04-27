import axios from "axios";

export const fetchDolarBlue = async (): Promise<string> => {
  try {
    const res = await axios.get("https://dolarapi.com/v1/dolares/blue");
    const { compra, venta, fechaActualizacion } = res.data;

    return `💵 Dólar Blue:
Compra: $${compra}
Venta: $${venta}
📅 Actualizado: ${new Date(fechaActualizacion).toLocaleString()}`;
  } catch (error) {
    console.error("Error al obtener el dólar:", error);
    return "❌ Error al obtener el precio del dólar.";
  }
};
