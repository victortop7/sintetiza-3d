import { Zap, MessageCircle } from 'lucide-react'

const WHATSAPP_NUMBER = '5585999999999'
const INSTAGRAM = 'sintetiza3d'

export function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '48px 24px',
      background: 'var(--surface)',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 32 }}>
        {/* Brand */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <div style={{
              width: 28, height: 28,
              background: 'linear-gradient(135deg, var(--cyan), var(--purple))',
              borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Zap size={14} color="#02020a" strokeWidth={2.5} />
            </div>
            <span className="font-display" style={{ fontSize: 13, fontWeight: 700, color: 'var(--cyan)', letterSpacing: '0.08em' }}>
              SINTETIZA 3D
            </span>
          </div>
          <p style={{ margin: 0, fontSize: 13, color: 'var(--text-dim)', lineHeight: 1.6, maxWidth: 260 }}>
            Impressão 3D de qualidade em Fortaleza/CE. Chaveiros, miniaturas e produtos personalizados.
          </p>
        </div>

        {/* Contact */}
        <div>
          <div className="font-display" style={{ fontSize: 9, letterSpacing: '0.2em', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 16 }}>
            Contato
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--text-dim)', textDecoration: 'none', fontSize: 13, transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--green)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-dim)')}
            >
              <MessageCircle size={14} /> WhatsApp
            </a>
            <a href={`https://instagram.com/${INSTAGRAM}`} target="_blank" rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--text-dim)', textDecoration: 'none', fontSize: 13, transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--purple)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-dim)')}
            >
              📸 @{INSTAGRAM}
            </a>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: '32px auto 0', paddingTop: 24, borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
        <span className="font-mono" style={{ fontSize: 11, color: 'var(--text-muted)' }}>
          © 2025 Sintetiza 3D — Fortaleza, CE
        </span>
        <span className="font-display" style={{ fontSize: 8, letterSpacing: '0.2em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
          Impressão FDM • PLA Premium
        </span>
      </div>
    </footer>
  )
}
