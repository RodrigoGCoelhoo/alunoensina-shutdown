import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg'

export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/"><img src={logo} alt="Aluno Ensina" className="header__logo" /></Link>
        <nav className="nav" aria-label="Principal">
          <NavLink to="/" end>Início</NavLink>
          <NavLink to="/sobre">Sobre nós</NavLink>
          <NavLink to="/videos">Vídeos</NavLink>
        </nav>
      </div>
    </header>
  )
}
