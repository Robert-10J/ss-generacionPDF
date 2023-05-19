import { useEffect } from 'react'
import Table from './components/Table'

const URL_API = 'http://192.168.1.132:8000/Alumnos/Alumno/'

function App() {
  /* useEffect(() => {
    const getData = async () => {
      const response = await fetch(URL_API)
      const data = await response.json()
      console.log(data)
    }
    getData()
  }, []) */

  return (
    <>
     <Table/>
    </>
  )
}

export default App