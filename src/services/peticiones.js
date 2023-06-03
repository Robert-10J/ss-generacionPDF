import axios from 'axios'

const URLS = {
  test: 'http://localhost:8000/alumnos',
  urlApiAlumnos: import.meta.env.VITE_URL_API,
  urlApiPlantillas: import.meta.env.VITE_URL_API_PDF,
}

export function obtenerAlumnos() {
  return axios.get(URLS.test)
    .then( response => { return response.data })
    .catch( error => { console.error(error) })
}

export function getPDF() {  
  axios.get(URLS.urlApiPlantillas)
    .then(response => {
      // Obtener el archivo PDF como Blob en la respuesta
      console.log(response);
      const file = new Blob([response.data], { type: 'application/pdf' });
      
      // Crear una URL para el archivo Blob
      const fileURL = URL.createObjectURL(file);
      console.log(fileURL);
  
      // Utiliza el fileURL según tus necesidades, por ejemplo, mostrar el PDF en un visor o descargarlo
    })
    .catch(error => {
      // Manejar el error de la solicitud
      console.error(error)
    });
}