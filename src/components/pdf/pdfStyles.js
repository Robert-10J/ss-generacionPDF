import { StyleSheet } from '@react-pdf/renderer'

//GLOBALES
const fuente= { 
  fontFamily: 'Montserrat', 
  marginLeft: '0.984252in',
  marginRight: '0.787402in', 
};

const cuerpo = {
  textAlign: 'justify',
  fontStyle: 'normal',
  lineHeight: '1.5px',
  fontSize: '9',
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
}; 

//Constancias de Tutorias

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

  //ESTILOS TABLA DE TUTORIAS 

    const table = {
      width: '100%',
      display: "table",
      borderStyle: "solid", 
      borderTop: 1,
      borderLeft:1,
    };
    const tableRow = {
      width: '100%',
      margin: "auto",
      flexDirection: "row", 
      borderBottom: 1,
    };
    const tableCol = {
      width: '100%',
      borderStyle: "solid", 
      borderRight: 1,
    };
     const tableCell = {
      marginTop: 5,
      fontSize: 10, 
      marginLeft: 3,
    };
    const col = { width: '20%' }   


  //ESTILOS CARTA DE ACEPTACIÓN 

    const textoUpperA = {
      textTransform: 'uppercase',
      fontWeight: 'bold',
      fontStyle: 'normal',
      fontSize: '10',
    };
    const textR = {
      textAlign: 'right',
      paddingBottom: '20px',
      paddingTop: '20px',
      fontWeight: 'medium',
      fontSize: '9',
    };
    const textoLeft = {
      paddingBottom: '20px',
      paddingTop: '20px',
      fontWeight: 'medium',
      fontSize: '8'
    };

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
  textoUpperA,
  textR, 
  textoLeft,
  table, 
  tableRow, 
  tableCell, 
  tableCol
});