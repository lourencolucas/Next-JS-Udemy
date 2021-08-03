export default function repeticao1() {
    const listaAprovados = [
        'João',
        'Maria',
        'Ana',
        'Bia',
        'Carlos',
        'Daniel',
        'Laura',
    ]
    function renderizarLista() {
        //usando arrow function
        return listaAprovados.map((nome, i) => <li key={i}>{nome}</li>)
    }
    return (
        <ul>
            {renderizarLista()}
        </ul>
    )
}
//Forma mais básica
// function renderizarLista() {
//     const itens = []
//     for (let i = 0; i < listaAprovados.length; i++) {
//         itens.push(<li key={i}>{listaAprovados[i]}</li>)
//     }
//     return itens
// }