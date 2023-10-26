function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play('');
}




document.querySelector('.tecla_pom').onclick = tocaSomPom  ;
//document.querySelector('.tecla_pom').onclick = toca
document.querySelectorAll('.tecla')

const listaDeTeclas

function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play('');
}

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = tocaSomPom;

let contador = 0;

while(contador < 9){

const instrumento = listaDeTeclas[contador].classList[1];

const tecla = listaDeTeclas[contador].onclick = function(){
    tocaSom('#som_tecla_clap');
    };

    contador = contador + 1;
}

listaDeTeclas[1].onclick = tocaSomClap;
listaDeTeclas[2].onclick = tocSomTim;
listaDeTeclas[3].onclick = tocaSomPuff;