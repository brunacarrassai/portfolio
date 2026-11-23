import Reveal from './Reveal.jsx'
import Eyebrow from './Eyebrow.jsx'

export default function SectionHead({ eyebrow, title, text, center }) {
  return (
    <Reveal className={`section-head ${center ? 'section-head--center' : ''}`}>
      <Eyebrow text={eyebrow} />
      <h2>{title}</h2>
      {text && <p className="section-head__text">{text}</p>}
    </Reveal>
  )
}
