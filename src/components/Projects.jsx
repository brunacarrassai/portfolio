import { SiReact, SiPython, SiNodedotjs, SiMongodb, SiAngular, SiTypescript } from 'react-icons/si'
import Icon from './Icon.jsx'
import Reveal from './Reveal.jsx'
import Spotlight from './Spotlight.jsx'
import SectionHead from './SectionHead.jsx'
import { projects } from '../data.js'

const techIcons = { SiReact, SiPython, SiNodedotjs, SiMongodb, SiAngular, SiTypescript }

// Capa gerada em código (janela de terminal + tecnologias do projeto)
function Cover({ cover }) {
  return (
    <div className={`cover cover--${cover.tone}`}>
      <div className="cover__bar">
        <i /> <i /> <i />
      </div>
      <p className="cover__label">
        <span>&gt;</span> {cover.label}
      </p>
      <div className="cover__icons">
        {cover.icons.map((n) => {
          const I = techIcons[n]
          return I ? <I key={n} size={30} /> : null
        })}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section container">
      <SectionHead eyebrow="Navegue pelos meus" title="Projetos" />
      <div className="projects">
        {projects.map((p, i) => (
          <Reveal key={i} delay={i * 100}>
            {p.soon ? (
              <div className="card project project--soon">
                <div className="project__soon-inner">
                  <Icon name="sparkle" size={28} />
                  <h3>Em breve</h3>
                  <p>Novos projetos a caminho.</p>
                </div>
              </div>
            ) : (
              <Spotlight className="card project">
                <a className="project__media" href={p.demo} target="_blank" rel="noreferrer" tabIndex={-1} aria-hidden="true">
                  <Cover cover={p.cover} />
                </a>
                <div className="project__body">
                  <ul className="tags">
                    {p.tags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <div className="project__links">
                    <a className="btn btn--ghost btn--sm" href={p.github} target="_blank" rel="noreferrer">
                      <Icon name="github" size={16} /> Código
                    </a>
                    <a className="btn btn--primary btn--sm" href={p.demo} target="_blank" rel="noreferrer">
                      Live demo <Icon name="arrowUpRight" size={16} />
                    </a>
                  </div>
                </div>
              </Spotlight>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  )
}
