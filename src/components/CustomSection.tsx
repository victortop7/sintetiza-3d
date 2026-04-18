import { MessageCircle, Cpu, Package } from 'lucide-react'

const WHATSAPP_NUMBER = '5585999999999'

const steps = [
  { icon: <MessageCircle size={20} />, title: 'Fale conosco', desc: 'Envie sua ideia, referência ou arquivo STL pelo WhatsApp' },
  { icon: <Cpu size={20} />, title: 'Produzimos', desc: 'Fatiamos e imprimimos com máxima precisão em até 48h' },
  { icon: <Package size={20} />, title: 'Entregamos', desc: 'Retirada em Fortaleza ou envio pelos Correios' },
]

export function CustomSection() {
  const msg = encodeURIComponent('Olá! Gostaria de fazer um pedido personalizado na Sintetiza 3D.')

  return (
    <section id="personalizados" style={{
      padding: '80px 24px',
      background: 'linear-gradient(180deg, transparent 0%, rgba(0,245,255,0.03) 50%, transparent 100%)',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="font-display" style={{ fontSize: 10, letterSpacing: '0.2em', color: 'var(--purple)', textTransform: 'uppercase', marginBottom: 8 }}>
            // CUSTOM
          </div>
          <h2 className="font-display" style={{ margin: '0 0 16px', fontSize: 'clamp(20px, 3vw, 32px)', fontWeight: 700, color: 'var(--text)' }}>
            Quero algo personalizado
          </h2>
          <p style={{ color: 'var(--text-dim)', maxWidth: 480, margin: '0 auto', fontSize: 14, lineHeight: 1.7 }}>
            Trazemos qualquer modelo 3D à vida. Logos, personagens, peças técnicas — envie sua arte e a gente imprime.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, marginBottom: 48 }}>
          {steps.map(({ icon, title, desc }, i) => (
            <div key={title} style={{
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: 12, padding: 28, position: 'relative', overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 1,
                background: `linear-gradient(90deg, transparent, ${i === 0 ? 'var(--cyan)' : i === 1 ? 'var(--purple)' : 'var(--green)'}, transparent)`,
              }} />
              <div style={{
                width: 44, height: 44, borderRadius: 8, marginBottom: 16,
                background: i === 0 ? 'var(--cyan-dim)' : i === 1 ? 'var(--purple-dim)' : 'var(--green-dim)',
                border: `1px solid ${i === 0 ? 'rgba(0,245,255,0.2)' : i === 1 ? 'rgba(191,0,255,0.2)' : 'rgba(0,255,136,0.2)'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: i === 0 ? 'var(--cyan)' : i === 1 ? 'var(--purple)' : 'var(--green)',
              }}>
                {icon}
              </div>
              <div className="font-mono" style={{ fontSize: 9, color: 'var(--text-muted)', letterSpacing: '0.1em', marginBottom: 8 }}>
                0{i + 1}
              </div>
              <h3 style={{ margin: '0 0 8px', fontSize: 15, fontWeight: 600, color: 'var(--text)' }}>{title}</h3>
              <p style={{ margin: 0, fontSize: 13, color: 'var(--text-dim)', lineHeight: 1.6 }}>{desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`} target="_blank" rel="noopener noreferrer">
            <button className="btn-primary" style={{
              padding: '16px 36px', borderRadius: 10,
              display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 11,
            }}>
              <MessageCircle size={18} />
              Solicitar Orçamento no WhatsApp
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}
