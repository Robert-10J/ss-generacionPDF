/**  
* @return {string} formato de fecha d/m/a para la plantilla del documento
*/
export function fecha() {
  let fecha = new Date()
  let dia = fecha.getDate()
  let mes = fecha.getMonth() + 1
  let year = fecha.getFullYear()

  let fechaFormato = ''

  if (mes < 10) return fechaFormato = `${dia}/0${mes}/${year}`
  return fechaFormato = `${dia}/${mes}/${year}`
}

/** 
 * @param {Object} param0 
 * @param {number} param0.id 
 * @param {Object} param0.alumnos 
*/
export function obtenerAlumno(id, alumnos) {
  const findOneAlumno = alumnos.find(alumno => alumno.id === id) 
  return findOneAlumno
}