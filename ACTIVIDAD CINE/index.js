cilindrodia=8
cilindror=8/2
cilindroalt=15
rectangulolar=12
rectanguloan=8
rectanguloal=10
conorad=6
conoal=12

volcil=3.1416*(cilindror**2)*cilindroalt
volrec=rectanguloal * rectangulolar * rectanguloan
volcono=1/3*3.1416*(conorad**2)*conoal

alert(`El volumen del cilindro corresponde a: ${volcil}`)
alert(`El volumen del empaque rectangular corresponde a: ${volrec}`)
alert(`El volumen del cono corresponde a: ${volcono}`)

if(volcil>volrec){
        alert(`La mejor opcion para comprar es la presentacion en cilindro con un vol: ${volcil}`)
    } if (volrec>volcono){
        alert(`La mejor opcion para comprar es la presentación en rectangulo con un volumen de : ${volrec}`)
}else{
    alert(`La mejor opcion para comprar es la presentación en cono con un volumen de: ${areacono}`)
}


        