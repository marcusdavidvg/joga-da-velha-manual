var p1 = document.getElementById('p1').innerHTML;
var p2 = document.getElementById('p2').innerHTML;
var p3 = document.getElementById('p3').innerHTML;
var p4 = document.getElementById('p4').innerHTML;
var p5 = document.getElementById('p5').innerHTML;
var p6 = document.getElementById('p6').innerHTML;
var p7 = document.getElementById('p7').innerHTML;
var p8 = document.getElementById('p8').innerHTML;
var p9 = document.getElementById('p9').innerHTML;

// botão mudar jogador


let jogador = document.querySelector('#jogador').innerHTML;

function mudarJogador()
{
    if (jogador == 'X')
    {
     jogador = document.getElementById('jogador').innerHTML = 'O'
     
    
    } else if (jogador == 'O')
    {
     jogador = document.getElementById('jogador').innerHTML = 'X'
      
    }

    
}


// fazendo as jogadas
let v1 = 0;
let v2 = 0;
let v3 = 0;
var v4 = 0;
var v5 = 0;
var v6 = 0;
var v7 = 0;
var v8 = 0;
var v9 = 0;



function espaco1()
{
    if (jogador == 'X') 
    { 
    document.getElementById('p1').innerHTML = 'X'
    
    return v1 += 1

    } else if (jogador == 'O') {
    document.getElementById('p1').innerHTML = 'O'
    return v1 += 2
    }

    condicaoVitoria();
}

function espaco2()
{
    
    if (jogador == 'X') 
    {
    document.getElementById('p2').innerHTML = 'X'
    return v2 += 1
    
    } else if (jogador == 'O') {
    document.getElementById('p2').innerHTML = 'O'
    return v2 += 2
    }

    condicaoVitoria();
}

function espaco3()
{
    
    if (jogador == 'X') 
    { 
    document.getElementById('p3').innerHTML = 'X'
    return v3 += 1
    
    } else if (jogador == 'O') {
    document.getElementById('p3').innerHTML = 'O'
    return v3 += 2
    }

    condicaoVitoria();
}

function espaco4()
{
    
    if (jogador == 'X') 
    {
    document.getElementById('p4').innerHTML = 'X'
    return v4 += 1
    
    } else if (jogador == 'O') {
        document.getElementById('p4').innerHTML = 'O'
        return v4 += 0
    
    }

    condicaoVitoria();
}

function espaco5()
{
    
    if (jogador == 'X') 
    {
    document.getElementById('p5').innerHTML = 'X'
    return v5 += 1
    
    } else if (jogador == 'O') {
        document.getElementById('p5').innerHTML = 'O'
      return v5 += 0
    }

    condicaoVitoria();
}

function espaco6()
{
    
    if (jogador == 'X') 
    {
        
    document.getElementById('p6').innerHTML = 'X'
    return v6 += 1
    
    } else if (jogador == 'O') {
        document.getElementById('p6').innerHTML = 'O'
    return v6 += 0
    }
    condicaoVitoria();
}

function espaco7()
{
    
    if (jogador == 'X') 
    {
        
    document.getElementById('p7').innerHTML = 'X'
    return v7 += 1
    
    } else if (jogador == 'O') {
        document.getElementById('p7').innerHTML = 'O'
     return v7 += 0
    }

    condicaoVitoria();
}

function espaco8()
{
    
    if (jogador == 'X') 
    {
        
    document.getElementById('p8').innerHTML = 'X'
    return v8 += 1
    
    } else if (jogador == 'O') {
    document.getElementById('p8').innerHTML = 'O'
    return v8 += 0
    }

    condicaoVitoria();
}

function espaco9()
{
    
    if (jogador == 'X') 
    {
    document.getElementById('p9').innerHTML = 'X'
    return v9 += 1
    
    } else if (jogador == 'O') {
     document.getElementById('p9').innerHTML = 'O'
    return v9 += 0
    }

    condicaoVitoria();
}



var backSpace = document.querySelector('#back')
backSpace.addEventListener('click', function(){
    document.getElementById('p1').innerHTML = ''
    document.getElementById('p2').innerHTML = ''
    document.getElementById('p3').innerHTML = ''
    document.getElementById('p4').innerHTML = ''
    document.getElementById('p5').innerHTML = ''
    document.getElementById('p6').innerHTML = ''
    document.getElementById('p7').innerHTML = ''
    document.getElementById('p8').innerHTML = ''
    document.getElementById('p9').innerHTML = ''
    
})



