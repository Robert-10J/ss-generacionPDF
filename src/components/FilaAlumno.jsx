import { useEffect, useState } from 'react'
import GenerarPDF from './GenerarPDF'
import { obtenerAlumnos } from '../services/peticiones'

/**
 *  @returns Obteniendo la informacion de los alumnos la API 
 */
const FilaAlumno = () => {
  const [alumnos, setAlumnos] = useState([])  

  useEffect(() => {
    obtenerAlumnos()
      .then( alumnos => { setAlumnos(alumnos) } )
      .catch( err => { console.error(err) } )
  }, [])

  return (
    <>
      { 
        alumnos?.map( alumno => (
          <tr key={alumno.id}>
            <td>{alumno.NumeroControl}</td>
            <td>{alumno.nombre}</td>
            <td>{alumno.email}</td>
            <td>{alumno.Usuario.name}</td>
            <td>
              <GenerarPDF
                nombre={alumno.nombre}
                apellidoPaterno={alumno.apellidopaterno}
                apellidoMaterno={alumno.apellidomaterno}
                numeroControl={alumno.NumeroControl}
              />

            </td>
          </tr>
        ))
      }
    </>
  )
}

export default FilaAlumno