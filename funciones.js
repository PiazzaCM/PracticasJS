
//UNO
function esMayorEdad(edad) {
    if (edad>=18) {
    return true;
    } else { 
    return false;
    }
    }
    let edad1 = 18;
    let resultado1= esMayorEdad(edad1);
    console.log(resultado1);
    let edad2 = 17;
    let resultado2= esMayorEdad(edad2);
    console.log(resultado2);

//DOS
function calcularAreaRectangulo(base, altura) {
    let area = base * altura;
    return area;
  }
  let base = 10;
  let altura = 6;
  let areaRectangulo = calcularAreaRectangulo(base, altura);
  console.log("El área del rectángulo es: " + areaRectangulo);

  //TRES
 function esPalindromo(cadena) {
     cadena = cadena.replace(/\s/g, '').toLowerCase();
     return cadena === cadena.split('').reverse().join('');
}

console.log(esPalindromo("radar")); 
console.log(esPalindromo("prueba"));   



  //CUATRO
  function numeroAleatorio() {
    return Math.floor(Math.random() * 10) + 1;
  }
  
  console.log(numeroAleatorio()); 