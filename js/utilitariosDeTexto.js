

export function buscarValorEmTexto(lista, textoBusca) {
    const textoQuebrado = lista.split(",")
    const resultadoFind = textoQuebrado.find((element) => element == textoBusca)

    return !!resultadoFind
}