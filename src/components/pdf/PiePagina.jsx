import { View, Image, StyleSheet } from '@react-pdf/renderer'
import piePagina from './assets/img/pie-pagina.png'

/**
 *  @returns Estilos pie de página
 * 
 * 
 */

const styles = StyleSheet.create({
  imgPie: { 
    //width: '95%', 
    marginLeft: '0.984252in',
    marginRight: '0.787402in', 
  }
});

/**
 *  @returns Componente para el pie de página del doc
 * 
 * 
 */

const PiePagina = () => {
  return (
    <View>
      <Image src={piePagina} style={styles.imgPie}/>
    </View>
  )
}

export default PiePagina