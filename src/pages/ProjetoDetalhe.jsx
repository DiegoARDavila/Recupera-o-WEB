import { Link, useParams } from 'react-router-dom'
import Button from '../components/Button.jsx'
import { getProjetoById } from '../data/projetos.js'

export default function ProjetoDetalhe() {
  const { id } = useParams()
  const projeto = getProjetoById(id)

  if (!projeto) {
    return (
      <section className="section container center">
        <h1>Projeto não encontrado</h1>
        <p>Não existe nenhum projeto com o código "{id}".</p>
        <Button to="/projetos">Voltar para projetos</Button>
      </section>
    )
  }

  return (
    <section className="section container">
      <Link to="/projetos" className="back">← Voltar para projetos</Link>

      <div className="detail">
        <div className="detail__img">
          <img src={projeto.imagem} alt={projeto.titulo} />
        </div>
        <div className="detail__info">
          <span className="card__tag">{projeto.categoria}</span>
          <h1>{projeto.titulo}</h1>
          <p>{projeto.descricao}</p>
          <dl className="detail__meta">
            <div><dt>Local</dt><dd>{projeto.local}</dd></div>
            <div><dt>Ano</dt><dd>{projeto.ano}</dd></div>
            <div><dt>Área</dt><dd>{projeto.area}</dd></div>
          </dl>
          <Button to="/contato">Solicitar um projeto parecido</Button>
        </div>
      </div>
    </section>
  )
}
