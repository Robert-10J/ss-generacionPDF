import { PDFViewer } from '@react-pdf/renderer'
import Tabla from './components/Tabla'
import Plantilla from './components/pdf/Plantilla'
import { fecha } from './utils'

const App = () => {     
  return (
    <main className='grid md:grid-cols-2'>
      <Tabla/>

      <PDFViewer className='w-full h-screen'>
        <Plantilla/>
      </PDFViewer>
      {
        fecha()
      }
    </main>
  )
}

export default App