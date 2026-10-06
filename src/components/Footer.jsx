import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="header__logo">
            Base & Traço
          </p>
          <p className="footer__text">
            Projetos de arquitetura e interiores com foco em luz, espaço e
            pessoas.
          </p>
        </div>

        <div>
          <h4>Navegação</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projetos">Projetos</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/contato">Contato</Link></li>
          </ul>
        </div>

        <div>
          <h4>Contato</h4>
          <ul>
            <li>contato@base&traco.com</li>
            <li>(11) 99999-0000</li>
            <li>Taboão da Serra, SP</li>
          </ul>
        </div>
      </div>
      <p className="footer__copy">
        © {new Date().getFullYear()} Base & Traço — Todos os direitos reservados.
      </p>
    </footer>
  )
}
