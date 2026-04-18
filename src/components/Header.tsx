import { ShoppingCart, Zap } from 'lucide-react'
import { useCart } from '../context/CartContext'

interface HeaderProps {
  onCartOpen: () => void
}

export function Header({ onCartOpen }: HeaderProps) {
  const { count } = useCart()

  return (
    <header
      style={{
        background: 'rgba(2, 2, 10, 0.85)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 32, height: 32,
            background: 'linear-gradient(135deg, var(--cyan), var(--purple))',
            borderRadius: 6,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Zap size={16} color="#02020a" strokeWidth={2.5} />
          </div>
          <div>
            <div className="font-display animate-flicker" style={{ fontSize: 14, fontWeight: 700, color: 'var(--cyan)', letterSpacing: '0.08em', lineHeight: 1 }}>
              SINTETIZA
            </div>
            <div className="font-display" style={{ fontSize: 9, color: 'var(--text-muted)', letterSpacing: '0.2em' }}>
              3D STORE
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
          {['Produtos', 'Personalizados', 'Sobre'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="font-display" style={{
              fontSize: 10, letterSpacing: '0.12em', color: 'var(--text-dim)',
              textDecoration: 'none', textTransform: 'uppercase',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--cyan)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-dim)')}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Cart */}
        <button onClick={onCartOpen} style={{
          position: 'relative', background: 'transparent', border: '1px solid var(--border)',
          borderRadius: 8, width: 40, height: 40, display: 'flex', alignItems: 'center',
          justifyContent: 'center', cursor: 'pointer', color: 'var(--text-dim)',
          transition: 'all 0.2s',
        }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'var(--cyan)'
            e.currentTarget.style.color = 'var(--cyan)'
            e.currentTarget.style.boxShadow = '0 0 12px var(--cyan-dim)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'var(--border)'
            e.currentTarget.style.color = 'var(--text-dim)'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          <ShoppingCart size={16} />
          {count > 0 && (
            <span style={{
              position: 'absolute', top: -6, right: -6,
              width: 18, height: 18, borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--cyan), var(--purple))',
              color: 'var(--bg)', fontSize: 9, fontWeight: 700,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--font-display)',
            }}>
              {count}
            </span>
          )}
        </button>
      </div>
    </header>
  )
}
