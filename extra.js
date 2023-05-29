//UNO
function verificarNumero() {
    let numero = parseFloat(prompt("Ingrese un numero:"));
  
    if (numero > 0) {
      return "El número es positivo";
    } else if (numero < 0) {
      return "El número es negativo";
    } else {
      return "El número es 0";
    }
  }
  
  let mensaje = verificarNumero();
  console.log(mensaje);
  
  //DOS
  function primo(num) {
    if (num <= 1) {
      return false;
    }
  
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  function verificar() {
    let num = parseInt(prompt("Ingrese un numero:"));
  
    if (primo(num)) {
      return "El número es primo";
    } else {
      return "El número no es primo";
    }
  }
  
  let mensaje = verificar();
  console.log(mensaje);

  
  //TRES
  function celsiusFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  function fahrenheitCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
  }
  
  function convertirTemperatura() {
    let temp = parseFloat(prompt("Ingrese la temperatura:"));

    let unidad = prompt("Ingrese aque unidad de temperatura desea convertir: 1) Convertir a Fahrenheit O 2) Convertir a Celsius");
  
    if (unidad.toUpperCase() === '1') {
      let fahrenheit = celsiusFahrenheit(temp);
      return temp + " grados Celsius equivale a " + fahrenheit + " grados Fahrenheit";
    } else if (unidad.toUpperCase() === '2') {
      let celsius = fahrenheitCelsius(temp);
      return temp + " grados Fahrenheit equivale a " + celsius + " grados Celsius";
    } else {
      return "Unidad de temperatura inválida. Ingrese 1 para Celsius o 2 para Fahrenheit";
    }
  }
  
  let resultado = convertirTemperatura();
  console.log(resultado);

  //CUATRO
  function calcularTotalCompra() {
    let total = 0;
    let precioProducto = '';
  
    while (precioProducto.toLowerCase() !== 'total') {
      precioProducto = prompt("Ingrese el precio del producto o escriba 'total' si quieres saber el total de la compra");
  
      if (precioProducto.toLowerCase() !== 'total') {
        let precio = parseFloat(precioProducto);
        
   total += precio;
        }
      }
  
    return total;
  }
  
  let totalCompra = calcularTotalCompra();
  console.log("El total de la compra es: $" + totalCompra);
