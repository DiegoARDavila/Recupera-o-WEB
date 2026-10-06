import SectionTitle from '../components/SectionTitle.jsx'

const equipe = [
  { nome: 'Ana Ribeiro', cargo: 'Sócia-fundadora' },
  { nome: 'Carlos Menezes', cargo: 'Arquiteto sênior' },
  { nome: 'Júlia Andrade', cargo: 'Designer de interiores' },
]

export default function Sobre() {
  return (
    <>
      <section className="section container about">
        <div className="about__img">
          <img src="https://picsum.photos/seed/sobre-arq/900/700" alt="Equipe do estúdio" />
        </div>
        <div>
          <SectionTitle eyebrow="Sobre nós" title="Arquitetura feita com propósito" />
          <p>
            Somos um estúdio de arquitetura e interiores que acredita que bons
            espaços melhoram a vida das pessoas. Cada projeto nasce de uma
            escuta atenta e de um processo de criação colaborativo.
          </p>
          <p>
            Trabalhamos com materiais honestos, soluções sustentáveis e muito
            respeito ao contexto de cada obra.
          </p>
        </div>
      </section>

      <section className="section container">
        <SectionTitle eyebrow="Equipe" title="Quem faz acontecer" />
        <div className="grid grid--3">
          {equipe.map((m, i) => (
            <article key={m.nome} className="member">
              <img src={`https://picsum.photos/seed/membro-${i}/400/400`} alt={m.nome} />
              <h3>{m.nome}</h3>
              <p>{m.cargo}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
