import { HEADERS_TABLA } from '../consts.js'

/**
 *  @returns Creando la cabecera de la Tabla donde se renderizan los datos 
 * 
 * 
 */

const CabeceraTabla = () => {
  const headers = Object.values(HEADERS_TABLA)
  return (
    <tr className='bg-gray-300'>
      {            
        headers.map((header, index) => (
          <th key={index} className='p-2'>{header}</th>
        ))
      }
    </tr>
  )
}

export default CabeceraTabla