import { Page, Document, StyleSheet } from '@react-pdf/renderer';
import Encabezado from './Encabezado';
import PiePagina from './PiePagina';
import Cuerpo from './Cuerpo';

// Create styles
const styles = StyleSheet.create({
  page: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ffff'
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