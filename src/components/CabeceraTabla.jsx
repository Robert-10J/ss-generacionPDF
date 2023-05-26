import { HEADERS_TABLA } from '../consts.js'

const CabeceraTabla = () => {
  const headers = Object.values(HEADERS_TABLA)
  return (
    <tr>
      {            
        headers.map((header, index) => (
          <th key={index}>{header}</th>
        ))
      }
    </tr>
  )
}

export default CabeceraTabla