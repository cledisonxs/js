const res = document.getElementById('res');
res.style.textAlign = 'center';
res.style.color = 'white';
res.style.fontSize = '1.2em';

function valores() {
    let vetor = [];
        let t1 = 5;
        let t2 = 3;

    for(let i = 0; i < 10; i++) {
        if(i % 2 == 0) {
            vetor.push(5)
        } else {
            vetor.push(3)
        }
    }

    for ( let i = 0; i < 10; i++) {
        res.innerHTML += `<p>A posição [${i}],armazena o valor: ${vetor[i]} </p>`;
        
    }
}


//!meu codigo
/*
const res = document.getElementById('res');
res.style.textAlign = 'center';
res.style.color = 'white';
res.style.fontSize = '1.2em'

function valores() {
    let vetor = [];
        let t1 = 5;
        let t2 = 3;

    for(let i = 0; i <= 5; i++) {
        vetor.push(t1,t2);
    }

    for ( let i = 0; i < 10; i++) {
        res.innerHTML += `<p>A posição [${i}],armazena o valor: ${vetor[i]} </p>`;
        
    }
}
*/
//!Cria um vetor.
//!Adiciona 6 vezes os valores t1 (5) e t2 (3) no vetor, resultando em um vetor com 12 elementos.
//!Exibe os primeiros 10 elementos do vetor no HTML.


//?codigo IA
/*
const res = document.getElementById('res');
res.style.textAlign = 'center';
res.style.color = 'white';
res.style.fontSize = '1.2em';

function valores() {
    let vetor = [];
    for (let i = 0; i < 10; i++) {
        if (i % 2 === 0) {
            vetor.push(5);
        } else {
            vetor.push(3);
        }
    }
    for (let i = 0; i < 10; i++) {
        res.innerHTML += `<p>A posição [${i}] armazena o valor: ${vetor[i]}</p>`;
    }
}
*/ 
//?Cria um vetor.
//?Alterna entre os valores 5 e 3 para preencher exatamente 10 posições.
//?Exibe todos os 10 elementos do vetor no HTML.


