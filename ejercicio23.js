async function leerArchivoJSON() {
    try {
        // Realizar la llamada al archivo local
        const response = await fetch('datos18.json');

        // Verificar si la respuesta es exitosa
        if (!response.ok) {
            throw new Error('Error al cargar el archivo');
        }

        // Convertir la respuesta a JSON
        const data = await response.json();

        // Hacer algo con los datos, por ejemplo, imprimirlos en la consola
        console.log('Datos cargados con éxito:', data);
    } catch (error) {
        // Manejar el error mostrando un mensaje en la consola
        console.error('Error al cargar el archivo JSON:', error.message);
    }
}

// Llamar a la función para cargar el archivo JSON
leerArchivoJSON();
// La expresión response.ok es una propiedad de la interfaz Response en JavaScript, que indica si 
//la respuesta de la solicitud HTTP fue exitosa o no. Si el valor de response.ok es true, significa que la solicitud
// se completó correctamente y el estado de la respuesta está en el rango de 200-299. Si el valor es false, 
//indica que la solicitud no se completó correctamente.