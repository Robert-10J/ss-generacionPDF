import { PDFDownloadLink } from '@react-pdf/renderer'
import { useState, useEffect } from 'react'
import Plantilla from './pdf/Plantilla'

const GenerarPDF = ({ alumno }) => {
  /* const { nombre, apellidopaterno, apellidomaterno, NumeroControl } = alumno
  console.log(nombre, apellidopaterno, apellidomaterno, NumeroControl) */

  // const [alumno, setAlumno] = useState({})

  /* const handleClickAlumno = () => {
    const datosAlumno = obtenerAlumno(idAlumno, alumnos)
    if (Object.keys(datosAlumno).length !== 0) setAlumno(datosAlumno)
  } */

  return (
    <button>
      <PDFDownloadLink
        document={ <Plantilla/> } 
        fileName={`Carta-Aceptacion.pdf`}>
        {
          ({ loading }) =>   
            loading ? 'Loading doc' : 'Download now'
        }
      </PDFDownloadLink>
    </button>
  )
}

export default GenerarPDF