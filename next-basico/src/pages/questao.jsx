import { useEffect, useState } from "react"

export default function questao() {
    const [questao, setQuestao] = useState(null)

    useEffect(() => {
        fetch('http://localhost:3000/api/questao/123')
            .then(resp => resp.json())
            .then(setQuestao)
    }, [])
    return (
        <div>
            <h1>Questão</h1>
            <div>
                <span>{questao?.enunciado}</span>
            </div>
        </div>
    )
}