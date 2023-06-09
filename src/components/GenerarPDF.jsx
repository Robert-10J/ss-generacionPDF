import { PDFDownloadLink } from '@react-pdf/renderer'
import Plantilla from './pdf/Plantilla'

const GenerarPDF = ({ idAlumno }) => {
  return (
/*     <button 
      className='py-1 px-2 border-solid border-2 border-blue-800 hover:bg-blue-300  rounded-md uppercase font-semibold'
      onClick={()  => console.log('imprimiendo', idAlumno)}
    >
      Imprimir
    </button> */

    <PDFDownloadLink document={<Plantilla/>} fileName={`doc-${idAlumno}.pdf`}>
      {
        ({ loading }) => 
          loading ? 'Loading doc' : 'Download now'
      }
    </PDFDownloadLink>
  )
}

export default GenerarPDF