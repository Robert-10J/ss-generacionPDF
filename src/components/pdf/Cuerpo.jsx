import { Text, View, StyleSheet, Font } from '@react-pdf/renderer'

import FontMontserratExtraBold from './assets/fonts/Montserrat-ExtraBold.ttf';
import FontMontserratExtraLight from './assets/fonts/Montserrat-ExtraLight.ttf';
import FontMontserratMedium from './assets/fonts/Montserrat-Medium.ttf';
import FontMontserratRegular from './assets/fonts/Montserrat-Regular.ttf';

Font.register({family: 'Montserrat', fonts: [
  {
    src: FontMontserratExtraBold, 
    fontWeight: 'bold',
  },
  {
    src: FontMontserratExtraLight, 
    fontWeight: 'ultralight',
  },
  {
    src: FontMontserratMedium
  },
  {
    src: FontMontserratRegular
  }
]})

const styles = StyleSheet.create({
  textoUpper: {
    textTransform: 'uppercase',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontSize: '10',
  },
  textR: {
    textAlign: 'right',
    padding: '20px',
    fontFamily: 'Montserrat',
    fontWeight: 'medium',
    fontSize: '9',
  },
  textoLeft: {
    padding: '15px',
    fontFamily: 'Montserrat',
    fontWeight: 'medium',
    fontSize: '8'
  },
  section: {
   margin: '20 10 20 10',
  },
  cuerpo: {
    textAlign: 'justify',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontSize: '9',
  }

});

const Cuerpo = ({ idAlumno }) => {
  return (
    <View style={styles.section}>

      <View style={styles.textR}>
        <Text style={{fontFamily:'Montserrat', fontWeight:'bold'}}>Instituto Tecnológico de Acapulco</Text>
        <Text>División de Estudio de posgrado e Investigación</Text>
      </View>

      <View style={styles.textR}>
        <Text>Acapulco, Guerrero, {} </Text>
        <Text>CyD/000/2022</Text>
        <Text style={styles.textoUpper}>Asunto: {} </Text>
      </View>
      
      <View style={styles.textoLeft}>
       <Text style={styles.textoUpper}>A quien corresponda</Text>
        <Text style={styles.textoUpper}>Presente</Text>
      </View>

      <View style={styles.textoLeft}>
        <Text style={styles.cuerpo}>
        El que suscribe, Jefa de División de Estudio de Posgrado e Investigación de este Instituto Tecnologico de Acapulco, hace CONSTAR que 
        la o el C. { idAlumno }  con numero de control { } esta ACEPTADO (A) como estudiante de la Maestria en Sistemas Computacionales del 
        TecNM Campus Acapulco con numero de registro 5418 en el Sistema Nacional de Posgrado antes PNPC en modolidad presencial dado que ha 
        logrado pasar con exito los criterios de seleccion de la convocatoria de nuevo ingreso 2023.
        </Text>
      </View>

      <View style={styles.textoLeft}>
        <Text style={styles.textoUpper}>Atentamente</Text>
        <Text style={{fontFamily: 'Montserrat', fontWeight:'ultralight', fontSize:'8'}}>Excelencia en Educación Tecnológica</Text>
        <Text style={{fontFamily: 'Montserrat', fontWeight:'ultralight', fontSize:'7'}}>Educación Tecnológica con Compromiso Social</Text>
      </View>

      <View style={styles.textoLeft}>
        <Text style={styles.textoUpper}>Nombre { }</Text>
        <Text style={styles.textoUpper}>Jefa del Departamento de Comunicación y Difusión</Text>
      </View>

      <View style={styles.textoLeft}> 
        <Text>ccp. Victor Hugo Agatón Catalán - Subdirector de </Text>
        <Text>KGM\edp</Text>
      </View>

    </View>
  )
}

export default Cuerpo