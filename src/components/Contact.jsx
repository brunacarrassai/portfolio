import { useState } from 'react'
import Icon from './Icon.jsx'
import Reveal from './Reveal.jsx'
import Eyebrow from './Eyebrow.jsx'
import avatar from '../assets/avatar.webp'
import { profile } from '../data.js'

const MAX = 1000
const empty = { nome: '', telefone: '', email: '', mensagem: '' }

const socials = [
  { icon: 'github', label: 'GitHub', href: profile.github },
  { icon: 'linkedin', label: 'LinkedIn', href: profile.linkedin },
  { icon: 'chat', label: 'WhatsApp', href: profile.whatsapp },
  { icon: 'mail', label: 'E-mail', href: `mailto:${profile.email}` },
]

// (11) 91234-5678
function maskPhone(v) {
  const d = v.replace(/\D/g, '').slice(0, 11)
  if (d.length <= 2) return d
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
}

export default function Contact() {
  const [form, setForm] = useState(empty)
  const [status, setStatus] = useState('')

  const set = (key) => (e) => {
    let value = e.target.value
    if (key === 'telefone') value = maskPhone(value)
    if (key === 'mensagem') value = value.slice(0, MAX)
    setForm((f) => ({ ...f, [key]: value }))
    setStatus('')
  }

  // Site estático: ao enviar, abre o app de e-mail já com a mensagem pronta
  const onSubmit = (e) => {
    e.preventDefault()
    const subject = `Contato pelo portfólio — ${form.nome}`
    const body = `Nome: ${form.nome}\nTelefone: ${form.telefone || '-'}\nE-mail: ${form.email}\n\n${form.mensagem}`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setStatus('Abrindo seu aplicativo de e-mail… é só confirmar o envio por lá.')
  }

  return (
    <section id="contact" className="section container">
      <div className="talk">
        <Reveal className="talk__info">
          <Eyebrow text="Vamos conversar" />
          <h2>Fique à vontade para entrar em contato</h2>

          <div className="talk__me">
            <img src={avatar} alt="" className="talk__avatar" loading="lazy" />
            <div>
              <p className="talk__name">{profile.name}</p>
              <p className="talk__role">Desenvolvedora Front-end</p>
            </div>
          </div>

          <ul className="talk__social">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  className="icon-btn icon-btn--sq"
                  href={s.href}
                  aria-label={s.label}
                  title={s.label}
                  target={s.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noreferrer"
                >
                  <Icon name={s.icon} size={18} />
                </a>
              </li>
            ))}
          </ul>

          <p className="talk__text">
            Tem uma ideia de projeto? Ou só quer trocar uma ideia sobre tecnologia? Mande um alô. Estou
            sempre aberta a novas oportunidades.
          </p>
          <a className="talk__mail" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </Reveal>

        <Reveal delay={120}>
          <form className="form" onSubmit={onSubmit}>
            <label className="field">
              <span>Nome</span>
              <input type="text" required placeholder="Seu nome" value={form.nome} onChange={set('nome')} autoComplete="name" />
            </label>

            <div className="form__row">
              <label className="field">
                <span>Telefone</span>
                <input type="tel" placeholder="(00) 00000-0000" value={form.telefone} onChange={set('telefone')} autoComplete="tel" />
              </label>
              <label className="field">
                <span>E-mail</span>
                <input type="email" required placeholder="voce@exemplo.com" value={form.email} onChange={set('email')} autoComplete="email" />
              </label>
            </div>

            <label className="field">
              <span>Mensagem</span>
              <textarea required rows={5} placeholder="Como posso ajudar?" value={form.mensagem} onChange={set('mensagem')} />
              <small className="field__count">
                {form.mensagem.length}/{MAX} caracteres
              </small>
            </label>

            <p className="form__hint">Insira qualquer informação relevante aqui.</p>

            <div className="form__actions">
              <button type="button" className="btn-text" onClick={() => { setForm(empty); setStatus('') }}>
                Limpar formulário
              </button>
              <button type="submit" className="btn btn--primary">
                Enviar mensagem <Icon name="arrowRight" size={16} />
              </button>
            </div>
            {status && (
              <p className="form__status" role="status">
                {status}
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
