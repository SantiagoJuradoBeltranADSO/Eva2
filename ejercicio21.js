// Definir una función llamada crearPromesa que toma un parámetro de estado
// La función devuelve una promesa que se resuelve o se rechaza según el estado proporcionado
// Función para crear una promesa que se resuelve o se rechaza después de un tiempo dado
// Función para crear una promesa que se resuelve después de un tiempo dado
const crearPromesa = (tiempo, exito) => 
    new Promise((resolver, rechazar) => 
        setTimeout(() => {
            const mensaje = `${exito ? 'Resuelta' : 'Rechazada'} después de ${tiempo} ms`;
            console.log(mensaje);
            exito ? resolver(mensaje) : rechazar(mensaje);
        }, tiempo)
    );
// Crear tres promesas con diferentes tiempos de resolución/rechazo
const promesa1 = crearPromesa(1000);  // Resuelta después de 1 segundo
const promesa2 = crearPromesa(2000); // Rechazada después de 2 segundos
const promesa3 = crearPromesa(3000,true);  // Resuelta después de 3 segundos
// Esperar a que todas las promesas se completen y luego mostrar los resultados
Promise.allSettled([promesa1, promesa2, promesa3])
    .then(resultados => {
        console.log('Todas las promesas han sido procesadas:');
        resultados.forEach(({ status, value, reason }) => 
            console.log(`Promesa ${status}:`, status === "fulfilled" ? value : reason)
        );
    })
    .catch(error => console.error("Hubo un error:", error));
//     Explicación
// Funciones de Creación de Promesas:

// crearPromesaResuelta: Crea una promesa que se resuelve después de un tiempo específico.
// crearPromesaRechazada: Crea una promesa que se rechaza después de un tiempo específico.
// Creación de Promesas:

// promesa1 se resuelve después de 1 segundo.
// promesa2 se rechaza después de 2 segundos.
// promesa3 se resuelve después de 3 segundos.
// Uso de Promise.allSettled:

// Espera a que todas las promesas se hayan completado (resueltas o rechazadas).
// Muestra el estado de cada promesa en la consola, indicando si se resolvió o se rechazó.
// Este código asegura que cada promesa se maneje correctamente y que se imprima el estado de todas las promesas después de su ejecución.