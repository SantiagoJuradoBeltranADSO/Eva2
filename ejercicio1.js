let contador = parseInt(prompt("inicio"));
let fin = parseInt(prompt("fin"));

if (!isNaN(contador) && !isNaN(fin)) {
  const imprimirSiguiente = () => {
    if (contador <= fin) {
      console.log(contador);
      contador++;
    }
  };
//   INICIO
//   contador <- Convertir a número el valor ingresado por el usuario para "inicio"
//   fin <- Convertir a número el valor ingresado por el usuario para "fin"

//   SI contador ES número Y fin ES número ENTONCES
//     Función imprimirSiguiente
//       SI contador ES menor o igual a fin ENTONCES
//         Mostrar en consola contador
//         Incrementar contador en 1
//       FIN SI
//     FIN Función

//     CADA 1000 milisegundos LLAMAR imprimirSiguiente
//   SINO
//     Mostrar mensaje "Error: Debes ingresar números válidos para el inicio y el fin."
//   FIN SI
// FIN

  setInterval(imprimirSiguiente, 1000);
} else {
  alert("Error: Debes ingresar números válidos para el inicio y el fin.");
}


let i = 0;

setTimeout(() => alert(i), 100);

for (let j = 0; j < 100000000; j++) { // el set time out se ejecuta al tiempo que el for por lo que el valor de "i" aumenta junto con el contador del for 
  i++;                                //Rta: c) Al comienzo del bucle.
                                      //¿Qué va a mostrar alert()? i=j
}