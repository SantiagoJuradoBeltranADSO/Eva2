// Objeto de destino (target)
const targetObject = {
    nombre: 'Juan',
    edad: 30
};

// Manejadores (handlers)
const handlers = {
    // Manejador para la lectura de propiedades
    get: function(target, property, receiver) {
        console.log(`Leyendo la propiedad "${property}"`);
        return Reflect.get(target, property, receiver);
    },
    // Manejador para la escritura de propiedades
    set: function(target, property, value, receiver) {
        console.log(`Estableciendo la propiedad "${property}" a ${value}`);
        return Reflect.set(target, property, value, receiver);
    }
};

// Crear el objeto Proxy
const proxyObject = new Proxy(targetObject, handlers);

// Usar el objeto Proxy
console.log(proxyObject.nombre); // Lectura de propiedad
proxyObject.edad = 35; // Escritura de propiedad