const GenerarPDF = ({ idAlumno }) => {
  return (
    <button onClick={()  => console.log('imprimiendo', idAlumno)}>
      Imprimir
    </button>
  )
}

export default GenerarPDF