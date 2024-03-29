
import { Text, View, Font } from '@react-pdf/renderer'
import { extraBold, extraLight, medium, regular, extraLightItalic } from './assets/fonts';
import pdfStyles from './pdfStyles';
import Plantilla from './Plantilla';
import TableTutorias from './TableTutorias';
import { fecha } from '../../utils';

const { fechaFormato } = fecha();

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

const ConstanciaTutorias = ({ tutoresInfo }) => {
  return (
    <Plantilla>
      <View style={pdfStyles.fuente}>
        <View style={pdfStyles.textRight}>
          <Text style={pdfStyles.spanText}>Instituto Tecnológico de Acapulco</Text>
          <Text>División de Estudio y Posgrado e Investigación</Text>
        </View>

        <View style={pdfStyles.textRight}>
          <Text>Acapulco, Guerrero, {fechaFormato}</Text>
          <Text style={pdfStyles.textoUpper}> <Text style={pdfStyles.spanText}>Oficio No.</Text> CyD/000/2022</Text>
          <Text style={pdfStyles.textoUpper}> <Text style={pdfStyles.spanText}>Asunto:</Text> Constancia de tutorias{ }</Text>
        </View>

        <View style={pdfStyles.cuerpo}>
          <Text style={[ pdfStyles.textoUpper, pdfStyles.fontWeight] }>A quien corresponda</Text>
          <Text style={{ paddingTop: '20px' }}>Por este conducto me permito hacer <Text style={pdfStyles.spanText}>CONSTAR</Text> que el { } M.T.I Juan Miguel
            Hernandez Bravo fungió como <Text style={pdfStyles.spanText}>tutor</Text> en el programa de Maestría en Sistemas Computacionales
            como se indica a continuación: </Text>
        </View>

        <TableTutorias tutoresInfo={tutoresInfo} />

        <View style={pdfStyles.textoLeft}>
          <Text style={pdfStyles.textoUpperA}>A t e n t a m e n t e</Text>
          <Text style={[pdfStyles.textUltraLight, pdfStyles.fontSize]}>Excelencia en Educación Tecnológica	&reg;</Text>
          <Text style={{...pdfStyles.textUltraLight,fontSize:'7'}}>Educación Tecnológica con Compromiso Social</Text>
        </View>

        <View style={pdfStyles.conteFirmas}>
          <View>
            <Text style={pdfStyles.nombreFirma}>Dra. Jazmin Carbajal Ávila</Text>
            <Text style={pdfStyles.cargoFirma}>Jefa de la División de Estudio y posgrado e {'\n'} Investigación</Text>
          </View>
          <View>
            <Text style={pdfStyles.nombreFirma}>Dra. Lorena Landa Habana</Text>
            <Text style={{ ...pdfStyles.cargoFirma, alignSelf: 'center' }}>Subdirectora Académica {'\n'} </Text>
          </View>
        </View>
      </View>
    </Plantilla>
  )
}

export default ConstanciaTutorias