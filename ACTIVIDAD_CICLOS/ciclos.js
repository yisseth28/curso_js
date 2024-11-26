/*
EJERCICIOS:
1. Imprimir los numero del 0 al 30
2. Crear un menu de comida saludable ["avena", "arroz integral", "leche"] (agregar mas elementos)
    imprimir los elementos del menu, en mayuscula con un foreach
3. crear una lista con 20 numeros, y calcular el promedio de la lista (usando bucles)
4. definir una lista de estudiantes, con la estructura de nombre, y promedio (1 a 100) , 
    aplicar un filtro para seleccionar los estudiantes que estan con notas superiores al promedio, 
    (se debe calcular el promedio del grupo general) 
*/

//1. Imprimir los numero del 0 al 30
for (let i = 0; i <= 30; i++) {
    console.log(i);
}

//2. Crear un menu de comida saludable ["avena", "arroz integral", "leche"] (agregar mas elementos)
//    imprimir los elementos del menu, en mayuscula con un foreach
const menu = ["avena", "arroz integral", "leche", "pollo", "pescado", "verduras", "frutas"];
menu.forEach(element => {
    console.log(element.toUpperCase());
});

//3. crear una lista con 20 numeros, y calcular el promedio de la lista (usando bucles)
const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let suma = 0;
for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
}
console.log(suma / lista.length);

//4. definir una lista de estudiantes, con la estructura de nombre, y promedio (1 a 100) , 
//    aplicar un filtro para seleccionar los estudiantes que estan con notas superiores al promedio, 
//    (se debe calcular el promedio del grupo general) 
const estudiantes = [
    {nombre: "Juan", promedio: 85},
    {nombre: "Maria", promedio: 90},
    {nombre: "Pedro", promedio: 78},
    {nombre: "Ana", promedio: 55},
    {nombre: "Luis", promedio: 12},
    {nombre: "Laura", promedio: 10},
    {nombre: "Carlos", promedio: 20},
    {nombre: "Sofia", promedio: 95},
    {nombre: "Jorge", promedio: 30},
    {nombre: "Miguel", promedio: 40},
    {nombre: "Daniela", promedio: 50},
    {nombre: "Camila", promedio: 60},
    {nombre: "Andres", promedio: 70},
];
const promedio = 60;
const estudiantesAprobados = estudiantes.filter(estudiante => estudiante.promedio > promedio);
console.log(estudiantesAprobados);
let prom_grupo = 0;
for (let i = 0; i < estudiantes.length; i++) {
    prom_grupo += estudiantes[i].promedio;
}
console.log(prom_grupo / estudiantes.length);
