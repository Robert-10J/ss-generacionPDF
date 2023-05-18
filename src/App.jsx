import axios from 'axios'

const URL_API = 'http://192.168.1.132:8000/Alumnos/Alumno/'

function App() {

  axios.get(URL_API)
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })

  return (
    <>
     <h1>Hello</h1>
    </>
  )
}

export default App