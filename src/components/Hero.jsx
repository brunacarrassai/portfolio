import { useEffect, useState } from 'react'
import Icon from './Icon.jsx'
import Eyebrow from './Eyebrow.jsx'
import { SiJavascript, SiPython } from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import avatar from '../assets/avatar.webp'
import { profile } from '../data.js'

function RoleRotator({ roles }) {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % roles.length), 2600)
    return () => clearInterval(t)
  }, [roles.length])
  return (
    <span className="rotator" aria-live="polite">
      {/* key força a re-animação a cada troca */}
      <span key={roles[i]} className="rotator__word gradient-text">
        {roles[i]}
      </span>
    </span>
  )
}

export default function Hero() {
  return (
    <section id="top" className="hero container">
      <div className="hero__text">
        <Eyebrow className="hero__eyebrow" text={profile.name} delay={300} />
        <h1 className="hero__title">
          Desenvolvedora <RoleRotator roles={profile.roles} />
        </h1>
        <p className="hero__lead">
          Desenvolvo aplicações web do front-end ao back-end, criando interfaces intuitivas, soluções
          eficientes e experiências digitais. Também exploro o desenvolvimento de games e a criação
          de arte 2D, unindo tecnologia e criatividade.
        </p>

        <div className="hero__cta">
          <a className="btn btn--primary" href={profile.cv} target="_blank" rel="noreferrer">
            <Icon name="file" size={16} /> Abrir Currículo
          </a>
          <a className="btn btn--ghost" href="#about">
            <Icon name="chevron" size={16} /> Sobre
          </a>
          <a className="btn btn--ghost" href="#projects">
            <Icon name="chevron" size={16} /> Projetos
          </a>
          <a className="btn btn--ghost" href="#contact">
            <Icon name="chevron" size={16} /> Vamos Conversar
          </a>
        </div>

        <div className="hero__social">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="icon-btn">
            <Icon name="github" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="icon-btn">
            <Icon name="linkedin" />
          </a>
        </div>
      </div>

      <div className="hero__visual">
        <div className="avatar">
          <div className="avatar__ring" />
          <span className="float-chip float-chip--a" title="JavaScript" role="img" aria-label="JavaScript">
            <SiJavascript size={26} color="#F7DF1E" />
          </span>
          <span className="float-chip float-chip--b" title="Python" role="img" aria-label="Python">
            <SiPython size={26} color="#4B8BBE" />
          </span>
          <span className="float-chip float-chip--c" title="Java" role="img" aria-label="Java">
            <FaJava size={26} color="#ED8B00" />
          </span>
          <img src={avatar} alt="Ilustração da Bruna Carrassai, de cabelo preto longo e braços cruzados" />
        </div>
      </div>

      <a href="#about" className="scroll-hint" aria-label="Rolar para Sobre">
        <span />
      </a>
    </section>
  )
}
