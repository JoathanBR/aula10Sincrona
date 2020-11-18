//----------Questão 1----------
function promocaoVeiculo(){
    var veiculo = document.getElementById('veiculo').value
    var precoVeiculo = document.getElementById('precoVeiculo').value

    let entrada = (precoVeiculo)/(2)
    let divisao = (entrada)/(12)

    document.getElementById('resultadoVeiculos').innerHTML = "<h3>Promoção: " + veiculo + "<br> Entrada de R$: " + entrada.toFixed(2) +"<br>+ 12x de R$: " + divisao.toFixed(2)+ "</h3>"

}

var mostrarPromocaoVeiculo = document.getElementById('mostrarPromocaoVeiculo')
mostrarPromocaoVeiculo.addEventListener('click', promocaoVeiculo)

//----------Questão 2----------
function precoRestaurante(){
    var kg = document.getElementById('kg').value
    var gr = document.getElementById('gr').value

    let conversao = (gr)/(1000)
    let valor = kg * conversao

    document.getElementById('resultadoBuffet').innerHTML = "<h3>Valor a pagar R$: " + valor.toFixed(2) + "</h3>"
}

var mostrarPrecoBuffet = document.getElementById('calcularBuffet')

mostrarPrecoBuffet.addEventListener('click', precoRestaurante)

//----------Questão 3----------
function promocaoMedicamento(){
    var medicamento = document.getElementById('medicamento').value
    var precoMedicamento = document.getElementById('precoMedicamento').value

    let desconto = precoMedicamento * 2

    document.getElementById('resultadoMedicamento').innerHTML = "<h3>Promoção " + medicamento + "<br>Leve 2 por apenas R$: "+ Math.trunc(desconto) +".00</h3>"
}

var mostrarPrecoMedicamento = document.getElementById('mostrarMedicamento')

mostrarPrecoMedicamento.addEventListener('click', promocaoMedicamento)

//----------Questão 4----------
function lanHouse(){
    var tempo = document.getElementById('tempo').value
    var uso = document.getElementById('uso').value

    let valorLanHouse = (uso)/(tempo)
    document.getElementById('resultadoLanHouse').innerHTML = "<h3>Valor a pagar R$: " + Math.trunc(valorLanHouse) +".00</h3>"
}

var mostrarValorLanHouse = document.getElementById('mostrarValorLanHouse')

mostrarValorLanHouse.addEventListener('click', lanHouse)

//----------Questão 5----------

function supermercado(){
    var produtoSuper = document.getElementById('produtoSuper').value
    var precoSuper = document.getElementById('precoSuper').value

    let valorSuper = (2 * precoSuper) + ((precoSuper)/(2))
    let terceiro = (precoSuper)/(2)

    document.getElementById('resultadoSuper').innerHTML = "<h3>"+ produtoSuper + " - Promoção: Leve 3 por R$: "+ valorSuper.toFixed(2) + "<br>O 3º produto custa apenas R$: " + terceiro.toFixed(2) + "</h3>"
}

var mostrarSuper = document.getElementById('mostrarSuper')

mostrarSuper.addEventListener('click', supermercado)