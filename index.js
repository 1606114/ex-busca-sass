import "./index.scss"
import {
    adicionarEventoEmBotao,
    pegarValorTextoEmInput,
    alterarBotaoParaSucesso,
    alterarBotaoParaErro,
} from "./js/tela.js"

import {
    buscarValorEmTexto
} from "./js/utilitariosDeTexto.js"

adicionarEventoEmBotao("click", "findButton", iniciarExercicioFind)
adicionarEventoEmBotao("click", "filterButton", iniciarExercicioFilter)

async function iniciarExercicioFind() {
    const lista = pegarValorTextoEmInput("findLista")
    const textoBusca = pegarValorTextoEmInput("findBusca")

    const resultadoFind = buscarValorEmTexto(lista, textoBusca)

    if (resultadoFind) {
        await alterarBotaoParaSucesso()
    } else {
        await alterarBotaoParaErro()
    }
}

function iniciarExercicioFilter() {
    console.log("--- FILTER INICIADO! ---")
    // Entradas de dados
    const lista = pegarValorTextoEmInput("filterLista")
    const textoBusca = pegarValorTextoEmInput("filterBusca")

    // Processamento
    const textoQuebrado = lista.split(",")
    console.log(textoQuebrado)

    const resultado = textoQuebrado.filter((elemento) => elemento == textoBusca)

    // Saída de Dados
    const elementoResultado = document.getElementById("filterResultado")

    let textoResultado = `${resultado.length} foram encontrados!`
    if(resultado.length == 1)
        textoResultado = "1 foi encontrado!"
    else if (resultado.length == 0)
        textoResultado = "Nenhum encontrado!"

    elementoResultado.innerHTML = textoResultado

    // [OK] 1 - Ajustar o css pra ter mais espaço
    // [OK] 2 - Tratar foi/foram
    // [OK] 3 - Refatorar código para utilizar módulos
    // [] 4 - Fazer testes unitários
}




