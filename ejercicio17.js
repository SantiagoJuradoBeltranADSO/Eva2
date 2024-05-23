// Función para cargar el archivo JSON y mostrar los datos en la consola
function cargarYMostrarJSON() {
    // Realizar una llamada a un archivo local usando fetch
    fetch('datos19.json')
      .then(response => {
        // Verificar si la respuesta es exitosa
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // Convertir la respuesta a JSON
        return response.json();
      })
      .then(data => {
        // Mostrar los datos en la consola
        console.log(data);
      })
      .catch(error => {
        // Manejar cualquier error que ocurra
        console.error('Hubo un problema con la operación de fetch:', error);
      });
  }
  
  // Llamar a la función para demostrar su uso
  cargarYMostrarJSON();


//   DEFINIR función cargarYMostrarJSON
//     LLAMAR a fetch con 'datos.json'
//     ENTONCES (then) con response
//         SI response.ok es falso
//             LANZAR un error
//         FIN SI
//         CONVERTIR response a JSON y devolverlo
//     ENTONCES (then) con data
//         IMPRIMIR data en la consola
//     ATRAPAR (catch) cualquier error
//         IMPRIMIR el error en la consola
//     FIN ATRAPAR
// FIN DEFINIR
// LLAMAR a cargarYMostrarJSON para demostrar su uso
