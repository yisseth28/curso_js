//Comparar dos números y determinar si son iguales
n1=prompt("Ingresa el primer número")
n2=prompt("Ingresa el segundo número")

if(n1===n2){
    alert(`El numero ${n1} es igual a ${n2}`)
}else{
    alert(`El número ${n1} es diferente a ${n2}`)
}
    

//Identificar cual de dos números es el mayor
n1=prompt("Ingresa el primer número")
n2=prompt("Ingresa el segundo número")

if(n1==n2){
    alert(`los números ${n1} y ${n2} son iguales`)
}else if (n1>n2){
    alert(`El número ${n1} es mayor a ${n2}`)
}else{
    alert(`El número ${n1} es menor a ${n2}`)
}
    

//Decide si un número es par o impar
n1=prompt("Ingresar el número a analizar")
if(n1 % 2 == 0 ){
    alert(`El número ingresado ${n1}, es par`)
}else{
    alert(`El número ingresado ${n1}, es impar`)
}

//Clasificar los triangulos según sus lados
l1=prompt("Ingresar el lado1 del triangulo")
l2=prompt("Ingresar el lado2 del triangulo")
l3=prompt("Ingresar el lado3 del triangulo")

if((l1 == l2)  && (l2 == l3) || (l3==l1) && (l2==l3)){
    alert(`El triangulo es Equilatero ya que todos sus lados son iguales: ${l1}, ${l2}, ${l3}`)
}else if ((l2!=l3) && (l1!=l2) || (l1=!l2) && (l2!=l3)){
    alert(`El triangulo es Escaleno ya que todos sus lados son desiguales: ${l1}, ${l2}, ${l3}`)
}else{
    alert(`El triangulo es Isosceles ya que 2 de sus lados son iguales y uno desigual: ${l1}, ${l2}, ${l3}`)
}    
    
//Edad de jubilación, determina si una persona puede jubilarse o no
//Hombres: haber cumplido 62 años. Mujeres: Haber cumplido 57 años.
genero=prompt("Ingresar el genero de la persona a jubilar: hombre / mujer")
edad=prompt("Ingresar edad de la persona")
if(genero==='mujer'){
}else if(edad>=57){ 
    alert(`La persona cuyo genero es: ${genero}, si se puede jubilar ya que su edad es: ${edad}`)   
}else{
    alert(`La persona cuyo genero es: ${genero}, no se puede jubilar ya que su edad es: ${edad}`)
}
if(genero ==='hombre'){
}else if(edad>=62){ 
    alert(`La persona cuyo genero es: ${genero}, si se puede jubilar ya que su edad es: ${edad}`)   
}else{
    alert(`La persona cuyo genero es: ${genero}, no se puede jubilar ya que su edad es: ${edad}`)
}

//Dia laboral: determina si es día laboral o fin de semana

fecha=prompt("Dígita el día que quieres averiguar")
fecha_conv= new Date(fecha)
console.log(fecha)
    
