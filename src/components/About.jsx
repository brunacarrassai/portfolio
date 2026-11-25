import Icon from './Icon.jsx'
import Reveal from './Reveal.jsx'
import SectionHead from './SectionHead.jsx'
import { focus, timeline } from '../data.js'

export default function About() {
  return (
    <section id="about" className="section container">
      <SectionHead
        eyebrow="Sobre mim"
        title="Da curiosidade ao código"
      />

      <div className="about">
        <div className="about__main">
        <Reveal delay={80} className="about__text">
          <p>
            Minha trajetória começou em 2012, explorando o universo da tecnologia e da criação. Desde
            então, venho desenvolvendo projetos que unem código, design e curiosidade.
          </p>
          <p>
            Hoje, trabalho com <strong>desenvolvimento front-end e UX/UI</strong>, criando interfaces
            intuitivas, componentes reutilizáveis e soluções que equilibram funcionalidade e
            experiência do usuário. Também desenvolvo games e crio arte 2D, explorando novas formas
            de transformar ideias em experiências interativas.
          </p>
          <p>
            Gosto de entender como as coisas funcionam, experimentar possibilidades e transformar
            problemas em soluções criativas.
          </p>
        </Reveal>

        <ul className="focus-list">
          {focus.map((f, i) => (
            <Reveal as="li" key={f.title} delay={160 + i * 90} className="focus-item">
              <Icon name={f.icon} size={22} />
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </Reveal>
          ))}
        </ul>
        </div>

        <Reveal as="aside" delay={200} className="timeline">
          <h3 className="timeline__title">Trajetória</h3>
          <ol>
            {timeline.map((t) => (
              <li key={t.when} className="timeline__item">
                <span className="timeline__when">{t.when}</span>
                <h4>{t.title}</h4>
                <p>{t.text}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}
