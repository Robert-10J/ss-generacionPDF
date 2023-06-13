import axios from 'axios'

const URLS = {
  test: 'http://localhost:8000/alumnos',
  urlApiAlumnos: import.meta.env.VITE_URL_API,
}

export function obtenerAlumnos() {
  return axios.get( URLS.urlApiAlumnos || URLS.test )
    .then( response => { return response.data })
    .catch( error => { console.error(error) })
}

