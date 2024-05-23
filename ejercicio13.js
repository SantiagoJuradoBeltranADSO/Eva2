const myPromise = new Promise((resolve, reject) => {
    // Espera 3 segundos (3000 milisegundos)
    setTimeout(() => {
      resolve("Promise resuelta"); // Resuelve la promesa con el mensaje
    }, 3000);
  });
  
  myPromise
    .then((message) => {
      console.log(message); // Imprime el mensaje cuando la promesa se cumple
    })
    .catch((error) => {
      console.error(error); // Imprime cualquier error si la promesa es rechazada
    });


//     INICIAR Promesa llamada myPromise
//     DEFINIR función con parámetros resolve, reject
//         CONFIGURAR temporizador para esperar 3 segundos
//             DESPUÉS de 3 segundos
//                 LLAMAR a resolve con mensaje "Promise resuelta"
//     FIN DE función
// FIN DE Promesa

// LLAMAR a myPromise
//     ENTONCES (then)
//         RECIBIR mensaje de la promesa
//         IMPRIMIR mensaje
//     FIN ENTONCES
//     ATRAPAR (catch) cualquier error
//         IMPRIMIR error
//     FIN ATRAPAR
// FIN LLAMAR