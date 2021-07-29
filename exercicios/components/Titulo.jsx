export default function Titulo(props) {
    //recebendo os parâmetros em props.
    console.log(props)
    //usando operador ternário para comparação
    return props.pequeno ? (
        <>
            <p>{props.principal}</p>
            <p>{props.secundario}</p>
        </>
    ) : (
        <>
            <h1>{props.principal}</h1>
            <h2>{props.secundario}</h2>
        </>
    )
}