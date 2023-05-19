import axios from 'axios'
import Tabla from './components/Tabla'

const URL_API = 'http://192.168.1.132:8000/Alumnos/Alumno/'

function App() {
  return (
    <>
     <table>
      <tr>
        <th>Id</th>
        <th>Nombre</th>
        <th>Curp</th>
        <th>Email</th>
        <th>N°Control</th>
        <th>Usuario</th>
        <th>Acciones</th>
      </tr>
      <tr>
        <td>7</td>
        <td>Brayan</td>
        <td>PESA660128HGtRLL02</td>
        <td>brayan32@outlook.com</td>
        <td>M21322002</td>
        <td>Brayan</td>
        <td>Imprimir</td>
      </tr>

     </table>

     <Tabla/>
    </>
  )
}

export default App