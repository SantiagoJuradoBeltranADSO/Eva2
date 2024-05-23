    // Definir la ruta al archivo JSON
    const filePath = 'datos19.json';

    // Función para leer y mostrar datos JSON
    async function leerYMostrarDatosJson(filePath) {
        try {
            // Obtener el contenido del archivo JSON de manera asincrónica
            const response = await fetch(filePath);
            
            // Verificar si la respuesta es exitosa
            if (!response.ok) {
                throw new Error('Error al cargar el archivo JSON');
            }

            // Convertir el contenido JSON en un objeto JavaScript
            const datos = await response.json();
            
            // Obtener la lista de usuarios
            const usuarios = datos.usuarios || [];
            
            // Iterar sobre cada usuario y mostrar la información
            usuarios.forEach(usuario => {
                const nombre = usuario.nombre;
                const edad = usuario.edad;
                const ciudad = usuario.ciudad;
                console.log(`Nombre: ${nombre}, Edad: ${edad}, Ciudad: ${ciudad}`);
            });
        } catch (error) {
            console.error('Error al leer o procesar el archivo JSON:', error);
        }
    }

    // Ejecutar la función para leer y mostrar los datos JSON
    leerYMostrarDatosJson(filePath);