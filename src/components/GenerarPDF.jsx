const GenerarPDF = ({ idAlumno }) => {
  return (
    <button 
      className='py-1 px-2 border-solid border-2 border-blue-800 hover:bg-blue-300  rounded-md uppercase font-semibold'
      onClick={()  => console.log('imprimiendo', idAlumno)}
    >
      Imprimir
    </button>
  )
}

export default GenerarPDF