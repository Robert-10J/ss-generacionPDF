import { StyleSheet } from '@react-pdf/renderer'

//Constancias de Tutorias

  const fuente= { 
    fontFamily: 'Montserrat', 
    marginLeft: '0.984252in',
    marginRight: '0.787402in', 
  };

  const conteFirmas= {
    paddingTop:'80px',
    paddingBottom:'50px',
    textTransform: 'uppercase',
    flexDirection: 'row', 
    justifyContent: 'space-between',
    fontStyle: 'normal',
    fontWeight: 'light',
  };

  const textRight = {
    textAlign: 'right',
    paddingBottom: '20px',
    paddingTop: '20px',
    fontWeight: 'medium',
    fontSize: '9',
  };

  const textoUpper = {
    textTransform: 'uppercase',
  }; 

  const spanText ={
    fontWeight: 'bold',
    fontStyle: 'normal',
  };

  const cuerpo = {
    textAlign: 'justify',
    fontStyle: 'normal',
    lineHeight: '1.5px',
    fontSize: '9',
    paddingBottom: '40px',
  };

  const nombreFirma = {
    textDecoration: 'underline',
    fontSize: '11px',
    fontWeight: 'medium',
  };

  const cargoFirma= {
    paddingTop: '3px',
    fontSize: '8px',
  };

  const texto = {
    fontWeight: 'medium',
  };

  const textUltraLight = {
    fontWeight:'ultralight',
    fontStyle: 'italic'
  };
  const fontWeight = {
    fontWeight: 'bold',
  };
  const fontSize = {
    fontSize: '8px',
  }

export default StyleSheet.create({
  fuente, 
  conteFirmas, 
  textRight,
  textoUpper, 
  spanText, 
  cuerpo, 
  nombreFirma, 
  cargoFirma, 
  texto, 
  textUltraLight, 
  fontWeight,
  fontSize,
});