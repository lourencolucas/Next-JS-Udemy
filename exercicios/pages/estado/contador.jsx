import { useState } from "react"
import ContadorDisplay from "../../components/ContadorDisplay"

export default function contador() {
    const [numero, setNumero] = useState(0)
    //arrow function
    const inc = () => setNumero(numero + 1)
    const dec = () => setNumero(numero - 1)
    //Estilos
    const estilo = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }
    return (
        <div style={estilo}>
            <h1>Contador </h1>
            <div>
                <h2>Usando Estado Interno</h2>
                <span>Valor: {numero}</span>
            </div>
            <div>
                <h2>Usando Componente</h2>
                <ContadorDisplay numero={numero} />
            </div>
            <div>
                <button onClick={inc}>+1</button>
                <button onClick={dec}>-1</button>
            </div>
        </div>
    )
}