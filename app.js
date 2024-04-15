const inputRojo=document.getElementById('red');
const inputVerde=document.getElementById('green');
const inputAzul=document.getElementById('blue');

const textoRojo=document.getElementById('texto-rojo');
const textoVerde=document.getElementById('texto-verde');
const textoAzul=document.getElementById('texto-azul');

let rojo=inputRojo.value;
let verde=inputVerde.value;
let azul=inputAzul.value;

textoRojo.innerText=rojo;
textoVerde.innerText=verde;
textoAzul.innerText=azul;

actualizarColor=(rojo,verde,azul)=>{
    const colorRGB=`rgb(${rojo},${verde},${azul})`;
    document.body.style.backgroundColor=colorRGB;
}

inputRojo.addEventListener('input',(e)=>{
    rojo=e.target.value;
    textoRojo.innerText=rojo;
    actualizarColor(rojo,verde,azul);
});

inputVerde.addEventListener('input',(e)=>{
    verde=e.target.value;
    textoRojo.innerText=verde;
    actualizarColor(rojo,verde,azul);
});

inputAzul.addEventListener('input',(e)=>{
    azul=e.target.value;
    textoRojo.innerText=azul;
    actualizarColor(rojo,verde,azul);
});