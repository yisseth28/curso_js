//1) Definir un objeto persona con datos de ustedes  mismos. este objeto debe tener los atributos de nombre, apellido, edad, idiomas que hablan, y 3 atributos más.

persona = {
    "nombre": "Andrea",
    "apellido": "Zarate",
    "edad": 36,
    "estado_civil": "Union libre",
    "profesion": "Ingeniera de sistemas",
    "hijos": false,

}

//2) Definir un ingreso de datos, almacenando el data ingresado en una variable y presentarlo en la consola.
fecha_nac = prompt('Ingrese su fecha de nacimiento')
//console.log("Usted nació el:", fecha_nac);
alert(`Usted nació el: ${fecha_nac}`)


// 3) crear un programa que solicite al usuario la edad y responda en que año aproximadamente nació 
nombre=prompt("Por favor ingrese su nombre")
edad=prompt("Por favor ingrese su edad")
fecha_act= new Date()
anio=fecha_act.getFullYear()
mi_anio=anio-edad
alert(`Hola, ${nombre}, tu naciste en el año: ${mi_anio}`)