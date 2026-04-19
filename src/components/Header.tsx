import { ShoppingCart } from 'lucide-react'
import { useCart } from '../context/CartContext'

interface HeaderProps {
  onCartOpen: () => void
}

export function Header({ onCartOpen }: HeaderProps) {
  const { count } = useCart()

  return (
    <header style={{
      background: 'rgba(255,255,255,0.95)',
      backdropFilter: 'blur(16px)',
      borderBottom: '2px solid rgba(168,85,247,0.25)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxShadow: '0 2px 20px rgba(168,85,247,0.1)',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img
            src="/sintetiza-3d/logo.png"
            alt="Sintetiza 3D"
            style={{ height: 40, objectFit: 'contain', display: 'block' }}
          />
        </a>

        {/* Nav */}
        <nav style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
          {[
            { label: 'Produtos', href: '#produtos' },
            { label: 'Personalizados', href: '#personalizados' },
          ].map(item => (
            <a key={item.label} href={item.href} className="font-display" style={{
              fontSize: 10, letterSpacing: '0.12em', color: '#5b21b6',
              textDecoration: 'none', textTransform: 'uppercase', transition: 'color 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = '#a855f7')}
              onMouseLeave={e => (e.currentTarget.style.color = '#5b21b6')}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Cart */}
        <button onClick={onCartOpen} style={{
          position: 'relative', background: 'transparent',
          border: '1px solid rgba(168,85,247,0.3)',
          borderRadius: 8, width: 40, height: 40, display: 'flex', alignItems: 'center',
          justifyContent: 'center', cursor: 'pointer', color: '#7c3aed',
          transition: 'all 0.2s',
        }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = '#a855f7'
            e.currentTarget.style.background = 'rgba(168,85,247,0.08)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'rgba(168,85,247,0.3)'
            e.currentTarget.style.background = 'transparent'
          }}
        >
          <ShoppingCart size={16} />
          {count > 0 && (
            <span style={{
              position: 'absolute', top: -6, right: -6,
              width: 18, height: 18, borderRadius: '50%',
              background: 'linear-gradient(135deg, #a855f7, #bf00ff)',
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
