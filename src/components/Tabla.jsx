import CabeceraTabla from './CabeceraTabla'
import FilaAlumno from './FilaAlumno'

const Tabla = () => {
  return (
    <>
      <table>
        <thead>          
          <CabeceraTabla/>
        </thead>
        <tbody>
          <FilaAlumno/>
        </tbody>
      </table>
    </>
  )
}

export default Tabla