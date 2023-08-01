import { PDFViewer } from '@react-pdf/renderer'
import Tabla from './components/Tabla'
import ConstanciaTutorias from './components/pdf/ConstanciaTutorias'

import { obtenerAlumnos } from './services/peticiones'
import { getTutores } from './utils'
import { useEffect, useState } from 'react'
import CartaAceptacion from './components/pdf/CartaAceptación'

const App = () => {
  const [tutoresInfo, setTutoresInfo] = useState([])

  useEffect(() => {
    const getAlumnos = async () => {
      const data = await obtenerAlumnos()      
      const dt = data?.map(({ nombre, apellidopaterno, apellidomaterno, alumnodesignacion  }) => {
        return {
          nombre, 
          apellidopaterno, 
          apellidomaterno,
          alumnodesignacion 
        }
      })    
      
      function obtenerAlumnosPorTutor({tutor = '', arregloAlumnos = []}) {
        // Filtrar los alumnos por tutor
        const alumnosFiltrados = arregloAlumnos.filter( alumno => {
          return alumno.alumnodesignacion.some(
            asignacion => asignacion.Cargo__cargo === tutor
          )
        })

        // Obtener los datos de los alumnos filtrados
        const datosAlumnos = alumnosFiltrados.map((alumno) => {
          return {
            nombre: alumno.nombre,
            apellidopaterno: alumno.apellidopaterno,
            apellidomaterno: alumno.apellidomaterno,
            cargo: alumno.alumnodesignacion.find(
              (asignacion) => asignacion.Cargo__cargo === tutor
            ).Cargo__cargo,
            docente: alumno.alumnodesignacion.find(
              (asignacion) => asignacion.Cargo__cargo === tutor
            ).Docente_nombre,
          };
        });

        return datosAlumnos
      }

      const getData = obtenerAlumnosPorTutor({ 
        tutor: 'Tutor',
        arregloAlumnos: dt
      })

      setTutoresInfo(getData)

    /*   const infoTutores = getTutores({
        arrayTutores: dt.alumnodesignacion,
        cargo: 'Coodirector',
        maestroCargo: 'Juan'
      })

      setTutoresInfo( infoTutores ) */
    }
    getAlumnos()
  }, [])

  console.log(tutoresInfo)
  
  return (
    <main className='grid md:grid-cols-2'>
      <Tabla/>
      <PDFViewer className='w-full h-screen'>
        {/* <ConstanciaTutorias
          tutoresInfo={tutoresInfo}
        /> */}
        <ConstanciaTutorias/>
      </PDFViewer>
    </main>
  )
}

export default App