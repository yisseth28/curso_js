//1. Crear una funcion que calcule la propina de una cuenta de restaurante 
//    (el total de la cuenta y el porcentaje de propina)
function calcularPropina() {
    const total = parseFloat(document.getElementById("total").value);
    const propina = parseFloat(document.getElementById("propina").value);
    const valorPropina = ((total * propina) / 100 );
    const totalConPropina = valorPropina + total;
    document.getElementById("resultado").innerHTML = "El total de la cuenta es: " + totalConPropina;
}