// Crear la primera promesa
const promise1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve(1); // Devuelve el número 1
    }, 1000); // Espera 1 segundo
  });
  
  // Crear la segunda promesa
  const promise2 = new Promise((resolve) => {
    setTimeout(() => {
      resolve(2); // Devuelve el número 2
    }, 1000); // Espera 1 segundo
  });
  
  // Crear la tercera promesa
  const promise3 = new Promise((resolve) => {
    setTimeout(() => {
      resolve(3); // Devuelve el número 3
    }, 1000); // Espera 1 segundo
  });
  
  // Encadenar las tres promesas
  promise1
    .then((result1) => {
      return promise2.then((result2) => result1 + result2);
    })
    .then((result12) => {
      return promise3.then((result3) => result12 + result3);
    })
    .then((finalResult) => {
      console.log("Resultado final:", finalResult); // Imprimir el resultado final
    })
    .catch((error) => {
      console.error("Error:", error); // Manejar cualquier error
    });



//     CREAR promesa llamada promise1
//     CONFIGURAR temporizador para esperar 1 segundo
//         DESPUÉS de 1 segundo
//             RESOLVER con el número 1
//     FIN CONFIGURAR
// FIN CREAR

// CREAR promesa llamada promise2
//     CONFIGURAR temporizador para esperar 1 segundo
//         DESPUÉS de 1 segundo
//             RESOLVER con el número 2
//     FIN CONFIGURAR
// FIN CREAR

// CREAR promesa llamada promise3
//     CONFIGURAR temporizador para esperar 1 segundo
//         DESPUÉS de 1 segundo
//             RESOLVER con el número 3
//     FIN CONFIGURAR
// FIN CREAR

// ENCADENAR promise1
//     ENTONCES sumar resultado de promise1 y promise2
//     ENTONCES sumar resultado acumulado con resultado de promise3
//     ENTONCES imprimir el resultado final
//     ATRAPAR cualquier error e imprimir
// FIN ENCADENAR