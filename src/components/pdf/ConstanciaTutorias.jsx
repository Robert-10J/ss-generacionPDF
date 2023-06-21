import { Text, View, StyleSheet, Font } from '@react-pdf/renderer'

import extraBold from './assets/fonts/Montserrat-ExtraBold.ttf';
import extraLight  from './assets/fonts/Montserrat-ExtraLight.ttf';
import medium from './assets/fonts/Montserrat-Medium.ttf';
import regular from './assets/fonts/Montserrat-Regular.ttf';
import extraLightItalic from './assets/fonts/Montserrat-ExtraLightItalic.ttf';

import { fecha } from '../../utils';
import Plantilla from './Plantilla';

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
  
});


export const ConstanciaTutorias = () => {
  return (
    <Plantilla>
      <View style={styles.fuente}>
        <View>
          <Text>Instituto Tecnológico de Acapulco</Text>
          <Text>División de Estudio y Posgrado e Investigación</Text>
        </View>

        <View>
          <Text>Acapulco, Guerrero, {fechaFormato}</Text>
          <Text>CyD/000/2022</Text>
          <Text>Asunto: Constancia de tutorias{}</Text>
        </View>

        <View>
          <Text>A quien corresponda</Text>
          <Text>Por este conducto me permito hacer constar que el {} M.T.I Juan Miguel 
               Hernandez Bravo fungió como tutor en el programa de Maestría en Sistemas Computacionales 
               como se indica a continuación: </Text>

        </View>
           
        <View>
             TABLA
        </View>

        <View>
            <Text>A t e n t a m e n t e</Text>
            <Text>Excelencia en Educación Tecnológica</Text>
            <Text>Educación Tecnológica con Compromiso Social</Text>

        </View>

        <View>
          <View>
            <Text>DRA. JAZMIN CARBAJAL ÁVILA</Text>
            <Text>Jefa de la División de Estudio y posgrado e Investigación</Text>

          </View>
          <View>

          </View>

        </View>







      </View>





    </Plantilla>
  )
}
