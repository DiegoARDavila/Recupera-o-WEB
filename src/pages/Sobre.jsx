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
          <img src="https://johnnyvianaarquitetura.com/wp-content/uploads/2025/07/arquiteto-johnny-viana-2025.jpg" alt="Equipe do estúdio" />
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
    </>
  )
}
