import styles from "../styles/Cartao.module.css"

interface CartaoPorps {
    bgcolor?: string
    children?: any
}

export default function Cartao(props: CartaoPorps) {
    return (
        <div className={styles.cartao} style={{
            backgroundColor: props.bgcolor ?? "#fff"
        }}>
            {props.children}
        </div>
    )
}