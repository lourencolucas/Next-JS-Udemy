import { useState } from "react"

export default function mouse() {
    //Modo mais simples
    const [x, setX] = useState(0)
    //Modo mais complexo
    const arrayY = useState(0)
    let y = arrayY[0]
    const alterarY = arrayY[1]

    const estilo = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#222",
        color: "#fff",
        height: "100vh"
    }
    function quandoMover(ev) {
        setX(ev.clientX)
        alterarY(ev.clientY)
        // console.log(ev.clientX, ev.clientY)
    }
    return (
        <div style={estilo} onMouseMove={quandoMover}>
            <span>Eixo X: {x}</span>
            <span>Eixo Y: {y}</span>
        </div>
    )
}