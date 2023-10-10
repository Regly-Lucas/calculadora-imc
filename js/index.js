function executaCalculo() {
    const buscandoPeso = document.getElementById('peso');
    const buscandoAltura = document.getElementById('altura');
    const resultado = document.getElementById('resultado');
    const seuIMC = document.getElementById('seu-imc');
    const descricao = document.getElementById('descricao')
    const peso = Number(buscandoPeso.value.replace(',', '.'));
    const altura = Number(buscandoAltura.value.replace(',', '.'));

    const imcCalculado = peso / (altura * altura);
    imcFinal = imcCalculado.toFixed(2)

    let description = '';
    resultado.className = '';

    if (imcFinal < 18.5) {
        description = 'Cuidado, você está abaixo do peso!'
        resultado.className = 'texto-azul'
    }
    else if (imcFinal >= 18.5 && imcFinal <= 25) {

        description = 'Você está no seu peso ideal';
        resultado.className = 'texto-verde'

    } else if (imcFinal >= 25 && imcFinal <= 30) {

        description = 'Cuidado você está com sobrepeso!';
        resultado.className = 'texto-laranja'

    } else{
        description = 'Atenção, você está com obesidade!';
        resultado.className = 'texto-vermelho'
    }



    descricao.innerHTML = description;
    resultado.textContent = imcFinal;
    seuIMC.innerText= 'Seu IMC'
}