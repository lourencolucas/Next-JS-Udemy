import { useState } from "react"

export default function formulario() {
    const [valor, setValor] = useState("Inicial")
    return(
        <div>
            <input type="text" value={valor}/>
        </div>
    )
}