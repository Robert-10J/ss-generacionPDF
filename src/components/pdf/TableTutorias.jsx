import { StyleSheet, Text, View } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  table: {
    width: '100%',
    display: "table",
    borderStyle: "solid",
    borderTop: 1,
    borderLeft: 1,
  },
  tableRow: {
    width: '100%',
    margin: "auto",
    flexDirection: "row",
    borderBottom: 1,
  },
  tableCol: {
    width: '100%',
    borderStyle: "solid",
    borderRight: 1,
  },
  tableCell: {
    marginTop: 5,
    fontSize: 10,
    marginLeft: 3,
  },
  col: { width: '20%' }
})

const TableTutorias = ({ tutoresInfo }) => {
  return (
    <View style={styles.table}>
      {/* ENCABEZADO DE LA TABLA */}
      <View style={styles.tableRow}>
        <View style={[styles.tableCol, styles.col]}>
          <Text style={styles.tableCell}>Año</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>Estudiante</Text>
        </View>
      </View>

      {/* CUERPO DE LA TABLA */}

      {
        tutoresInfo?.map(item => (
          <View key={item.id} style={styles.tableRow}>
            <View style={[styles.tableCol, styles.col]}>
              <Text style={styles.tableCell}>2019</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{item.nombre}</Text>
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
