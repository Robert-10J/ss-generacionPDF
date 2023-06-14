import { View, Image, StyleSheet } from '@react-pdf/renderer'

// Imagenes 
import educacion from './assets/img/educacion.png'

const styles = StyleSheet.create({
  section: {
    //width: '100%', 
    height: '2.24409in', // medida del documento de cm a pulgadas
    marginLeft: '0.984252in',
    marginRight: '0.787402in', 
  },
  imgEducacion: { width: '280', marginTop: '50', marginLeft: '50' },
});

const Encabezado = () => {
  return (
    <View style={styles.section}>
      <Image src={educacion} style={styles.imgEducacion} />
    </View>
  )
}

export default Encabezado