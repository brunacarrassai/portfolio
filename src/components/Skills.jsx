import {
  SiJavascript, SiPython, SiPhp, SiReact, SiBootstrap, SiHtml5, SiCss,
  SiTailwindcss, SiAngular, SiSass, SiNodedotjs, SiExpress,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { TbBrandCSharp } from 'react-icons/tb'
import Reveal from './Reveal.jsx'
import SectionHead from './SectionHead.jsx'
import { skillRows } from '../data.js'

const icons = {
  SiJavascript, SiPython, SiPhp, SiReact, SiBootstrap, SiHtml5, SiCss,
  SiTailwindcss, SiAngular, SiSass, SiNodedotjs, SiExpress, FaJava, TbBrandCSharp,
}

export default function Skills() {
  return (
    <section id="skills" className="section container">
      <SectionHead
        center
        eyebrow="Veja minhas experiências"
        title="Linguagens e tecnologias"
        text="Minha stack de desenvolvimento, do front-end ao back-end."
      />
      <div className="badge-rows">
        {skillRows.map((row, r) => (
          <Reveal key={row.label} delay={r * 120}>
            <h3 className="stack__label">{row.label}</h3>
            <ul className="badge-row" aria-label={row.label}>
              {row.items.map((s) => {
                const I = icons[s.icon]
                return (
                  <li key={s.name} className="badge">
                    {I && <I size={15} />}
                    {s.name}
                  </li>
                )
              })}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
