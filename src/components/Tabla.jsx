import CabeceraTabla from './CabeceraTabla'
import FilaAlumno from './FilaAlumno'

/**
 *  @returns Renderizacion de los alumnos
 * 
 * 
 */

const Tabla = () => {
  return (
    <div className='flex items-center justify-center mt-5 text-xs'>
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