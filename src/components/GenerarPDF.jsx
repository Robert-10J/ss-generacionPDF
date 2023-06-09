import { PDFDownloadLink } from '@react-pdf/renderer'
import Plantilla from './pdf/Plantilla'

const GenerarPDF = ({ idAlumno }) => {
  return (
    <PDFDownloadLink 
      document={
        <Plantilla
          idAlumno={idAlumno}
        />
      } 
      fileName={`doc-${idAlumno}.pdf`}>
      {
        ({ loading }) => 
          loading ? 'Loading doc' : 'Download now'
      }
    </PDFDownloadLink>
  )
}

export default GenerarPDF