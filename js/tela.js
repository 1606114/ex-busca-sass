const elementoResultado = document.getElementById("findResultado")

export function adicionarEventoEmBotao(evento, id, funcao) {
    document.getElementById(id)
        .addEventListener(evento, funcao)
}

export function pegarValorTextoEmInput(id) {
    const valor = document.getElementById(id).value

    return valor
}

export async function alterarBotaoParaSucesso() {
    elementoResultado.innerHTML = "Encontrado!"
    elementoResultado.classList.remove("erro")
    elementoResultado.classList.add("sucesso")
    await delay()
    resetarBotao()
}

export async function alterarBotaoParaErro() {
    elementoResultado.innerHTML = "NÃO encontrado!"
    elementoResultado.classList.remove("sucesso")
    elementoResultado.classList.add("erro")
    await delay()
    resetarBotao()
}

export async function delay() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 2000)
    })
}

function resetarBotao() {
    const elementoResultado = document.getElementById("findResultado")
    elementoResultado.classList.remove("sucesso")
    elementoResultado.classList.remove("erro")
    elementoResultado.innerHTML = "RESULTADO"
}