import Reveal from './Reveal.jsx'
import Spotlight from './Spotlight.jsx'
import SectionHead from './SectionHead.jsx'
import { experience, education, languages } from '../data.js'

function Bullets({ items }) {
  return (
    <ul className="exp__bullets">
      {items.map((b) => (
        <li key={b}>{b}</li>
      ))}
    </ul>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="section container">
      <SectionHead eyebrow="Minha trajetória" title="Experiência" />

      <div className="exp">
        <ol className="exp__list">
          {experience.map((job, i) => (
            <Reveal as="li" key={job.company} delay={i * 100} className="exp__item">
              <Spotlight className={`card exp__card ${job.current ? 'exp__card--current' : ''}`}>
                <header className="exp__head">
                  <div>
                    <h3>{job.company}</h3>
                    <p className="exp__place">{job.place}</p>
                  </div>
                  <span
                    className={`exp__period ${job.current ? 'is-current' : ''}`}
                    title={job.roles.length > 1 ? 'Período na empresa' : undefined}
                  >
                    {job.current && <i aria-hidden="true" />}
                    {job.period}
                  </span>
                </header>

                <div className={`exp__roles ${job.roles.length > 1 ? 'exp__roles--multi' : ''}`}>
                  {job.roles.map((r) => (
                    <div key={r.title} className="exp__role">
                      <div className="exp__role-head">
                        <h4>{r.title}</h4>
                        {r.period && <span>{r.period}</span>}
                      </div>

                      {r.groups ? (
                        <div className="exp__groups">
                          {r.groups.map((g) => (
                            <div key={g.label} className="exp__group">
                              <span className={`exp__tag ${g.dev ? 'is-dev' : ''}`}>{g.label}</span>
                              <Bullets items={g.bullets} />
                            </div>
                          ))}
                        </div>
                      ) : (
                        <Bullets items={r.bullets} />
                      )}
                    </div>
                  ))}
                </div>
              </Spotlight>
            </Reveal>
          ))}
        </ol>

        <aside className="exp__side">
          <Reveal delay={120} className="side-card">
            <h3 className="side-title">Formação</h3>
            <ul className="edu">
              {education.map((e) => (
                <li key={e.title}>
                  <strong>{e.title}</strong>
                  <span>
                    {e.school} · {e.degree}
                  </span>
                  <em>{e.period}</em>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={200} className="side-card">
            <h3 className="side-title">Idiomas</h3>
            <ul className="langs">
              {languages.map((l) => (
                <li key={l.name}>
                  <strong>{l.name}</strong>
                  <span>{l.level}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </aside>
      </div>
    </section>
  )
}
