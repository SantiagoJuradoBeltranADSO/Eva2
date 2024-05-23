// Función para cargar el archivo JSON, filtrar los datos y mostrar los resultados en la consola
function cargarYFiltrarJSON() {
  // Realizar una llamada a un archivo local usando fetch
  fetch('datos18.json')
      .then(response => {
          // Verificar si la respuesta es exitosa
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          // Convertir la respuesta a JSON
          return response.json();
      })
      .then(data => {
        // Acceder al array de usuarios dentro de data
        const usuarios = data.usuarios;
        // Filtrar los datos para mostrar solo los nombres que comiencen con "A"
        const filtrados = usuarios.filter(item => item.nombre.startsWith('A'));
        const filtrados2 = usuarios.filter(item => item.ciudad.startsWith('M'));
        // Mostrar los datos filtrados en la consola
        console.log(filtrados, filtrados2);
    })
      .catch(error => {
          // Manejar cualquier error que ocurra
          console.error('Hubo un problema con la operación de fetch:', error);
      });
}

// Llamar a la función para demostrar su uso
cargarYFiltrarJSON();

//   DEFINIR función cargarYFiltrarJSON
//     LLAMAR a fetch con 'datos.json'
//     ENTONCES (then) con response
//         SI response.ok es falso
//             LANZAR un error
//         FIN SI
//         CONVERTIR response a JSON y devolverlo
//     ENTONCES (then) con data
//         FILTRAR data para incluir solo los elementos cuyos nombres empiezan con 'A'
//         IMPRIMIR los datos filtrados en la consola
//     ATRAPAR (catch) cualquier error
//         IMPRIMIR el error en la consola
//     FIN ATRAPAR
// FIN DEFINIR

// LLAMAR a cargarYFiltrarJSON para demostrar su uso