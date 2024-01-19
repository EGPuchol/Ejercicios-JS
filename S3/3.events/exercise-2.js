let myInput = document.querySelector ('input[type="text"]');

myInput.addEventListener('focus', function(){
    console.log(myInput.value);
})

// TENGO QUE CLICKAR FUERA Y LUEGO OTRA VEZ EN LA CAJA PARA QUE ME IMPRIMA LO ESCRITO (NO SÉ SI ES ASÍ O HAY QUE AÑADIR ALGO MÁS)