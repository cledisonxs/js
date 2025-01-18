function doisclique(){
    let res = document.querySelector('div#Res');
    res.innerHTML = '';

    let homens = 0;
    let mulheres = 0;
    let soma_geral = 0;
    let soma_homens = 0;
    let mulher_20 = 0;

    let c = 1;
    while(c <= 5){
        let idade = parseInt(prompt(`Qual a idade da pessoa ${c}?`));
        let sexo = prompt(`Qual o sexo da pessoa ${c} (M | F)`);

        if( sexo.toLocaleLowerCase() == 'f'){
            mulheres = mulheres + 1;

            if(idade > 20){
                mulher_20 = mulher_20 + 1;
            }

        }else if(sexo.toLocaleUpperCase() == 'M'){
            homens = homens + 1;
            //?tenho ciência que poderia ter usado logo só o else, mas estou testando a expressão uppercase e lowercase;
            soma_homens = soma_homens + idade;
        }
        soma_geral =  soma_geral + idade;
        c++;
    }
    res.style.textAlign = 'center';
    let media_grupo = soma_geral / 5;
    let media_homens = soma_homens / homens;


    res.innerHTML += `<strong>
        <p>A quantidade de homens cadastrados é: ${homens}</p>
    </strong>`;

    res.innerHTML += `<strong>
        <p>A quantidade de mulheres cadastradas é: ${mulheres}</p>
    </strong>`;

    res.innerHTML += `<p>A soma total das idades é: ${soma_geral}</p>`;

    res.innerHTML += `<strong>
        <p>A média de idade do grupo é: ${media_grupo.toFixed(2)}</p>
    </strong>`;

    res.innerHTML += `<p>A soma total das idades dos homens é: ${soma_homens}</p>`

    res.innerHTML += `<strong><p>A média da idade dos homens é: ${media_homens.toFixed(2)}</p></strong>`;

    res.innerHTML += `<strong>
        <p>A quantidade de mulheres acima de 20 anos é: ${mulher_20}</p>
    </strong>`;
}