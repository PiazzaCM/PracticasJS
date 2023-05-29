//UNO
function obtenerSuma(arreglo) {
    let suma = 0;
    for (let i = 0; i < arreglo.length; i++) {
      suma += arreglo[i];
    }
    return suma;
  }
  
  let numeros = [8, 9, 7, 10, 8];
  console.log(obtenerSuma(numeros));  
  
  let otrosNumeros = [1, 2, 3, 7];
  console.log(obtenerSuma(otrosNumeros));  
  

  //DOS
  function obtenerPares(arreglo) {
    let numPares = [];
    for (let i = 0; i < arreglo.length; i++) {
      if (arreglo[i] % 2 === 0) {
        numPares.push(arreglo[i]);
      }
    }
    return numPares;
  }
  
  let num = [10, 9, 8, 6, 5];
  let pares = obtenerPares(num);
  console.log(pares);  

  //TRES
  function obtenerPromedioPonderado(nota, peso) {

    let sumaPond = 0;
    let sumaPesos = 0;
  
    for (let i = 0; i < nota.length; i++) {
      sumaPond += nota[i] * peso[i];
      sumaPesos += peso[i];
    }
  
    return sumaPond / sumaPesos;
  }
  
  let nota = [5, 6, 7, 8];
  let peso = [1, 2, 3, 4];
  let promedio = obtenerPromedioPonderado(nota, peso);
  console.log("El promedio ponderado es:", promedio);

  //CUATRO
  function obtenerMaximo(num) {

    let max = num[0];
    for (let i = 1; i < num.length; i++) {
      if (num[i] > max) {
        max = num[i];
      }
    }
    return max;
  }
  
  let arreglo = [8, 9, 10, 1];
  console.log(obtenerMaximo(arreglo)); 
  
  