import { useState } from "react";
import { ventas } from "@/lib/datos_ventas.json";

export const Chatbot = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [userInput, setUserInput] = useState("");

  const datos = ventas; // Suponiendo que tus datos están aquí

  // Función para analizar la pregunta
  const analizarPregunta = (texto) => {
    texto = texto.toLowerCase();
    let años = [];

    // Detectar años mencionados
    for (let word of texto.split(" ")) {
      if (word.length === 4 && !isNaN(word)) {
        años.push(parseInt(word));
      }
    }

    // Detectar tipo de pregunta
    if (
      texto.includes("diferencia") ||
      texto.includes("comparar") ||
      texto.includes("crecimiento")
    ) {
      return { tipo: "diferencia_ventas", años };
    }

    if (
      texto.includes("mejor mes") ||
      texto.includes("mes con más ventas") ||
      texto.includes("pico de ventas")
    ) {
      return { tipo: "mejor_mes", años };
    }

    return { tipo: null, años: [] };
  };

  // Función para obtener la diferencia de ventas entre dos años
  const obtenerDiferenciaVentas = (año1, año2) => {
    const ventasAño1 = datos.ventas.find((p) => p.año === año1)?.resumen_general
      ?.total_sales;
    const ventasAño2 = datos.ventas.find((p) => p.año === año2)?.resumen_general
      ?.total_sales;

    if (ventasAño1 && ventasAño2) {
      const diferencia = ventasAño2 - ventasAño1;
      const porcentaje = ((diferencia / ventasAño1) * 100).toFixed(2);
      return `La diferencia de ventas entre ${año1} y ${año2} es de $${diferencia.toLocaleString()}. Cambio porcentual: ${porcentaje}%`;
    }
    return "No encontré datos para esos años";
  };

  // Función para obtener el mejor mes de ventas de un año
  const obtenerMejorMes = (año) => {
    const periodo = datos.ventas.find((p) => p.año === año);
    if (!periodo) return "No hay datos para este año.";

    const meses = periodo.resumen_general?.tendencia_ventas_mensuales;
    if (!meses) return "No hay datos de ventas mensuales para este año.";

    const mejorMes = Object.keys(meses).reduce((a, b) =>
      meses[a] > meses[b] ? a : b
    );

    return `En ${año}, el mejor mes fue ${mejorMes} con $${meses[
      mejorMes
    ].toLocaleString()}`;
  };

  // Función para manejar la pregunta del usuario
  const manejarPregunta = () => {
    const { tipo, años } = analizarPregunta(userInput);

    let respuesta = "";
    if (tipo === "diferencia_ventas" && años.length === 2) {
      respuesta = obtenerDiferenciaVentas(años[0], años[1]);
    } else if (tipo === "mejor_mes" && años.length > 0) {
      respuesta = obtenerMejorMes(años[0]);
    } else {
      respuesta =
        'No entendí la pregunta. Intenta algo como: "¿Cuál es la diferencia de ventas entre 2022 y 2023?" o "¿Cuál fue el mejor mes de ventas en 2022?"';
    }

    // Actualizar el historial de chat
    setChatHistory((prevHistory) => [
      ...prevHistory,
      { from: "user", text: userInput },
      { from: "bot", text: respuesta },
    ]);
    setUserInput(""); // Limpiar la entrada del usuario
  };

  return (
    <div className="p-5 w-full mx-auto bg-white rounded-lg shadow-lg">
      <div className="space-y-4">
        <div className="space-y-2">
          {chatHistory.map((message, index) => (
            <div
              key={index}
              className={`p-2 rounded-lg ${
                message.from === "user"
                  ? "bg-gray-200 text-right"
                  : "bg-blue-100 text-left"
              }`}
            >
              <p>{message.text}</p>
            </div>
          ))}
        </div>

        <div className="flex space-x-2">
          <input
            type="text"
            className="flex-1 p-2 border border-gray-300 rounded-md"
            placeholder="Escribe tu pregunta..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white p-2 rounded-md"
            onClick={manejarPregunta}
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};
