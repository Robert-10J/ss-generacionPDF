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
    marginTop: '0.16in',
    marginLeft: '0.78in',
    marginBottom: '0.78in',
    marginRight: '0.78in',
    
  }
});

// Create Document Component
const Plantilla = ({ idAlumno }) => (
  <Document>
    <Page size="LETTER" style={styles.page}>
      <Encabezado/>
      <Cuerpo idAlumno={idAlumno} />
      <PiePagina/>
    </Page>
  </Document>
);

export default Plantilla