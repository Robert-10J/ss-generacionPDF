import { Text, View, StyleSheet, Font } from '@react-pdf/renderer'

import { extraBold, extraLight, medium, regular, extraLightItalic } from './assets/fonts';

import { fecha } from '../../utils';
import Plantilla from './Plantilla';
import TableTutorias from './TableTutorias';


const { fechaFormato, year } = fecha();

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
]});

const styles = StyleSheet.create({
  fuente: { 
    fontFamily: 'Montserrat', 
    marginLeft: '0.984252in',
    marginRight: '0.787402in', 
  },
  conteFirmas: {
    paddingTop:'80px',
    paddingBottom:'50px',
    textTransform: 'uppercase',
    flexDirection: 'row', 
    justifyContent: 'space-between',
    fontStyle: 'normal',
    fontWeight: 'light',
  }, 
  textRight:{
    textAlign: 'right',
    paddingBottom: '20px',
    paddingTop: '20px',
    fontWeight: 'medium',
    fontSize: '9',
  },
  textoUpper: {
    textTransform: 'uppercase',
  }, 
  spanText:{
    fontWeight: 'bold',
    fontStyle: 'normal',
  },
  cuerpo: {
    textAlign: 'justify',
    fontStyle: 'normal',
    lineHeight: '1.5px',
    fontSize: '9',
    paddingBottom: '40px',
  },
  nombreFirma:{
    textDecoration: 'underline',
    fontSize: '11px',
    fontWeight: 'medium',
  },
  cargoFirma:{
    paddingTop: '3px',
    fontSize: '8px',
  }, 
  texto: {
    fontWeight: 'medium',
  },
  textUltraLight: {
    fontWeight:'ultralight',
    fontStyle: 'italic'
  }

});

const ConstanciaTutorias = () => {
  return (
    <Plantilla>
      <View style={styles.fuente}>
        <View style={styles.textRight}>
          <Text style={styles.spanText}>Instituto Tecnológico de Acapulco</Text>
          <Text>División de Estudio y Posgrado e Investigación</Text>
        </View>

        <View style={styles.textRight}>
          <Text>Acapulco, Guerrero, {fechaFormato}</Text>
          <Text style={styles.textoUpper}> <Text style={styles.spanText}>Oficio No.</Text> CyD/000/2022</Text>
          <Text style={styles.textoUpper}> <Text style={styles.spanText}>Asunto:</Text> Constancia de tutorias{ }</Text>
        </View>

        <View style={styles.cuerpo}>
          <Text style={{ ...styles.textoUpper, fontWeight: 'bold' }}>A quien corresponda</Text>
          <Text style={{ paddingTop: '20px' }}>Por este conducto me permito hacer <Text style={styles.spanText}>CONSTAR</Text> que el { } M.T.I Juan Miguel
            Hernandez Bravo fungió como <Text style={styles.spanText}>tutor</Text> en el programa de Maestría en Sistemas Computacionales
            como se indica a continuación: </Text>
        </View>

        <TableTutorias>

        </TableTutorias>

        <View style={styles.texto}>
          <Text style={{ ...styles.textoUpper, fontWeight: 'bold', fontSize: '8' }}>A t e n t a m e n t e</Text>
          <Text style={{ ...styles.textUltraLight, fontSize: '8' }}>Excelencia en Educación Tecnológica®</Text>
          <Text style={{ ...styles.textUltraLight, fontSize: '7' }}>Educación Tecnológica con Compromiso Social</Text>
        </View>

        <View style={styles.conteFirmas}>
          <View>
            <Text style={styles.nombreFirma}>Dra. Jazmin Carbajal Ávila</Text>
            <Text style={styles.cargoFirma}>Jefa de la División de Estudio y posgrado e {'\n'} Investigación</Text>
          </View>
          <View>
            <Text style={styles.nombreFirma}>Dra. Lorena Landa Habana</Text>
            <Text style={{ ...styles.cargoFirma, alignSelf: 'center' }}>Subdirectora Académica {'\n'} </Text>
          </View>
        </View>
      </View>
    </Plantilla>
  )
}

export default ConstanciaTutorias