import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

import educacion from './assets/educacion.png'
import ita from './assets/ita.png'

const cmToInch = cm => cm / 2.54;

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    height: cmToInch(5.7),
    marginBottom: 20
  },
  imgEducacion: {
    width: '400'
  }
});

// Create Document Component
const Plantilla = () => (
  <Document>
    <Page size="LETTER" style={styles.page}>
      <View style={styles.section}>
        <Image src={educacion} style={styles.imgEducacion}/>
        <Image src={ita}/>
      </View>
    </Page>
  </Document>
);

export default Plantilla