// Crear una promesa que se rechaza después de 2 segundos
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Promise rechazada"); // Rechaza la promesa con el mensaje
    }, 2000); // Espera 2 segundos (2000 milisegundos)
  });
  
  // Manejar la promesa
  myPromise
    .catch((error) => {
      console.error("Error:", error); // Captura e imprime el error
    });


    
//     CREAR promesa llamada myPromise
//     DEFINIR función con parámetros resolve, reject
//         CONFIGURAR temporizador para esperar 2 segundos
//             DESPUÉS de 2 segundos
//                 LLAMAR a reject con mensaje "Promise rechazada"
//     FIN DEFINIR
// FIN CREAR

// LLAMAR a myPromise
//     ATRAPAR (catch) el error
//         IMPRIMIR "Error:" seguido del mensaje de error
//     FIN ATRAPAR
// FIN LLAMAR