import { View, Image, StyleSheet } from '@react-pdf/renderer'
import piePagina from './assets/img/pie-pagina.png'

const styles = StyleSheet.create({
  imgPie: { width: '95%' }
});

const PiePagina = () => {
  return (
    <View>
      <Image src={piePagina} style={styles.imgPie}/>
    </View>
  )
}

export default PiePagina