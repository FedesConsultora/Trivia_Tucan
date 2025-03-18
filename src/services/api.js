const API_URL = process.env.REACT_APP_APPS_SCRIPT_URL;

export const saveUTMs = async (utmData) => {
  try {
    // Usamos mode: 'no-cors'
    console.log("Enviando UTMs:", utmData)
    const res = await fetch(API_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tipo: "utm", ...utmData }),
    });
    // Como la respuesta es opaque, devolvemos un objeto de éxito sin datos reales
    return { status: "success", message: "Solicitud enviada en modo no-cors" };
  } catch (error) {
    console.error('Error guardando UTMs:', error);
    throw error;
  }
};

export const saveTriviaResult = async (userData) => {
  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tipo: "trivia", ...userData }),
    });
    return { status: "success", message: "Solicitud enviada en modo no-cors" };
  } catch (error) {
    console.error('Error guardando resultado trivia:', error);
    throw error;
  }
};
