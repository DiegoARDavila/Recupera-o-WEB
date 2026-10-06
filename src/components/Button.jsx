import { Link } from 'react-router-dom'

// Se receber "to", renderiza um Link; caso contrário, um <button>.
export default function Button({ to, variant = 'primary', children, ...rest }) {
  const className = `btn btn--${variant}`
  if (to) {
    return (
      <Link to={to} className={className} {...rest}>
        {children}
      </Link>
    )
  }
  return (
    <button className={className} {...rest}>
      {children}
    </button>
  )
}
