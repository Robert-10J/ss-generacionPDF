const GenerarPDF = ({ idAlumno }) => {
  return (
    <button 
      className='py-2 px-5 bg-blue-400 rounded-md uppercase font-bold'
      onClick={()  => console.log('imprimiendo', idAlumno)}
    >
      Imprimir
    </button>
  )
}

export default GenerarPDF