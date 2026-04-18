import { ShoppingCart } from 'lucide-react'
import { useCart } from '../context/CartContext'

interface HeaderProps {
  onCartOpen: () => void
}

export function Header({ onCartOpen }: HeaderProps) {
  const { count } = useCart()

  return (
    <header
      style={{
        background: 'rgba(4, 2, 10, 0.88)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img
            src="/sintetiza-3d/logo.png"
            alt="Sintetiza 3D"
            style={{ height: 38, objectFit: 'contain', filter: 'drop-shadow(0 0 8px rgba(168,85,247,0.4))' }}
          />
        </a>

        {/* Nav */}
        <nav style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
          {[
            { label: 'Produtos', href: '#produtos' },
            { label: 'Personalizados', href: '#personalizados' },
          ].map(item => (
            <a key={item.label} href={item.href} className="font-display" style={{
              fontSize: 10, letterSpacing: '0.12em', color: 'var(--text-dim)',
              textDecoration: 'none', textTransform: 'uppercase',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--purple)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-dim)')}
            >
              {item.label}
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
            e.currentTarget.style.borderColor = 'var(--purple)'
            e.currentTarget.style.color = 'var(--purple)'
            e.currentTarget.style.boxShadow = '0 0 12px var(--purple-dim)'
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
              background: 'linear-gradient(135deg, var(--purple), var(--magenta))',
              color: '#fff', fontSize: 9, fontWeight: 700,
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
