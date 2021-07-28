//ler expressões que estão sendo passadas no javascript
export default function jsx4(){
    const subtitulo = "Estou no Javascript!!"
    return(
        <div>
            <h1>Integração JS e JSX</h1>
            <h2>{subtitulo}</h2>
            <h3>{3*3}</h3>
            <h5>{entre(9.6, 1, 10)}</h5>
        </div>
    )
}
function entre(valor, min, max){
    if (valor >= min && valor <= max) {
        return "sim"
    }else {
        return "não"
    }
}