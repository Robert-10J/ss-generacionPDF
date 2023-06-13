import { Text, View, StyleSheet, Font } from '@react-pdf/renderer'

import extraBold from './assets/fonts/Montserrat-ExtraBold.ttf';
import extraLight  from './assets/fonts/Montserrat-ExtraLight.ttf';
import medium from './assets/fonts/Montserrat-Medium.ttf';
import regular from './assets/fonts/Montserrat-Regular.ttf';
import extraLightItalic from './assets/fonts/Montserrat-ExtraLightItalic.ttf';

Font.register({family: 'Montserrat', fonts: [
  {
    src: extraBold, 
    fontWeight: 'bold',
  },
  {
    src: extraLight, 
    fontWeight: 'ultralight',
  },
  { src: medium }, { src: regular },
  {
    src: extraLightItalic,
    fontStyle: 'italic',
  }
]})

const styles = StyleSheet.create({
  fuente: { fontFamily: 'Montserrat' },
  textoUpper: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontSize: '10',
  },
  textR: {
    textAlign: 'right',
    padding: '20px',
    fontWeight: 'medium',
    fontSize: '9',
  },
  textoLeft: {
    padding: '15px',
    fontWeight: 'medium',
    fontSize: '8'
  },
  cuerpo: {
    textAlign: 'justify',
    fontStyle: 'normal',
    fontSize: '9',
  }
});

const Cuerpo = ({ idAlumno, nombre }) => {
  return (
    <View style={styles.fuente}>
      <View style={styles.textR}>
        <Text style={{fontWeight:'bold'}}>Instituto Tecnológico de Acapulco</Text>
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
        la o el C. { nombre }  con numero de control { idAlumno } esta ACEPTADO (A) como estudiante de la Maestria en Sistemas Computacionales del 
        TecNM Campus Acapulco con numero de registro 5418 en el Sistema Nacional de Posgrado antes PNPC en modolidad presencial dado que ha 
        logrado pasar con exito los criterios de seleccion de la convocatoria de nuevo ingreso 2023.
        </Text>
      </View>

      <View style={styles.textoLeft}>
        <Text style={styles.textoUpper}>A t e n t a m e n t e</Text>
        <Text style={{fontFamily: 'Montserrat', fontWeight:'ultralight', fontSize:'8', fontStyle: 'italic'}}>Excelencia en Educación Tecnológica</Text>
        <Text style={{fontFamily: 'Montserrat', fontWeight:'ultralight', fontSize:'7', fontStyle: 'italic'}}>Educación Tecnológica con Compromiso Social</Text>
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