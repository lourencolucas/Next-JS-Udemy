import { useRouter } from 'next/router'

export default function buscar() {
    const router = useRouter()
    console.log(router)
    return (
        <div>
            <h1>Rotas/id/buscar</h1>
        </div>
    )
}