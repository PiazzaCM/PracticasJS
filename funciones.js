
//UNO
function esMayorEdad(edad) {
    if (edad >= 18) {
      return true;
    } else {
      return false;
    }
  }
  
  let edad1 = parseInt(prompt("Ingrese la primera edad:"));
  let resultado1 = esMayorEdad(edad1);
  console.log(resultado1);
  
  let edad2 = parseInt(prompt("Ingrese la segunda edad:"));
  let resultado2 = esMayorEdad(edad2);
  console.log(resultado2);

//DOS
function calcularAreaRectangulo(base, altura) {
    let area = base * altura;
    return area;
  }
  let base = parseInt(prompt("Ingrese la base:"));;
  let altura = parseInt(prompt("Ingrese la altura"));
  let areaRectangulo = calcularAreaRectangulo(base, altura);
  console.log("El área del rectángulo es: " + areaRectangulo);

  //TRES
  function esPalindromo(cadena) {
    return cadena === cadena.split('').reverse().join('');
  }
  
  let cadena1 = prompt("Ingrese la primera palabra:");
  console.log(esPalindromo(cadena1));
  
  let cadena2 = prompt("Ingrese la segunda palabra:");
  console.log(esPalindromo(cadena2));

  //CUATRO
  function numeroAleatorio() {
    return Math.floor(Math.random() * 10) + 1;
  }
  
  console.log(numeroAleatorio()); 