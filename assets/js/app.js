var altura = 0
var largura = 0

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(altura, largura)
}

ajustaTamanhoPalcoJogo()

var posicaoX = Math.floor(Math.random() * largura) - 90;
var posicaoY = Math.floor(Math.random() * altura) - 90;

posicaoX = posicaoX < 0 ? 0 : posicaoX;
posicaoY = posicaoY < 0 ? 0 : posicaoY;

console.log(posicaoX, posicaoY);

// cria o elemento html
var mosca = document.createElement('img');
mosca.src = '/assets/img/mosca.png';
mosca.className = 'mosca';
mosca.style.left = posicaoX + 'px';
mosca.style.top = posicaoY + 'px';
mosca.style.position = 'absolute';

document.body.appendChild(mosca);
