//1. Crea un programa que retorme la operación contraria a la que ingrese el usuario
user=prompt("Por favor ingrese su operación: true o false")
rta=user== 'true'
if (rta === 'true'){
    alert(`La operación contraria a la que usted ha ingresado es: ${!rta}`)
}
    alert(`La operación contraria a la que usted ha ingresado es: ${!rta}`)

//2. Crear un programa en js que le solicite al usuario la edad, el programa debe de validar si la persona es mayor de edad o no
edad=prompt('Ingresa tu edad')
nombre=prompt('Ingresa tu nombre')
if(edad >= 18){
    alert(`${nombre}, tu edad es ${edad} y eres mayor de edad`)
}else{
    alert(`${nombre}, tu edad es ${edad} y eres menor de edad`)
}

/* 3. Evalúa la siguiente expresión de lógica:
P = true
Q = false

a que equivale 
- (P o no Q)
- (no P o no (Q y P))
*/
//EN CONSOLA

P=true
Q=false

P || !Q
!P || !(Q && P)  