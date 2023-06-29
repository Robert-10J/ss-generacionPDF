import { PDFViewer } from '@react-pdf/renderer'
import Tabla from './components/Tabla'
import ConstanciaTutorias from './components/pdf/ConstanciaTutorias'

import { obtenerAlumnos } from './services/peticiones'
import { getTutores } from './utils'

const App = () => {
  const getAlumnos = async () => {
    const data = await obtenerAlumnos()
    const dt = data.map(({ alumnodesignacion }) => (
      console.log(alumnodesignacion)
    ))
    //getTutores(data)
  }
  getAlumnos()
  
  return (
    <main className='grid md:grid-cols-2'>
      <Tabla/>
      <PDFViewer className='w-full h-screen'>
        <ConstanciaTutorias/>
      </PDFViewer>
    </main>
  )
}

export default App