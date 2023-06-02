import { PDFDocument, rgb, StandardFonts } from 'pdf-lib'

export async function modifyPDF() {
  const existingPdfBytes = await fetch('http://192.168.1.132:8000/media/Plantillas/Hojamembretada2022campusACAPULCO05ene20222.pdf')
    .then(res => res.arrayBuffer())

  const pdfDoc = await PDFDocument.load(existingPdfBytes)

  const monserratFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)

  const pages = pdfDoc.getPages()
  const firstPage = pages[0]

  const { width, height } = firstPage.getSize()

  console.log(width, height)
  firstPage.drawText('Hello', {
    x: 50,
    y: height / 2 + 300,
    size: 50,
    font: monserratFont,
    color: rgb(0.95, 0.1, 0.1),
  })

  const pdfBytes = await pdfDoc.save()

  const blob = new Blob([pdfBytes], { type: 'application/pdf' });

  // Generar una URL a partir del objeto Blob
  const url = URL.createObjectURL(blob);

  // Mostrar el PDF en el navegador utilizando la URL generada
  window.open(url); 
}