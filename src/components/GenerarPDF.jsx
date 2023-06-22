import { PDFDownloadLink } from '@react-pdf/renderer'
import CartaAceptacion from './pdf/CartaAceptación'

const GenerarPDF = ({ nombre, apellidoPaterno, apellidoMaterno, numeroControl }) => {

  return (
    <PDFDownloadLink
      document={ 
        <CartaAceptacion
          nombre={nombre}
          apellidoPaterno={apellidoPaterno}
          apellidoMaterno={apellidoMaterno}
          numeroControl={numeroControl}
        />
      } 
      fileName={`Carta-Aceptacion.pdf`}>
      {
        ({ loading }) =>   
          loading ? 'Loading doc' : 'Download now'
      }
    </PDFDownloadLink>
  )
}

export default GenerarPDF