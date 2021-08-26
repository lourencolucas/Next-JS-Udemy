export function getStaticProps() {
    //Revalidate é a qtd de segundos para atualizar a função em segundos
    return {
        revalidate: 7,
        props: {
            numero: Math.random()
        }
    }
}

export default function Estatico3(props) {
    return (
        <div>
            <h1>Estático #03</h1>
            <h2>{props.numero}</h2>
        </div>
    )
}