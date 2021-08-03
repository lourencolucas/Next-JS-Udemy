export default function SomentePar(props) {
    const numeroPar = props.numero % 2 === 0
    return (
    //Dentro de um trecho JSX
        <div>
            {numeroPar ?
                <span>{props.numero}</span>
                : null
            }
        </div>
    )
}
//Com if
    // if(props.numero % 2 === 0) {
    //     return <span>{props.numero}</span>
    // } else {
    //     return null
    // }
//Com operador ternário
// return numeroPar ? <span>{props.numero}</span> : null