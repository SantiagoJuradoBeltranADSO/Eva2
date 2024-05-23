// Crear el objeto proxy para la validación de valores de propiedades
const proxyHandler = {
    set: function (obj, prop, value) {
        // Realizar la validación según la propiedad
        switch (prop) {
            case "numeric":
                if (typeof value !== "number" || isNaN(value)) {
                    console.error(`Error: el valor "${value}" no cumple con la regla de validación para numeric`);
                    return false;
                }
                break;
            case "alphanumeric":
                if (!/^[a-zA-Z0-9]+$/.test(value)) {
                    console.error(`Error: el valor "${value}" no cumple con la regla de validación para alphanumeric`);
                    return false;
                }
                break;
            case "email":
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    console.error(`Error: el valor "${value}" no cumple con la regla de validación para email`);
                    return false;
                }
                break;
            case "date":
                if (!/^\d{2}-\d{2}-\d{4}$/.test(value)) {
                    console.error(`Error: el valor "${value}" no cumple con la regla de validación para date`);
                    return false;
                }
                break;
            default:
                // Validar que no haya espacios en blanco al inicio o al final
                if (typeof value === "string" && (value.trim() !== value)) {
                    console.error("Error: no se permiten espacios en blanco al inicio o al final del valor");
                    return false;
                }
        }

        // Si pasa todas las validaciones, establecer el valor en la propiedad
        obj[prop] = value;
        return true;
    }
};

// Crear el objeto con el proxy
const proxyObj = new Proxy({}, proxyHandler);

// Asignaciones que cumplen con las reglas de validación
proxyObj.numeric = 123;
proxyObj.alphanumeric = "abc123";
proxyObj.email = "correo";
proxyObj.date = "25-05-2024";

// Mostrar el objeto
console.log(proxyObj);

// Se crea un objeto proxy (proxyObj) con un manejador (proxyHandler) que define una función set para manejar las asignaciones de propiedades.

// En la función set, se valida el valor según el tipo de propiedad (numeric, alphanumeric, email, date) utilizando expresiones regulares.

// Si el valor no cumple con las reglas de validación, se muestra un mensaje de error en la consola y se evita la asignación del valor.

// Se realizan algunas asignaciones de valores al objeto proxy para demostrar cómo se aplican las reglas de validación.

// Se muestra el objeto proxy en la consola para verificar los resultados de las asignaciones y cómo se aplicaron las reglas de validación.