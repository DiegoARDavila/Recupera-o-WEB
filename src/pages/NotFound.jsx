import Button from '../components/Button.jsx'

export default function NotFound() {
  return (
    <section className="section container center">
      <h1>404</h1>
      <p>Página não encontrada.</p>
      <Button to="/">Voltar para a Home</Button>
    </section>
  )
}
