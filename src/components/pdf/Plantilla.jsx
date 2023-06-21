import { Page, Document, StyleSheet } from '@react-pdf/renderer'
import Encabezado from './Encabezado'
import PiePagina from './PiePagina'

// import './styles/Plantilla.css'

// Create styles
const styles = StyleSheet.create({
  page: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ffff',
   /*  marginTop: '0.1653543in',
    marginLeft: '0.984252in',
    marginBottom: '0.787402in',
    marginRight: '0.787402in',  */
  }
});

/**
 *  @returns Componente principal donde se "llaman" los componentes del documento
 */

// Create Document Component
const Plantilla = ({ children }) => {
  return (
    <Document>
      <Page size="LETTER" style={styles.page}>
        <Encabezado/>
           {children}
        <PiePagina/>
      </Page>
    </Document>
  )
}
export default Plantilla