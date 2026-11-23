import Icon from './Icon.jsx'
import Reveal from './Reveal.jsx'
import Eyebrow from './Eyebrow.jsx'
import Spotlight from './Spotlight.jsx'
import { profile } from '../data.js'

const items = [
  { icon: 'mail', label: 'E-mail', value: profile.email, href: `mailto:${profile.email}` },
  { icon: 'linkedin', label: 'LinkedIn', value: 'Bruna Carrassai', href: profile.linkedin },
  { icon: 'chat', label: 'WhatsApp', value: 'Vamos conversar', href: profile.whatsapp },
]

export default function Contact() {
  return (
    <section id="contact" className="section container">
      <Reveal className="contact">
        <div className="contact__glow" />
        <Eyebrow text="Entre em" />
        <h2>Contato</h2>
        <p className="contact__text">
          Tem um projeto, uma vaga ou só quer trocar uma ideia? Me chama por onde for melhor para você.
        </p>
        <div className="contact__grid">
          {items.map((it) => (
            <Spotlight
              as="a"
              key={it.label}
              className="card contact-card"
              href={it.href}
              target={it.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer"
            >
              <span className="focus-card__icon">
                <Icon name={it.icon} size={22} />
              </span>
              <span className="contact-card__label">{it.label}</span>
              <span className="contact-card__value">{it.value}</span>
              <Icon name="arrowUpRight" size={18} className="contact-card__arrow" />
            </Spotlight>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
