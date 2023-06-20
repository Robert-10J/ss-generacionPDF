import CabeceraTabla from './CabeceraTabla'
import FilaAlumno from './FilaAlumno'

const Tabla = () => {
  return (
    <div className='p-5 flex items-center justify-center mt-5'>
      <table className='table-auto'>
        <thead>          
          <CabeceraTabla/>
        </thead>
        <tbody className='space-y-4'>
          <FilaAlumno/>
        </tbody>
      </table>
    </div>
  )
}

export default Tabla