import Titulo from '../../components/Titulo'
//importando o componente
//pequeno é referente ao parâmetro para mudança
//tanto pequeno={true} ou pequeno, são verdadeiros
export default function usandoTitulo() {
    return (
        <div>
            <Titulo
                principal="Página de cadastro"
                secundario="Incluir, alterar e excluir!"
            />
            <Titulo
                principal="Página de Login"
                secundario="Incluir E-mail e Senha!"
                pequeno={true}
            />
            <Titulo
                principal="Página de Login"
                secundario="Incluir E-mail e Senha!"
                pequeno
            />
        </div>
    )
}