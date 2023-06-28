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
          loading ? 'Loading doc' : 'Tutorias'
      }
    </PDFDownloadLink>
  )
}

export default GenerarDocTutorias