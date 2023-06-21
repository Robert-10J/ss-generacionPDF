import { PDFViewer } from '@react-pdf/renderer'
import Tabla from './components/Tabla'
import CartaAceptacion from './components/pdf/CartaAceptación'
import { ConstanciaTutorias } from './components/pdf/ConstanciaTutorias'

const App = () => {     
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