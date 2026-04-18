import { ArrowRight, Cpu, Layers, Zap } from 'lucide-react'

export function Hero() {
  return (
    <section style={{ position: 'relative', padding: '100px 24px 80px', textAlign: 'center', overflow: 'hidden' }}>
      {/* Radial glow bg */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 700, height: 500,
        background: 'radial-gradient(ellipse, rgba(168,85,247,0.08) 0%, rgba(109,40,217,0.05) 40%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Badge */}
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 28 }}>
        <div style={{
          padding: '6px 16px', borderRadius: 100,
          border: '1px solid rgba(168,85,247,0.25)',
          background: 'rgba(168,85,247,0.07)',
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <span style={{
            width: 6, height: 6, borderRadius: '50%',
            background: 'var(--green)', display: 'inline-block',
            boxShadow: '0 0 6px var(--green)',
          }} className="animate-pulse-glow" />
          <span className="font-display" style={{ fontSize: 9, letterSpacing: '0.2em', color: 'var(--purple)', textTransform: 'uppercase' }}>
            Impressão 3D Premium — Fortaleza/CE
          </span>
        </div>
      </div>

      {/* Logo grande no hero */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 32 }}>
        <img
          src="/sintetiza-3d/logo.png"
          alt="Sintetiza 3D"
          style={{
            height: 'clamp(80px, 12vw, 140px)',
            objectFit: 'contain',
            filter: 'drop-shadow(0 0 20px rgba(168,85,247,0.5)) drop-shadow(0 0 40px rgba(168,85,247,0.2))',
          }}
          className="animate-flicker"
        />
      </div>

      <p style={{
        fontSize: 16, color: 'var(--text-dim)', maxWidth: 480, margin: '0 auto 40px',
        lineHeight: 1.7, fontWeight: 300,
      }}>
        Chaveiros, miniaturas e decoração impressos em 3D com precisão de camadas. Do geek ao personalizado.
      </p>

      {/* CTAs */}
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
        <a href="#produtos">
          <button className="btn-primary" style={{ padding: '14px 28px', borderRadius: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
            Ver Produtos <ArrowRight size={14} />
          </button>
        </a>
        <a href="#personalizados">
          <button className="btn-ghost" style={{ padding: '14px 28px', borderRadius: 8 }}>
            Personalizar
          </button>
        </a>
      </div>

      {/* Stats */}
      <div style={{ display: 'flex', gap: 48, justifyContent: 'center', marginTop: 64, flexWrap: 'wrap' }}>
        {[
          { icon: <Layers size={16} />, value: '0.1mm', label: 'Resolução' },
          { icon: <Cpu size={16} />, value: 'PLA+', label: 'Material' },
          { icon: <Zap size={16} />, value: '48h', label: 'Entrega' },
        ].map(({ icon, value, label }) => (
          <div key={label} style={{ textAlign: 'center' }}>
            <div style={{ color: 'var(--purple)', marginBottom: 8, display: 'flex', justifyContent: 'center' }}>{icon}</div>
            <div className="font-mono" style={{ fontSize: 20, fontWeight: 600, color: 'var(--text)', lineHeight: 1 }}>{value}</div>
            <div className="font-display" style={{ fontSize: 9, color: 'var(--text-muted)', letterSpacing: '0.15em', marginTop: 4, textTransform: 'uppercase' }}>{label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
