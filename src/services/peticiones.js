import axios from 'axios'

export async function obtenerAlumnos() {
  try {
    const response = await axios.get(import.meta.env.VITE_URL_API)
    return response.data
  } catch (error) {
    console.log(error)
  }
}
