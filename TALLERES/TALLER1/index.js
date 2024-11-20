//Pide al usuario que ingrese el año de nacimiento, el programa deberá estimar que edad tiene el usuario aproximadamente luego muéstralo en pantalla. (el año actual es 2024)
fec_nac=prompt("Ingrese por favor su año de nacimiento");
edad=(2024-fec_nac);
nombre=prompt("Ingrese por favor su nombre");
alert(`Hola ${nombre}, su edad actual es: ${edad}`);

//Solicita al usuario que ingrese su edad y verifica si es elegible para conducir un auto en su país (generalmente a partir de los 16 años). Imprime un mensaje que indique si es elegible o no.
nombre=prompt("Por favor ingrese su nombre");
edad=prompt("Por favor ingrese su edad");
if(edad >= 16){
    alert(`Hola, ${nombre}. Ud si es elegible para conducir`);
}else{
    alert(`Hola, ${nombre}. Ud no es elegible para conducir`);
}

//Del ejercicio anterior agregar una validación si la persona no esta habilitada para conducir si es mayor de edad 85 años
nombre=prompt(`Por favor ingrese su nombre`);
edad=prompt(`Por favor ingrese su edad`);
if(edad <=16 || edad >=85){
    alert(`Hola, ${nombre}. Ud no es elegible para conducir`);
}else{
    alert(`Hola, ${nombre}. Ud si es elegible para conducir`);
}

/*Reto: Ejercicio: Cajero Automático
Descripción: En este ejercicio, vas a implementar un programa en JavaScript que simule el funcionamiento básico de un cajero automático.
1.	Objetivo: El programa debe solicitar al usuario la cantidad de dinero que desea retirar.
2.	Condiciones:
○	El cajero debe entregar la menor cantidad de billetes posible.
○	Las denominaciones de billetes disponibles en el cajero son:
■	100 mil
■	50 mil
■	20 mil
■	10 mil

3.	Salida esperada:
Imprime en la consola cuántos billetes de cada denominación se necesitan para entregar el monto solicitado por el usuario.
Ejemplo de funcionamiento:
Si el usuario ingresa 280,000, el programa debería imprimir en consola:
Copiar código
Billetes de 100,000: 2
Billetes de 50,000: 1
Billetes de 20,000: 1
Billetes de 10,000: 1 
*/

valor= parseFloat(prompt("Ingresa el valor a retirar"));
const d1=parseFloat(100000);
const d2=parseFloat(50000);
const d3=parseFloat(20000);
const d4=parseFloat(10000);
residuo=Math.trunc(valor/d1);

if(residuo >= 0){
    console.log('El valor tiene: '+ residuo +' billetes de denominación:: ' + d1);
    resultado=(valor-(d1*residuo));
}else{
    console.log('El valor no tiene: billetes de ' + d1);
    resultado=valor;
}
residuo1=Math.trunc(resultado/d2);
if(residuo1 >= 0){
    console.log('El valor tiene: '+ residuo1 +' billetes de denominación: ' + d2);
    resultado1=(resultado-(d2*residuo1));
}else{
    console.log('El valor no tiene billetes de denominación:' + d2);
    resultado1=residuo1;
}
residuo2=Math.trunc(resultado1/d3);
if(residuo2 >= 0){
    console.log('El valor tiene: ' + residuo2 +' billetes de denominación: ' + d3);
    resultado2=(resultado1-(d3*residuo2));
}else{
    console.log('El valor no tiene billetes de '+d3 );
}
residuo3=Math.trunc(resultado2/d4);
if(residuo3 >=0){
    console.log('El valor tiene: ' + residuo3 + ' billetes de denominación: ' + d4);
    resultado3=(resultado2-(d4*residuo3));
}else{
    console.log('El valor no tiene billetes de denominación: ' + d4);
}