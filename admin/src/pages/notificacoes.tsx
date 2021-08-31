import Layout from "../components/template/Layout";
import useAppData from "../data/hook/useAppData";

export default function Notificacoes() {
  const ctx = useAppData()
  return (
    <Layout titulo="Notificações" subtitulo="Área de Notificações">
      {/* Com hook e contextAPI */}
      <h3>{ctx.nome}</h3> 
    </Layout>
  )
}
