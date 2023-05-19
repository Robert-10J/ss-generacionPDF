import { HEADERS } from '../itemsHead.js'

const CabeceraTabla = () => {
  const headers = Object.values(HEADERS)
  return (
    <thead>
      {            
        headers.map((header, index) => (
          <th key={index}>{header}</th>
        ))
      }
    </thead>
  )
}

export default CabeceraTabla