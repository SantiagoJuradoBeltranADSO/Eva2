function crearPromesa(tiempo) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Promesa resuelta después de ${tiempo} milisegundos`);
        }, tiempo);
    });
}

// Crear tres promesas con diferentes intervalos de tiempo
const promesa1 = crearPromesa(2000); // Se resuelve después de 2 segundos
const promesa2 = crearPromesa(3000); // Se resuelve después de 3 segundos
const promesa3 = crearPromesa(4000); // Se resuelve después de 4 segundos

// Utilizar Promise.all() para esperar a que todas las promesas se resuelvan
Promise.all([promesa1, promesa2, promesa3])
    .then(resultados => {
        // Mostrar un mensaje cuando todas las promesas se hayan resuelto
        console.log("Todas las promesas se han resuelto:");
        resultados.forEach(resultado => {
            console.log(resultado);
        });
    })
    .catch(error => {
        // Manejar cualquier error que ocurra durante el proceso
        console.error("Hubo un error:", error);
    });

    // DEFINIR una función llamada crearPromesa que toma un parámetro de tiempo
// La función crea y devuelve una nueva promesa que se resuelve después del tiempo especificado
// DEFINIR función crearPromesa(tiempo)
// RETORNAR una nueva promesa que se resuelve después de esperar el tiempo especificado
// FIN DEFINIR

// // Crear tres promesas con diferentes intervalos de tiempo
// promesa1 = crearPromesa(2000) // Promesa que se resuelve después de 2 segundos
// promesa2 = crearPromesa(3000) // Promesa que se resuelve después de 3 segundos
// promesa3 = crearPromesa(4000) // Promesa que se resuelve después de 4 segundos

// // Utilizar Promise.all() para esperar a que todas las promesas se resuelvan
// Promise.all([promesa1, promesa2, promesa3])
// .ENTONCES (resultados)
//     // PARA CADA resultado EN resultados
//     // Mostrar cada resultado en la consola
//     PARA CADA resultado EN resultados
//         MOSTRAR resultado
//     FIN PARA
// .ATRAPAR (error)
//     // Si ocurre un error durante el proceso, mostrar un mensaje de error en la consola
//     MOSTRAR "Hubo un error:", error
// FIN