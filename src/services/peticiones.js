import axios from 'axios'

/**
 *  @returns Objeto con la API de prueba y la API Fake
 * 
 */

const URLS = {
  test: 'http://localhost:8000/alumnos',
  urlApiAlumnos: import.meta.env.VITE_URL_API,
}

/**
 *  @returns Acceso a la API. Haciendo la petición
 * 
 * 
 */

export function obtenerAlumnos() {
  return axios.get( URLS.test )
    .then( response => { return response.data })
    .catch( error => { console.error(error) })
}
