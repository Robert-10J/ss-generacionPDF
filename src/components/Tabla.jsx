import CabeceraTabla from './CabeceraTabla'
import FilaAlumno from './FilaAlumno'

const Tabla = () => {
  return (
    <div className='p-5 flex items-center justify-center mt-5'>
      <table>
        <thead>          
          <CabeceraTabla/>
        </thead>
        <tbody>
          <FilaAlumno/>
        </tbody>
      </table>
    </div>
  )
}

export default Tabla