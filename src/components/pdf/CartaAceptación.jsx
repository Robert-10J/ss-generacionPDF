import { Text, View, Font } from '@react-pdf/renderer'
import { extraBold, extraLight, medium, regular, extraLightItalic } from './assets/fonts';
import Plantilla from './Plantilla';
import pdfStyles from './pdfStyles';
import { fecha } from '../../utils';

/**
 * Registro de fuentes para el cuerpo del document
 */

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

const CartaAceptacion = ({ nombre, apellidoPaterno, apellidoMaterno, numeroControl }) => {

  const { fechaFormato, year } = fecha();

  return (
    <Plantilla>
      <View style={pdfStyles.fuente}>
        <View style={pdfStyles.textR}>
          <Text style={pdfStyles.fontWeight}>Instituto Tecnológico de Acapulco</Text>
          <Text>División de Estudio de posgrado e Investigación</Text>
        </View>

        <View style={pdfStyles.textR}>
          <Text>Acapulco, Guerrero, {fechaFormato}</Text>
          <Text>CyD/000/2022</Text>
          <Text style={pdfStyles.textoUpperA}>Asunto: Carta de Aceptación{}</Text>
        </View>
        
        <View style={pdfStyles.textoLeft}>
        <Text style={pdfStyles.textoUpperA}>A quien corresponda</Text>
          <Text style={pdfStyles.textoUpperA}>Presente</Text>
        </View>

        <View style={pdfStyles.textoLeft}>
          <Text style={pdfStyles.cuerpo}>
          El que suscribe, Jefa de División de Estudio de Posgrado e Investigación de este Instituto Tecnologico de Acapulco, hace CONSTAR que 
          la o el C. { nombre } { apellidoPaterno } { apellidoMaterno } con número de control { numeroControl } esta ACEPTADO (A) como estudiante de la Maestria en Sistemas Computacionales del 
          TecNM Campus Acapulco con número de registro { } en el Sistema Nacional de Posgrado antes PNPC en modalidad presencial dado que ha 
          logrado pasar con exito los criterios de seleccion de la convocatoria de nuevo ingreso { year }.
          </Text>
        </View>

        <View style={pdfStyles.textoLeft}>
          <Text style={pdfStyles.textoUpperA}>A t e n t a m e n t e</Text>
          <Text style={[pdfStyles.textUltraLight, pdfStyles.fontSize]}>Excelencia en Educación Tecnológica	&reg;</Text>
          <Text style={{...pdfStyles.textUltraLight,fontSize:'7'}}>Educación Tecnológica con Compromiso Social</Text>
        </View>

        <View style={pdfStyles.textoLeft}>
          <Text style={pdfStyles.textoUpperA}>Jazmín Carbajal Ávila { }</Text>
          <Text style={pdfStyles.textoUpperA}>Jefa de la división de estudios de posgrado e investigación</Text>
        </View>

        <View style={pdfStyles.textoLeft}> 
          <Text>ccp. Interesado</Text>
          <Text>JCA/acdv</Text>
        </View>

      </View>
    </Plantilla>
  )
}

export default CartaAceptacion