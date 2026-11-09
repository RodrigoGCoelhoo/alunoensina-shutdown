import { Link } from 'react-router-dom'
import { countFor } from '../data/videos.js'
import hero from '../assets/hero.svg'
import proposito from '../assets/proposito.svg'
import jornada from '../assets/jornada.svg'
import kick from '../assets/kick.svg'
import t10 from '../assets/t10.svg'
import vitoria from '../assets/depoimento-vitoria.png'
import larissa from '../assets/depoimento-larissa.png'

const STATS = [
  ['500 horas', 'Em conteúdo gratuito de qualidade.'],
  ['+56 mil', 'Alunos matriculados em nossa plataforma.'],
  ['96% dos alunos', 'Recomendam nossa plataforma.'],
]

const CARDS = [
  { title: 'Cursinho', menu: 'Cursinho', unit: 'aulas', text: 'Tenha acesso a videoaulas de todos os conteúdos que você precisa para passar no ENEM ou em qualquer vestibular.' },
  { title: 'Resolução de provas', menu: 'Resolução de Provas', unit: 'questões', text: 'Acompanhe a resolução do ENEM e dos maiores vestibulares do país. Em vídeos curtos, construímos junto com você o raciocínio de cada questão de forma clara e completa!' },
  { title: 'Além do cursinho', menu: 'Além do Cursinho', unit: 'vídeos', text: 'Aprenda a planejar melhor seus estudos, organizar sua rotina e melhorar seu rendimento no dia a dia, com diversos vídeos sobre desenvolvimento pessoal, profissional e acadêmico.' },
  { title: 'Fundamental II', menu: 'Ensino Fundamental II', unit: 'aulas', text: 'Confira neste módulo videoaulas exclusivas das matérias estudadas no Ensino Fundamental 2 e construa a base de sua jornada de estudo com a gente!' },
]

const TESTIMONIALS = [
  { name: 'Vitoria Silva Borges', photo: vitoria, text: 'O site e incrível, uma boa plataforma que ajuda milhares de pessoas e sou grata por fazer parte. Obrigada a todos!' },
  { name: 'Larissa Costa', photo: larissa, text: 'Um projeto incrível, com professores prestativos e material de altíssima qualidade.' },
  { name: 'Camila Soares', initials: 'CS', text: 'O curso é incrível, principalmente pelo fato de ser gratuito e feito com tanto carinho para nós vestibulandos.' },
]

const SPONSORS = [
  { name: 'Kick', logo: kick, href: 'https://www.letskick.com.br/' },
  { name: 'T10', logo: t10, href: 'https://t10.digital/' },
]

const videosLink = (menu) => `/videos?menu=${encodeURIComponent(menu)}`

export default function Inicio() {
  return (
    <div className="home">
      <div className="home__light">
        <section className="container split hero">
          <div className="split__text">
            <p className="badge">Aviso importante</p>
            <h1 className="hero__title">O Aluno Ensina está sendo descontinuado, mas todo o conteúdo segue gratuito</h1>
            <p className="lead">
              Todas as aulas continuam disponíveis para você estudar quando quiser,{' '}
              <span className="underline">sem cadastro e sem custo.</span>
            </p>
            <Link to="/videos" className="btn btn--wide">Acessar todas as aulas</Link>
          </div>
          <img src={hero} alt="" className="split__img" />
        </section>

        <section className="stats-wrap">
          <div className="container stats">
            {STATS.map(([value, label]) => (
              <div key={value} className="stat">
                <h2>{value}</h2>
                <p>{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="offer">
          <div className="container offer__inner">
            <p>/ O que oferecemos?</p>
            <h2 className="offer__title">Nós já estivemos no seu lugar e agora queremos te ajudar.</h2>
            <p>Aqui no AE você terá acesso a conteúdos didáticos feitos de alunos para alunos!</p>
            <div className="offer__grid">
              {CARDS.map((c) => (
                <div key={c.title} className="offer__card">
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                  <Link to={videosLink(c.menu)}>Ver {countFor(c.menu)} {c.unit}</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container split purpose">
          <div className="split__text">
            <p className="eyebrow eyebrow--lg">/ Por que fizemos tudo isso?</p>
            <h2 className="section-title section-title--xl">Nosso propósito é construir um futuro melhor promovendo uma educação mais acessível</h2>
            <p className="lead">
              O Aluno Ensina nasceu buscando expandir o horizonte dos jovens brasileiros aumentando seu acesso à educação através de um{' '}
              <span className="underline">cursinho online e gratuito.</span>
            </p>
            <p className="lead">Surgimos em meio à pandemia sem nenhum objetivo de retorno financeiro.</p>
            <Link to="/sobre" className="btn btn--narrow">Saiba mais</Link>
          </div>
          <img src={proposito} alt="" className="split__img" />
        </section>

        <section className="container testimonials">
          <p className="eyebrow">/ Depoimentos</p>
          <h2 className="section-title">O que nossos alunos têm a dizer</h2>
          <div className="testimonials__grid">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="testimonial">
                <blockquote>"{t.text}"</blockquote>
                <figcaption>
                  {t.photo
                    ? <img src={t.photo} alt="" className="avatar" />
                    : <span aria-hidden="true" className="avatar avatar--initials">{t.initials}</span>}
                  <strong>{t.name}</strong>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="container sponsors">
          <p className="eyebrow">/ As empresas que nos ajudam neste propósito</p>
          <h2 className="section-title">Nossos apoiadores</h2>
          <div className="sponsors__list">
            {SPONSORS.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer">
                <img src={s.logo} alt={s.name} className="sponsors__logo" />
              </a>
            ))}
          </div>
        </section>
      </div>

      <section className="journey">
        <img src={jornada} alt="" className="journey__img" />
        <div className="journey__cta">
          <p>Vamos começar uma nova jornada?</p>
          <Link to="/videos" className="btn btn--xl">Acessar todas as aulas</Link>
        </div>
      </section>
    </div>
  )
}
