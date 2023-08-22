// Arreglo con líneas de código de Javascript, los Procesos tomrán líneas de aquí aleatoriamente.
const lineasDeCodigoArreglo = ["a = 1 + 2;","console.log(1+2);","console.log(a)","b = 3 + 4;",
"console.log(3+4);","c = 5 + 6;","console.log(5+6);","console.log(c)"];

// Esta función realiza el algoritmo de RoundRObin de una forma simplifica, lo inicializa teniendo el parámetro
// de procesos que se realiza una vez que el usuario haya digitado el número de procesos a realizar.
function simulacionRoundRobin(procesos){

      while (procesos.length > 0) { // Comparamos que aún haya procesos por ejecutar.
        let procesoActual = procesos.shift(); // Eliminamos y retornamos el primer elemento del array procesos.
  
        // Se escribe el Proceso Actual y en seguida su línea de código que corresponde a ese turno.
        document.write(`${procesoActual.nombre} <br>`); // El nombre del proceso será Proces + su número correspondiente.
        // procesoActual.LineasDeCodigo contiene todas las líneas del código de ese proceso, mientras que 
        //procesoActual.numeroLineaActual es el índice de la línea actual.
        document.write(`Línea de código: ${procesoActual.lineasDeCodigo[procesoActual.numeroLineaActual]} <br>`);
        procesoActual.numeroLineaActual++; // Se pasa a la siguiente línea de código del proceso.

        // Pregunta si el número de línea actual es menor al total de líneas que tiene ese proceso.
        if (procesoActual.numeroLineaActual < procesoActual.lineasDeCodigo.length) {
          procesos.push(procesoActual); // Si es vderdadero, entonces significa que aún faltan procesos por ejecutar.
          // Por lo que se le hará un push para meter el proceso actual de nuevo al arreglo de procesos.
          // De esta forma se volverá a ejecutar una vez hayan pasado los procesos faltantes.
        } else {
          document.write(`<br> ${procesoActual.nombre} <br> Terminado <br>`); 
        } // En caso de que se haya llegado al mismo número de líneas que tiene nuestro proceso, se pasará
        // a un else donde se escribirá que dicho proceso habrá Terminado, ya que no queda más código en él.
        document.write('<br>'); // Salto de línea.
        procesoActual++; // Se incremente el número del proceso actual para pasar al siguiente.
      }
    }
  
// Función que guarda el nombre, las líneas de código y el número de líneas de código (objetos) de un proceso.
function Proceso(nombre,lineasDeCodigo){
  this.nombre = nombre; // E; nombre del proceso (1, 2 o 3...)
  this.lineasDeCodigo = lineasDeCodigo; // Lás líneas de código que guarda el proceso.
  this.numeroLineaActual = 0; // La línea actual del proceso (basada en su total de objetos guardados).
}

// Esta función asigna una línea de código aleatoria a un Proceso.
function lineaDeCodigoAleatoria(longitudArreglo){
  let numeroRandom = Math.floor(Math.random() * longitudArreglo);
  return numeroRandom;
}

  // Esta función crea los procesos dado el número de procesos que haya elegido el usuario.
  function crearProcesos(totalDeProcesos) {
    let procesos = []; // Se vrea un array de procesos.
    for (let i = 1; i <= totalDeProcesos; i++) {
      let lineasDeCodigo = []; // Se crea un array donde se guardarán las líneas de código del proceso.
      for (let j = 0; j < 3; j++) { // Cada proceso contendrá en total unas 3 líneas de código.
        let numero = lineaDeCodigoAleatoria(lineasDeCodigoArreglo.length) // Se llama a una función que
        // proporcionará un úmero que será la posición de la línea de código que se guardaráa en el proceso.
        lineasDeCodigo.push(lineasDeCodigoArreglo[numero]);
      } // Se creará usando la función Proceso, un proceso y se le asignará su línea de código correspondiente.
      let proceso = new Proceso(`Proceso ${i}`, lineasDeCodigo);// Al momento de hacer un nuevo proceso se le da su nombre de una vez.
      procesos.push(proceso); // Guardamos el proceso actual en nuestro arreglo de procesos.
      // Nuestro proceso para este punto ya tendrá su número que lo identifica, así como sus líneas de código aleatorias.
    }
    return procesos; // Retorna el arreglo de procesos.
  }
  
  let totalDeProcesos = parseInt(prompt("Ingresa el número de procesos:")); // El Usuario ingresa el número de procesos que desea.
  let procesos = crearProcesos(totalDeProcesos); // Se crean los procesos y se guardan en su variable.

  simulacionRoundRobin(procesos); // Se inicializa la simulación del algoritmo.