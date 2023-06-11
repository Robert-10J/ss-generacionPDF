import { PDFViewer } from '@react-pdf/renderer'
import Tabla from './components/Tabla'
import Plantilla from './components/pdf/Plantilla'


const App = () => {   
  return (
    <main className='grid md:grid-cols-2'>
      <Tabla/>

      <PDFViewer className='w-full h-screen'>
        <Plantilla/>
      </PDFViewer>
    </main>
  )
}

export default App