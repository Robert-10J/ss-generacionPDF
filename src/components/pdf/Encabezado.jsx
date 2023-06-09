import { View, Image, StyleSheet } from '@react-pdf/renderer'

// Imagenes 
import educacion from './assets/img/educacion.png'
import ita from './assets/img/ita.png'

const styles = StyleSheet.create({
  section: {
    backgroundColor: '#14caef', 
    width: '100%', 
    height: '2.24409in', // medida del documento de cm a pulgadas
  },
  imgEducacion: { width: '280', marginTop: '50', marginLeft: '50' },
});

const Encabezado = () => {
  return (
    <View style={styles.section}>
      <Image src={educacion} style={styles.imgEducacion} />
      <Image src={ita} style={styles.imgDepartamento}/>
    </View>
  )
}

export default Encabezado