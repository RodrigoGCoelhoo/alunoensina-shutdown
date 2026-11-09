import logo from '../assets/logo-footer.png'

const YEAR = new Date().getFullYear()

const SOCIAL = [
  ['Instagram', 'https://www.instagram.com/alunoensina/'],
  ['Facebook', 'https://www.facebook.com/alunoensina'],
  ['Telegram', 'https://t.me/joinchat/AAAAAFC-R9Q1-jwtBSMKDg'],
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img src={logo} alt="Aluno Ensina" width="200" />
          <p>Copyright © {YEAR} Aluno Ensina |</p>
          <p>A maior plataforma de ensino comunitário do Brasil</p>
        </div>
        <div className="footer__social">
          {SOCIAL.map(([label, href]) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer">{label}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}
