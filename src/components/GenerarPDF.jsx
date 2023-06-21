import { PDFDownloadLink } from '@react-pdf/renderer'
import Plantilla from './pdf/Plantilla'

/**
 *  @returns Generación del documento
 * 
 * 
 */

const GenerarPDF = ({ idAlumno, nombre }) => {
  return (
    <PDFDownloadLink 
      document={
        <Plantilla
          idAlumno={idAlumno}
          nombre={nombre}
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