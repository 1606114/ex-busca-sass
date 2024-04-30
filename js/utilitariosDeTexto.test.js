

import { buscarValorEmTexto } from "./utilitariosDeTexto"

// export function buscarValorEmTexto(lista, textoBusca) {
//     const textoQuebrado = lista.split(",")
//     const resultadoFind = textoQuebrado.find((element) => element == textoBusca)

//     return !!resultadoFind
// }

it("Deve retornar true caso encontre o valor dentro do texto separado por virgula", () => {
    const lista = "1,2,3,4,5"
    const textoBusca = "5"

    const resultado = buscarValorEmTexto(lista, textoBusca)

    expect(resultado).toBe(true)
})

it("Deve retornar false caso encontre o valor dentro do texto separado por virgula", () => {
    const lista = "1,2,3,4,5"
    const textoBusca = "8"

    const resultado = buscarValorEmTexto(lista, textoBusca)

    expect(resultado).toBe(false)
})