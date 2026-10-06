import { useState } from 'react'
import SectionTitle from '../components/SectionTitle.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { projetos } from '../data/projetos.js'

const categorias = ['Todos', ...new Set(projetos.map((p) => p.categoria))]

export default function Projetos() {
  const [filtro, setFiltro] = useState('Todos')
  const lista =
    filtro === 'Todos' ? projetos : projetos.filter((p) => p.categoria === filtro)

  return (
    <section className="section container">
      <SectionTitle eyebrow="Portfólio" title="Nossos projetos">
        Conheça os trabalhos desenvolvidos pelo estúdio.
      </SectionTitle>

      <div className="filters">
        {categorias.map((c) => (
          <button
            key={c}
            className={`filters__btn ${filtro === c ? 'filters__btn--active' : ''}`}
            onClick={() => setFiltro(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid--3">
        {lista.map((p) => (
          <ProjectCard key={p.id} projeto={p} />
        ))}
      </div>
    </section>
  )
}
