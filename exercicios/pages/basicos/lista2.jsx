function gerarLista(){
    return <span>1,</span>
}
export default function lista(){ 
    return(
        <div>
            {gerarLista()}
        </div>
    )
}