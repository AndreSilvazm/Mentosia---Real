function garganta(){

    var gargs = document.getElementById('gargantapl')
    var audio1 = new Audio();
    var ggt = document.getElementById('ggtbt')

    
    audio1.src = "/Escuridao do luto/X2Download.com - Ana Carolina - Garganta (128 kbps).mp3";
    audio1.play();
    gargs.innerHTML = 'tocando garganta ana carolina'
    var count = 1
    ggt.onclick = function(){

        count++;

        if(count % 2 == 0){

            audio1.pause()
            audio1.currentTime = 0
        }

        else{

            audio1.play()
        }
    }

    
}


function estatus(){

    var ggt = document.getElementById('gargantapl')

    ggt.innerHTML = 'tocar garganta ana carolina'


}

function estatusout(){

    var ggt = document.getElementById('gargantapl')
    ggt.innerHTML = ''
}

function bete_balanço(){

    var gargs = document.getElementById('betebalançopl')
    var audio1 = new Audio();
    var btb = document.getElementById('btbbt')

    gargs.innerHTML = 'Tocando Bete balanço!'
    audio1.src = "X2Download.com - Barão Vermelho - Bete Balanço - Legendado_Letra (128 kbps).mp3";

    var count = 1
    btb.onclick = function(){

        count++;

        if(count % 2 == 0){

            audio1.pause()
            audio1.currentTime = 0
        }

        else{

            audio1.play()
        }
    }
    audio1.play();
}