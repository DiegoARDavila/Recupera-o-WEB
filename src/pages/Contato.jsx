import { useState } from 'react'
import SectionTitle from '../components/SectionTitle.jsx'
import Button from '../components/Button.jsx'

export default function Contato() {
  const [enviado, setEnviado] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setEnviado(true)
    e.target.reset()
  }

  return (
    <section className="section container contact">
      <div>
        <SectionTitle eyebrow="Contato" title="Vamos conversar sobre seu projeto?" />
        <ul className="contact__info">
          <li><strong>E-mail:</strong> contato@base&traco.com</li>
          <li><strong>Telefone:</strong> (11) 99999-0000</li>
          <li><strong>Endereço:</strong> Rua Corinthians, 67 — Taboão da Serra, SP</li>
        </ul>
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <label>
          Nome
          <input type="text" name="nome" required />
        </label>
        <label>
          E-mail
          <input type="email" name="email" required />
        </label>
        <label>
          Mensagem
          <textarea name="mensagem" rows="5" required />
        </label>
        <Button type="submit">Enviar mensagem</Button>
        {enviado && <p className="form__ok">Mensagem enviada! Retornaremos em breve.</p>}
      </form>
    </section>
  )
}
