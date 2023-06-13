import { Text, View, StyleSheet, Font } from '@react-pdf/renderer'

import extraBold from './assets/fonts/Montserrat-ExtraBold.ttf';
import extraLight  from './assets/fonts/Montserrat-ExtraLight.ttf';
import medium from './assets/fonts/Montserrat-Medium.ttf';
import regular from './assets/fonts/Montserrat-Regular.ttf';
import extraLightItalic from './assets/fonts/Montserrat-ExtraLightItalic.ttf';
import { fecha } from '../../utils';

Font.register({family: 'Montserrat', fonts: [
  {
    src: extraBold, 
    fontWeight: 'bold',
  },
  {
    src: extraLight, 
    fontWeight: 'ultralight',
  },
  { src: medium },
  { src: regular },
  {
    src: extraLightItalic,
    fontStyle: 'italic',
  }
]})

const styles = StyleSheet.create({
  fuente: { 
    fontFamily: 'Montserrat', 
    marginLeft: '0.984252in',
    marginRight: '0.787402in', 
  },
    textoUpper: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontSize: '10',
  },
  textR: {
    textAlign: 'right',
    paddingBottom: '20px',
    paddingTop: '20px',
    fontWeight: 'medium',
    fontSize: '9',
  },
  textoLeft: {
    paddingBottom: '20px',
    paddingTop: '20px',
    fontWeight: 'medium',
    fontSize: '8'
  },
  cuerpo: {
    textAlign: 'justify',
    fontStyle: 'normal',
    lineHeight: '1.5px',
    fontSize: '9',
  },
  textUltraLight: {
    fontWeight:'ultralight',
    fontStyle: 'italic'
  }
});

const Cuerpo = ({ idAlumno, nombre }) => {

  const fecha1 = fecha();

  return (
    <View style={styles.fuente}>
      <View style={styles.textR}>
        <Text style={{fontWeight:'bold'}}>Instituto Tecnológico de Acapulco</Text>
        <Text>División de Estudio de posgrado e Investigación</Text>
      </View>

      <View style={styles.textR}>
        <Text>Acapulco, Guerrero, {fecha1}</Text>
        <Text>CyD/000/2022</Text>
        <Text style={styles.textoUpper}>Asunto: Carta de Aceptación{}</Text>
      </View>
      
      <View style={styles.textoLeft}>
       <Text style={styles.textoUpper}>A quien corresponda</Text>
        <Text style={styles.textoUpper}>Presente</Text>
      </View>

      <View style={styles.textoLeft}>
        <Text style={styles.cuerpo}>
        El que suscribe, Jefa de División de Estudio de Posgrado e Investigación de este Instituto Tecnologico de Acapulco, hace CONSTAR que 
        la o el C. CORTÉS BÁRCENAS YARELI{ nombre } con numero de control M22320006{ idAlumno } esta ACEPTADO (A) como estudiante de la Maestria en Sistemas Computacionales del 
        TecNM Campus Acapulco con numero de registro 5418 en el Sistema Nacional de Posgrado antes PNPC en modolidad presencial dado que ha 
        logrado pasar con exito los criterios de seleccion de la convocatoria de nuevo ingreso 2023.
        </Text>
      </View>

      <View style={styles.textoLeft}>
        <Text style={styles.textoUpper}>A t e n t a m e n t e</Text>
        <Text style={{...styles.textUltraLight,fontSize:'8'}}>Excelencia en Educación Tecnológica</Text>
        <Text style={{...styles.textUltraLight,fontSize:'7'}}>Educación Tecnológica con Compromiso Social</Text>
      </View>

      <View style={styles.textoLeft}>
        <Text style={styles.textoUpper}>Jazmín Carbajal Ávila { }</Text>
        <Text style={styles.textoUpper}>Jefa de la división de estudios de posgrado e investigación</Text>
      </View>

      <View style={styles.textoLeft}> 
        <Text>ccp. Interesado</Text>
        <Text>JCA/acdv</Text>
      </View>

    </View>
  )
}

export default Cuerpo