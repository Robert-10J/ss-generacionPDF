import { PDFViewer } from '@react-pdf/renderer'
import Tabla from './components/Tabla'
import ConstanciaTutorias from './components/pdf/ConstanciaTutorias'

import { obtenerAlumnos } from './services/peticiones'
import { getTutores } from './utils'
import { useEffect, useState } from 'react'

const App = () => {
  const [tutoresInfo, setTutoresInfo] = useState([])

  useEffect(() => {
    const getAlumnos = async () => {
      const data = await obtenerAlumnos()
      const dt = data?.map(({ alumnodesignacion }) => {
        return alumnodesignacion
      })    
      
      const infoTutores = getTutores({
        arrayTutores: dt,
        cargo: 'Coodirector',
        maestroCargo: 'Juan'
      })

      setTutoresInfo( infoTutores )
    }
    getAlumnos()
  }, [])
  
  return (
    <main className='grid md:grid-cols-2'>
      <Tabla/>
      <PDFViewer className='w-full h-screen'>
        <ConstanciaTutorias
          tutoresInfo={tutoresInfo}
        />
      </PDFViewer>
    </main>
  )
}

export default App