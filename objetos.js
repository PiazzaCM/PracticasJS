//UNO
let producto = {
    nombre: "Producto",
    precio: 26,
    cantidad: 4
  };
  
  function calcularTotal(producto) {
    return producto.precio * producto.cantidad;
  }
  
  let totalPagar = calcularTotal(producto);
  console.log("Total a pagar:", totalPagar);
  

//DOS
let persona = {
    nombre: "Luis",
    edad: 25,
    profesion: "Medico"
  };
  
  function presentarPersona(persona) {
    console.log("Nombre: " + persona.nombre);
    console.log("Edad: " + persona.edad);
    console.log("Profesión: " + persona.profesion);
  }
  
  presentarPersona(persona);

  //TRES
  function esMayorEdad(persona) {
    return persona.edad >= 18;
  }
  
  let persona1 = {
    nombre: "Pedro",
    edad: 27,
    profesion: "veterinario"
  };
  
  let persona2 = {
    nombre: "Elisa",
    edad: 16,
    profesion: "Ninguna"
  };
  
  console.log(esMayorEdad(persona1));
  console.log(esMayorEdad(persona2)); 
  