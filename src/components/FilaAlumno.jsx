import { useEffect, useState } from 'react'
import GenerarPDF from './GenerarPDF'
import { obtenerAlumnos } from '../services/peticiones'

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
          <tr key={alumno.id} className='mt-10'>
            <td>{alumno.id}</td>
            <td>{alumno.nombre}</td>
            <td>{alumno.email}</td>
            <td>{alumno.Usuario.name}</td>
            <td>{alumno.NumeroControl}</td>
            <td>
              <GenerarPDF
                idAlumno={alumno.id}
                nombre={alumno.nombre}
              />
            </td>
          </tr>
        ))
      }
    </>
  )
}

export default FilaAlumno