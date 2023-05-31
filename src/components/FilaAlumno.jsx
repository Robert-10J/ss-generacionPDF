import { useEffect, useState } from 'react'
import GenerarPDF from './GenerarPDF'
import { obtenerAlumnos } from '../services/peticiones'

const FilaAlumno = () => {

  const [alumnos, setAlumnos] = useState([])

  useEffect(() => {
    const getAlumnos = async () => {
      const alumnos = await obtenerAlumnos()
      setAlumnos(alumnos)
    }
    getAlumnos()
  }, [])

  return (
    <>
      { 
        alumnos.map( alumno => (
          <tr key={alumno.id} className='mt-10'>
            <td>{alumno.id}</td>
            <td>{alumno.nombre}</td>
            <td>
              <GenerarPDF
                idAlumno={alumno.id}
              />
            </td>
          </tr>
        ))
      }
    </>
  )
}

export default FilaAlumno