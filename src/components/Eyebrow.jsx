import { useEffect, useRef, useState } from 'react'

// Rótulo "> TEXTO" com efeito de digitação (começa quando entra na tela)
export default function Eyebrow({ text, className = 'eyebrow', delay = 0 }) {
  const full = `> ${text}`
  const ref = useRef(null)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      setCount(full.length)
      return
    }
    let timer, interval
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        timer = setTimeout(() => {
          let n = 0
          interval = setInterval(() => {
            n += 1
            setCount(n)
            if (n >= full.length) clearInterval(interval)
          }, 70)
        }, delay)
      },
      { threshold: 0.6 },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [full, delay])

  return (
    <p ref={ref} className={`${className} typed`} aria-label={full}>
      <span aria-hidden="true">{full.slice(0, count)}</span>
      <span className="typed__caret" aria-hidden="true" />
      {/* texto restante invisível: reserva o espaço e evita pulos no layout */}
      <span className="typed__rest" aria-hidden="true">{full.slice(count)}</span>
    </p>
  )
}
