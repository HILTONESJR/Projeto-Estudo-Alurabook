const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const elementosBtn = document.getElementById(this.id)
    const categoria = elementosBtn.value

    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria)

    exibirOsLivrosNaTela(livrosFiltrados)
    if (categoria == 'disponivel'){
         const valorToralLivrosDisponiveis = calcularValorTotalLivrosDisponiveis(livrosFiltrados)
         exibirValorTotalPromocao(valorToralLivrosDisponiveis)
    }
}
function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

    function exibirValorTotalPromocao(valorToralLivrosDisponiveis){
        elementoPromocao.innerHTML = `
        <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${valorToralLivrosDisponiveis.toFixed(2)}</span></p>
        </div>
        `
    }