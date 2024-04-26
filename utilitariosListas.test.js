// Importar utilizariosListas


it("Deve retornar 'Encontrado' caso encontre o valor na lista", () => {
    // Given
    const lista = [1, 2, 3, 4]
    const valorBuscado = 2
    // When
    const resultado = encontrarValor(lista, valorBuscado)

    // Then
    expect(resultado).toBe("Encontrado")
})

it("Deve retornar 'Nao Encontrado' caso não encontre o valor na lista", () => {
    // Given
    const lista = [1, 2, 3, 4]
    const valorBuscado = 7
    // When
    const resultado = encontrarValor(lista, valorBuscado)

    // Then
    expect(resultado).toBe("Não encontrado")
})

it("Deve retornar 'x Encontrados' caso encontre o valor na lista x vezes", () => {
    // Given
    const lista = [1, 2, 3, 4]
    const valorBuscado = 2
    // When
    const resultado = filtrarValor(lista, valorBuscado)

    // Then
    expect(resultado).toBe("1 encontrados")
})

it("Deve retornar '0 encontrados' caso não encontre o valor na lista", () => {
    // Given
    const lista = [1, 2, 3, 4]
    const valorBuscado = 8
    // When
    const resultado = filtrarValor(lista, valorBuscado)

    // Then
    expect(resultado).toBe("0 encontrados")
})