import { Link } from 'react-router-dom'

export default function ProjectCard({ projeto }) {
  return (
    <Link to={`/projetos/${projeto.id}`} className="card">
      <div className="card__img">
        <img src={projeto.imagem} alt={projeto.titulo} loading="lazy" />
      </div>
      <div className="card__body">
        <span className="card__tag">{projeto.categoria}</span>
        <h3>{projeto.titulo}</h3>
        <p>
          {projeto.local} · {projeto.ano}
        </p>
      </div>
    </Link>
  )
}
