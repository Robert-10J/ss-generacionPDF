import { View, Image, StyleSheet } from '@react-pdf/renderer'
import piePagina from './assets/img/pie-pagina.png'

const styles = StyleSheet.create({
  imgPie: { 
    //width: '95%', 
    marginLeft: '0.984252in',
    marginRight: '0.787402in', 
  }
});

const PiePagina = () => {
  return (
    <View>
      <Image src={piePagina} style={styles.imgPie}/>
    </View>
  )
}

export default PiePagina