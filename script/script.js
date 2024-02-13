// variaveis
const numeroCapitulo = 10;
let taTocando = 0;
let capituloAtual = 1;

const audioCapitulo = document.querySelector("#audioCapitulo");

const numCapitulo = document.querySelector("#numCapitulo");

const bntPlayPause = document.querySelector("#playPause");
const playPauseP = document.querySelector("#playPauseP");
const PlayPauseI = document.querySelector("#iPlayPause");

const bntVoltar = document.querySelector("#voltar");
const bntVoltar15s = document.querySelector("#voltar15s");

const bntAvancar = document.querySelector("#avancar");
const bntAvancar15s = document.querySelector("#avancar15s")


// variaveis functions
const play = ()=> {
    audioCapitulo.play();
    taTocando = 1;

    PlayPauseI.classList.remove('bi-play-circle-fill');
    PlayPauseI.classList.add('bi-pause-circle-fill');

    playPauseP.innerHTML = 'Pausar';
}

const pause = ()=> {
    audioCapitulo.pause();
    taTocando = 0;
    PlayPauseI.classList.remove('bi-pause-circle-fill');
    PlayPauseI.classList.add('bi-play-circle-fill');

    playPauseP.innerHTML = 'Play';
}


// functions
const playPause = () => {
    if (taTocando === 0) {
        play();
    }else {
        pause();
    }
};

const proxAudio = () => {
    if (capituloAtual === numeroCapitulo) {
        capituloAtual = 1;
    } else {
        capituloAtual = capituloAtual + 1;
    }

    audioCapitulo.src = `./books/${capituloAtual}.mp3`;
    numCapitulo.innerHTML = `Capítulo ${capituloAtual}`;
    play();
};

const voltarAudio = () => {
    if (capituloAtual === 1) {
        capituloAtual = 10;
    } else {
        capituloAtual = capituloAtual - 1;
    }

    audioCapitulo.src = `./books/${capituloAtual}.mp3`;
    numCapitulo.innerHTML = `Capítulo ${capituloAtual}`;
    play();
};

function avancarSegundos() {
    if (isFinite(audioCapitulo.currentTime + 15)){
        audioCapitulo.currentTime += 15;
    }
 
}

function retrocederSegundos() {
    if (isFinite(audioCapitulo.currentTime + 15)) {
        audioCapitulo.currentTime -= 15; 
    }

}


// advancedListener
bntPlayPause.addEventListener('click', playPause);
bntAvancar.addEventListener('click', proxAudio);
bntVoltar.addEventListener('click', voltarAudio);
bntVoltar15s.addEventListener('click', retrocederSegundos);
bntAvancar15s.addEventListener('click', avancarSegundos);

