import { Text, View } from '@react-pdf/renderer'
import pdfStyles from './pdfStyles'

const TableTutorias = ({ tutoresInfo }) => {
  return (
    <View style={pdfStyles.table}>
       {/* ENCABEZADO DE LA TABLA */}
      <View style={pdfStyles.tableRow}>
        <View style={[pdfStyles.tableCol, pdfStyles.col]}>
          <Text style={pdfStyles.tableCell}>Año</Text>
        </View>
        <View style={pdfStyles.tableCol}>
          <Text style={pdfStyles.tableCell}>Estudiante</Text>
        </View>
      </View>

      {/* CUERPO DE LA TABLA */}

      {
        tutoresInfo?.map( ([item]) => (
          <View key={item.id} style={pdfStyles.tableRow}>
            <View style={[pdfStyles.tableCol, styles.col]}>
              <Text style={pdfStyles.tableCell}>2019</Text>
            </View>
            <View style={pdfStyles.tableCol}>
              <Text style={pdfStyles.tableCell}>{item.Docente_nombre}</Text>
            </View>
          </View>
        ))
      }

      {/* <View style={styles.tableRow}>
        <View style={[styles.tableCol, styles.col]}>
          <Text style={styles.tableCell}>2020</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>Herrera Pimber Guadalupe</Text>
          <Text style={styles.tableCell}>Lopez Hernandez Eydi</Text>
          <Text style={styles.tableCell}>Martinez Hernandez Maria Guadalupe</Text>
          <Text style={styles.tableCell}>Martinez Valencia Ricardo Fabrizio</Text>
          <Text style={styles.tableCell}>Visoso Rogriguez Victor Daniel </Text>
        </View>
      </View>

      <View style={styles.tableRow}>
        <View style={[styles.tableCol, styles.col]}>
          <Text style={styles.tableCell}>2021</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>Herrera Pimber Guadalupe</Text>
          <Text style={styles.tableCell}>Lopez Hernandez Eydi</Text>
          <Text style={styles.tableCell}>Martinez Hernandez Maria Guadalupe</Text>
          <Text style={styles.tableCell}>Martinez Valencia Ricardo Fabrizio</Text>
          <Text style={styles.tableCell}>Visoso Rogriguez Victor Daniel </Text>
        </View>
      </View> */}
    </View>
  )
}

export default TableTutorias
