import If from "../../components/if";

export default function condicional2(){
    const numero = 3
    return(
        <div>
            <If teste={numero % 2 === 0}>
                <h1>O número é par</h1>
            </If>
        </div>
    )
}