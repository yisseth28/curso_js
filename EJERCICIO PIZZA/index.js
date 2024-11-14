pg=45
pm=30
pp=25

alert(`La pizza pequeña tiene un diametro de: ${pp} cm`)
alert(`La pizza mediana tiene un diametro de: ${pm} cm`)
alert(`La pizza grande tiene un diametro de: ${pg} cm`)

areap=3.1416*(25*25)
aream=3.1416*(30*30)
areag=3.1416*(45*45)

alert(`El area de la pizza pequeña es: ${areap}`)
alert(`El area de la pizza mediana es: ${aream}`) 
alert(`El area de la pizza grande es: ${areag}`)

if(areap>aream){
        alert(`La mejor opcion para compartir con los 6 amigos es la pizza pequeña con: ${areap}`)
    } if (aream>areag){
        alert(`La mejor opcion para compartir con los 6 amigos es la pizza mediana con: ${aream}`)
}else{
    alert(`La mejor opcion para compartir con los 6 amigos es la pizza grande con: ${areag}`)
}
        

        