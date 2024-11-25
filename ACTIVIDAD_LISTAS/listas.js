/*
EJERCICIO
1. definir una lista de almenos 5 elementos con verduras
2. agregar 2 verduras nuevas, una al principio. y otra al final de la lista
3. ordenar la lista
4. eliminar el ultimo elemento
5. crear una nueva lista con las verduras en mayuscula
6. imprimir la lista
*/
const verduras=["lechuga", "tomate", "cebolla", "pimiento", "zanahoria"];
verduras.unshift("rugula");
verduras.push("apio");
verduras.sort();
verduras.pop();
const verdurasMayusculas=verduras.map(verduras=>verduras.toUpperCase());
console.log(verdurasMayusculas);


