// @param {string} cardId - El ID de la card a descargar.
document.getElementById("descargarPDF").addEventListener("click", ()=>downloadCardAsPDF());


function downloadCardAsPDF() {
    let seleccionado = document.getElementById("select-id").value;
    //console.log("el id a descargar es " + seleccionado)
    const cardElement = document.getElementById(seleccionado);
    console.log(cardElement)
if (!cardElement) {//como oculte el boton hasta la selección no debería hacer falta
    alert('La card seleccionada no existe.');
    return;
}
  // Opciones para html2pdf
const opt = {
    margin:       0.5,                     // Márgenes en pulgadas
        filename:     `${seleccionado}.pdf`,         // Nombre del archivo PDF
        image:        { type: 'jpeg', quality: 0.98 }, // Calidad de la imagen
        html2canvas:  { scale: 2 },             // Escalado para mayor resolución
        jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' } // Configuración del PDF
    };
      // Generar y descargar el PDF
html2pdf().set(opt).from(cardElement).save();
}
// document.getElementById("descargarPDF").addEventListener("click", () => downloadCardAsPDF());

// async function downloadCardAsPDF() {
//     let seleccionado = document.getElementById("select-id").value;
//     const cardElement = document.getElementById(seleccionado);

    
//     if (!cardElement) {
//         alert('La card seleccionada no existe.');
//         return;
//     }

//     // Depuración adicional
//     console.log("Contenido del elemento:", cardElement.innerHTML);
//     console.log("Tamaño del elemento:", cardElement.offsetWidth, cardElement.offsetHeight);

//     // Espera un momento antes de generar el PDF
//     await new Promise(resolve => setTimeout(resolve, 5000)); // Espera 1 segundo

//     const opt = {
//         margin: 0.5,
//         filename: `${seleccionado}.pdf`,
//         image: { type: 'jpeg', quality: 0.98 },
//         html2canvas: { scale: 1 },
//         jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
//     };

//     try {
//         await html2pdf().set(opt).from(cardElement).save();
//         console.log("PDF generado y descargado exitosamente.");
//     } catch (error) {
//         console.error("Error al generar el PDF:", error);
//     }
// }
