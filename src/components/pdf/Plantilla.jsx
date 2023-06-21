import { Page, Document, StyleSheet } from '@react-pdf/renderer';
import Encabezado from './Encabezado';
import PiePagina from './PiePagina';
import Cuerpo from './Cuerpo';

// Create styles
const styles = StyleSheet.create({
  page: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ffff',
    /* marginTop: '0.1653543in',
    marginLeft: '0.984252in',
    marginBottom: '0.787402in',
    marginRight: '0.787402in',  */
  }
});

// Create Document Component
const Plantilla = ({ children }) => {
  return (
    <Document>
      <Page size="LETTER" style={styles.page}>
        <Encabezado/>

        <PiePagina/>
      </Page>
    </Document>
  )
}

export default Plantilla