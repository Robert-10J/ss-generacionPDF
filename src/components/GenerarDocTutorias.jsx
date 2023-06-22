import { PDFDownloadLink } from '@react-pdf/renderer'
import ConstanciaTutorias  from './pdf/ConstanciaTutorias'

const GenerarDocTutorias = () => {
  return (
    <PDFDownloadLink
      document={
        <ConstanciaTutorias />
      }
      fileName={`Constancia-Tutorias}.pdf`}>
      {
        ({ loading }) =>
          loading ? 'Loading doc' : 'Download now'
      }
    </PDFDownloadLink>
  )
}

export default GenerarDocTutorias