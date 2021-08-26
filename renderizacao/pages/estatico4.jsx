//Consumindo a api interna do Next
export async function getStaticProps() {
    console.log('[Server] Gerando props para o componente...')
    const resp = await fetch('http://localhost:3000/api/produtos')
    const produtos = await resp.json()
    return {
        props: {
            produtos
        }
    }
}

export default function Estatico4(props) {
    console.log('[Client] Renderizando o componente...')
    function renderizarProdutos() {
        return props.produtos.map(produto => {
            return (
                <li key={produto.id}>
                   {produto.id} - {produto.nome} por R${produto.preco}
                </li>
            )
        })
    }

    return (
        <div>
            <h1>Estático #04</h1>
            <ul>
                {renderizarProdutos()}
            </ul>
        </div>
    )
}