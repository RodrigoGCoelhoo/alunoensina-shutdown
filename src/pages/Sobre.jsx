import fundadores from '../assets/fundadores.png'
import mandelaDesktop from '../assets/mandela-desktop.png'
import mandelaMobile from '../assets/mandela-mobile.png'
import valores from '../assets/valores.png'
import carol from '../assets/team/carol-borges.jpg'
import gabriel from '../assets/team/gabriel-gobbo.jpg'
import deir from '../assets/team/deir-grassi.jpg'
import gabriela from '../assets/team/gabriela-gomes.jpg'
import ettore from '../assets/team/ettore-cerchi.jpg'
import george from '../assets/team/george-dechichi.jpg'
import laysla from '../assets/team/laysla.jpg'
import marcinho from '../assets/team/marcinho.jpg'
import leandro from '../assets/team/leandro-guimaraes.jpg'
import nathan from '../assets/team/nathan-pinheiro.jpg'
import lucas from '../assets/team/lucas-martins.jpg'
import rodrigo from '../assets/team/rodrigo-coelho.jpg'

const TEAM = [
  ['Carol Borges', 'Pessoas', carol],
  ['Gabriel Gobbo', 'Marketing', gabriel],
  ['Deir Grassi', 'Presidente', deir],
  ['Gabriela Gomes', 'Fundamental', gabriela],
  ['Ettore Cerchi', 'Pessoas', ettore],
  ['George Dechichi', 'Cursinho', george],
  ['Laysla', 'Redação', laysla],
  ['Marcinho', 'Relações Públicas', marcinho],
  ['Leandro Guimarães', 'Cursinho', leandro],
  ['Nathan Pinheiro', 'Além do Cursinho', nathan],
  ['Lucas Martins', 'Financeiro e RI', lucas],
  ['Rodrigo Coelho', 'TI', rodrigo],
]

const VALUES = [
  ['Compromisso', 'Estar comprometido com as responsabilidades assumidas consigo e com os outros, sendo íntegro (coerente com o que fala, pensa e faz).'],
  ['Aprendizagem contínua', 'Ser humilde e estar disposto a ir além sempre.'],
  ['Sabedoria', 'Tomar decisões que impactem positivamente a qualidade dos compromissos.'],
  ['Pertencimento', 'Ter consciência da própria importância para o funcionamento do projeto e zelar por ele.'],
  ['Inclusão e Diversidade', 'Colocar as pessoas em primeiro lugar, estar disposto a servir sempre.'],
]

function Team() {
  return (
    <div className="team__grid">
      {TEAM.map(([name, role, photo]) => (
        <div key={name} className="member">
          <img src={photo} alt="" />
          <h3>{name}</h3>
          <p>{role}</p>
        </div>
      ))}
    </div>
  )
}

export default function Sobre() {
  return (
    <div className="about">
      <section className="about__intro">
        <div className="container split">
          <div className="split__text split__text--tight">
            <p className="eyebrow eyebrow--md">/ Quem somos nós?</p>
            <h1 className="about__title">Os fundadores</h1>
            <p className="body-lg">Vindos de caminhos e mundos diferentes, Deir Grassi e Márcio Henrique encontraram em sua amizade o poder e a força de vontade para fazer a diferença e democratizar o acesso à educação. O Aluno Ensina surgiu do encontro entre jovens dispostos a transformar esta geração e chega até você com um objetivo: te impulsionar para um futuro repleto de oportunidades através da educação.</p>
          </div>
          <img src={fundadores} alt="Os fundadores do Aluno Ensina" className="split__img split__img--520" />
        </div>
      </section>

      <section className="container about__team">
        <div className="about__team-head">
          <p className="eyebrow eyebrow--lg">/ Nosso corpo docente</p>
          <h2 className="section-title section-title--xxl">Conheça as pessoas que fazem a diferença</h2>
        </div>
        <Team />
      </section>

      <picture className="quote">
        <source media="(max-width: 550px)" srcSet={mandelaMobile} />
        <img src={mandelaDesktop} alt="A educação é a arma mais poderosa que você pode usar para mudar o mundo. Nelson Mandela" />
      </picture>

      <section className="container split about__values">
        <div className="split__text split__text--flat">
          <p className="eyebrow eyebrow--md">/ O que nos trouxe até aqui?</p>
          <h2 className="about__title">Nossos Valores</h2>
          {VALUES.map(([title, text]) => (
            <div key={title} className="value">
              <h3>{title}</h3>
              <p className="body-lg">{text}</p>
            </div>
          ))}
        </div>
        <img src={valores} alt="Duas pessoas montando uma lâmpada de quebra-cabeça" className="split__img split__img--527" />
      </section>

    </div>
  )
}
