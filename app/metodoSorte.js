let bTOrdernarPorPreco  = document.getElementById('btnOrdenarPorPreco')

bTOrdernarPorPreco.addEventListener('click', () => {
    livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
    exibirOsLivrosNaTela(livrosOrdenados)
})