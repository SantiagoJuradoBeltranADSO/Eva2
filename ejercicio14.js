// Definir una función asincrónica
async function operacionAsincronica() {
    // Esperar 1 segundo
    await new Promise((resolve) => setTimeout(resolve, 1000));
  
    // Devolver la cadena "Operación completada"
    return "Operación completada";
  }
  
  // Función para llamar a la función asincrónica y manejar el resultado
  async function ejecutarOperacion() {
    const resultado = await operacionAsincronica();
    console.log(resultado);
  }
  
  // Llamar a la función para demostrar su uso
  ejecutarOperacion();


//   DEFINIR función asincrónica operacionAsincronica
//     ESPERAR 1 segundo usando await y setTimeout envuelto en una promesa
//     DEVOLVER la cadena "Operación completada"
// FIN DEFINIR

// DEFINIR función asincrónica ejecutarOperacion
//     LLAMAR a operacionAsincronica y esperar su resultado usando await
//     IMPRIMIR el resultado
// FIN DEFINIR

// LLAMAR a ejecutarOperacion para demostrar el uso de la función