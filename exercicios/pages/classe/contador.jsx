//49. Componente Baseado em Classe
import { Component } from "react";
import Contador from "../../components/Contador"

export default class ContadorPage extends Component {
    render() {
        return (
            <Contador />
        )
    }
}