export default function Filho(props) {
    // console.log(props.funcao)
    return(
        <div>
           <h1>Filho</h1> 
           <button onClick={props.funcao}>Falar com o componente pai #01</button>
           <button onClick={() => props.funcao("Passei no ENEM")}>Falar com o componente pai #02</button>
        </div>
    )
}