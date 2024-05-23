const operacionAsincronica = async (elemento) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Procesado: ${elemento}`);
            resolve(`Resultado de ${elemento}`);
        }, 1000); // Simula una operación asincrónica de 1 segundo
    });
};
// Función principal que procesa una lista de elementos uno por uno
const procesarLista = async (lista) => {
    for (const elemento of lista) {
        const resultado = await operacionAsincronica(elemento);
        console.log(resultado);
    }
};
// Lista de elementos a procesar
const listaDeElementos = ['Elemento1', 'Elemento2', 'Elemento3', 'Elemento4'];
// Llamar a la función principal
procesarLista(listaDeElementos)
    .then(() => console.log('Todos los elementos han sido procesados.'))
    .catch(error => console.error('Hubo un error:', error));
//     Función operacionAsincronica:
// Simula una operación asincrónica con setTimeout.
// Imprime y resuelve un mensaje después de 1 segundo.
// Función procesarLista:
// Es una función async que procesa una lista.
// Utiliza for...of y await para procesar cada elemento secuencialmente.
// Imprime el resultado de cada operación.
// Uso:
// Se define una lista de elementos.
// Se llama a procesarLista con la lista.
// Al finalizar, se imprime un mensaje indicando que todos los elementos han sido procesados.
// Este código procesa los elementos de la lista uno por uno de forma asincrónica.