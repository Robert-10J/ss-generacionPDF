import axios from 'axios'

export async function obtenerAlumnos() {
  try {
    const response = await axios.get(import.meta.env.VITE_URL_API)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export function getPDF() {  
  axios.get(import.meta.env.VITE_URL_API_PDF)
    .then(response => {
      // Obtener el archivo PDF como Blob en la respuesta
      console.log(response);
      const file = new Blob([response.data], { type: 'application/pdf' });
      
      // Crear una URL para el archivo Blob
      const fileURL = URL.createObjectURL(file);
  
      // Utiliza el fileURL según tus necesidades, por ejemplo, mostrar el PDF en un visor o descargarlo
    })
    .catch(error => {
      // Manejar el error de la solicitud
    });
}