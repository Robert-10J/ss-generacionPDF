export function fecha() {
  let fecha = new Date()
  let dia = fecha.getDate()
  let mes = fecha.getMonth() + 1
  let year = fecha.getFullYear()

  let fechaFormato = ''

  if (mes < 10) {
    console.log( typeof `${dia}/0${mes}/${year}`)
  } else {
    console.log(`${dia}/${mes}/${year}`)
  }
}