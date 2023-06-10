import { View, Image, StyleSheet } from '@react-pdf/renderer'

// Imagenes 
import acapulco from './assets/img/acapulco.png'
import anpa_deh from './assets/img/anpa_deh.png'
import cacei from './assets/img/cacei.jpg'
import acec from './assets/img/acec.jpg'
import logo_ita from './assets/img/logo_ita.jpg'
import libre_plastico from './assets/img/libre_plastico.png'
import direccion from './assets/img/direccion.png'
import pie_direccion from './assets/img/pie_direccion.png'


const styles = StyleSheet.create({
  section: {
    backgroundColor: '#92f31f',
    width: '100%',
    height: '0.851181in', // medida del documento de cm a pulgadas
    display: 'flex',
    flexDirection: 'column',
  },
  sectionLogos: {
    display: 'flex',
    flexDirection:'row',
    gap: '3',
    marginBottom: 15
  },
  logo: { width: '20' },
  imgDireccion: { width: '100%', height: '200' },
  imgPieDireccion: { width: '100%', height: '250' },
});

const PiePagina = () => {
  return (
    <View style={styles.section}>
      <View style={styles.sectionLogos}>
        <Image src={acapulco} style={styles.logo}/>
        <Image src={anpa_deh} style={styles.logo}/>
        <Image src={cacei} style={styles.logo}/>
        <Image src={acec} style={styles.logo}/>
        <Image src={logo_ita} style={styles.logo}/>
        <Image src={libre_plastico} style={styles.logo}/>
      </View>
      <View>
        <Image src={direccion} style={styles.imgDireccion}/>
        <Image src={pie_direccion} style={styles.imgPieDireccion}/>
      </View>
    </View>
  )
}

export default PiePagina