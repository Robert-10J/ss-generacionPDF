import db from '../db.json'
import GenerarPDF from './GenerarPDF'

const FilaAlumno = () => {
  return (
    <>
      {
        db.map(alumno => (
          <tr key={alumno.id}>
            <td>{alumno.id}</td>
            <td>{alumno.nombre}</td>
            <td>{alumno.curp}</td>
            <td>{alumno.email}</td>
            <td>{alumno.NumeroControl}</td>            
            <td>{alumno.Usuario.name}</td>            
            <td>
              <GenerarPDF/>
            </td>
          </tr>
        ))
      }
    </>
  )
}

export default FilaAlumno