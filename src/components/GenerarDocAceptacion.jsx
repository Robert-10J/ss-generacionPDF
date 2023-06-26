import { PDFDownloadLink } from '@react-pdf/renderer'
import CartaAceptacion from './pdf/CartaAceptación'

const GenerarDocAceptacion = ({ 
  nombre, apellidoPaterno, apellidoMaterno, numeroControl 
}) => {
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
      fileName={`Carta-Aceptacion-${nombre}.pdf`}>
      {
        ({ loading }) =>   
          loading ? 'Loading Carta' : 'Aceptacion'
      }
    </PDFDownloadLink>
  )
}

export default GenerarDocAceptacion