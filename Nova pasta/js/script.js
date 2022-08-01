var letra = "X"

function joga(celula){
    celulaclicada = document.getElementById(celula).innerHTML;
    if (celulaclicada == "X" || celulaclicada == "O"){
        alert("Este quadrado já foi escolhido.");
    }else{
        document.getElementById(celula).innerHTML = letra;
        if (letra == "X"){
            letra = "O";
        }else{
            letra = "X";
        }
    }
}

function verifica(){
    c11 = document.getElementById('cell11').innerHTML;
    c12 = document.getElementById('cell12').innerHTML;
    c13 = document.getElementById('cell13').innerHTML;
    c21 = document.getElementById('cell21').innerHTML;
    c22 = document.getElementById('cell22').innerHTML;
    c23 = document.getElementById('cell23').innerHTML;
    c31 = document.getElementById('cell31').innerHTML;
    c32 = document.getElementById('cell32').innerHTML;
    c33 = document.getElementById('cell33').innerHTML;
    if (((c11 != '') && (c12 != '') && (c13 != '') &&
    (c11 == c12) && (c12 == c13)) || ((c11 != '') &&
    (c22 != '') && (c33 != '') && (c11 == c22) &&
    (c22 == c33)) || ((c11 != '') && (c21 != '') &&
    (c31 != '') && (c11 == c21) && (c21 == c31)) || ((c21 != '') &&
    (c22 != '') && (c23 != '') && (c21 == c22) &&
    (c22 == c23)) || ((c31 != '') && (c32 != '') && 
    (c33 != '') && (c31 == c32) && (c32 == c33)) || (()) ))
}

// função para limpar o jogo
function novo(){
    for (i=1; i<4; i++){
        for(j=1; j<4; i++){
            nomecelula = 'cel' + i + j
            document.getElementById(nomecelula).innerHTML = '';
        }
    }
}