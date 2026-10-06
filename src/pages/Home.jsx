import Button from '../components/Button.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { projetos } from '../data/projetos.js'

const numeros = [
  { valor: '15+', label: 'Anos de experiência' },
  { valor: '120', label: 'Projetos entregues' },
  { valor: '30', label: 'Prêmios e menções' },
  { valor: '98%', label: 'Clientes satisfeitos' },
]

const servicos = [
  { titulo: 'Arquitetura', texto: 'Projetos residenciais, comerciais e institucionais do estudo preliminar à obra.' },
  { titulo: 'Interiores', texto: 'Ambientes funcionais e acolhedores, com mobiliário e iluminação sob medida.' },
  { titulo: 'Urbanismo', texto: 'Espaços públicos e masterplans que conectam pessoas e cidade.' },
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__text">
            <span className="section-title__eyebrow">Estúdio de arquitetura</span>
            <h1>Espaços que contam histórias</h1>
            <p>
              Criamos arquitetura contemporânea com atenção aos detalhes, à
              luz natural e à vida de quem usa cada espaço.
            </p>
            <div className="hero__actions">
              <Button to="/projetos">Ver projetos</Button>
              <Button to="/contato" variant="outline">Fale conosco</Button>
            </div>
          </div>
          <div className="hero__img">
            <img src="https://images.pexels.com/photos/34146427/pexels-photo-34146427/free-photo-of-arquitetura-moderna-de-varanda-em-bari-italia.jpeg?cs=tinysrgb&dpr=1&w=500" alt="Projeto de arquitetura em destaque" />
          </div>
        </div>
      </section>

      <section className="section container">
        <SectionTitle eyebrow="O que fazemos" title="Sobre nossos serviços" />
        <div className="grid grid--3">
          {servicos.map((s) => (
            <article key={s.titulo} className="service">
              <h3>{s.titulo}</h3>
              <p>{s.texto}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section container">
        <SectionTitle eyebrow="Portfólio" title="Nossos projetos">
          Uma seleção dos nossos trabalhos mais recentes.
        </SectionTitle>
        <div className="grid grid--3">
          {projetos.slice(0, 3).map((p) => (
            <ProjectCard key={p.id} projeto={p} />
          ))}
        </div>
        <div className="center">
          <Button to="/projetos" variant="outline">Ver todos os projetos</Button>
        </div>
      </section>
    </>
  )
}
