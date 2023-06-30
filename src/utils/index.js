/**
 * Obtiene la fecha actual en formato dd/mm/yyyy.
 * @returns {Object} Objeto con la fecha formateada y el año actual.
 * @property {string} fechaFormato - La fecha actual en formato dd/mm/yyyy.
 * @property {number} year - El año actual.
 */
export function fecha() {
  let fecha = new Date()
  let dia = fecha.getDate()
  let mes = fecha.getMonth() + 1
  let year = fecha.getFullYear()

  let fechaFormato = ''

  if (mes < 10) fechaFormato = `${dia}/0${mes}/${year}`;
  else  fechaFormato = `${dia}/${mes}/${year}`; 
  
  return {
    fechaFormato, 
    year
  }
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

export function getTutores({ 
  arrayTutores = [], 
  cargo = '', 
  maestroCargo = '' 
}) {
  const datosTutor = arrayTutores.map( arrTutor => arrTutor.filter( objTutor => {
      return objTutor.Cargo__cargo === cargo && objTutor.Docente_nombre.includes(maestroCargo)
  })
  ).filter( arrTutor => arrTutor.length > 0)

  return datosTutor
}