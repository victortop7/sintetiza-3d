import { ShoppingCart, Package } from 'lucide-react'
import type { Product } from '../types'
import { useCart } from '../context/CartContext'

interface ProductCardProps {
  product: Product
  index: number
}

export function ProductCard({ product, index }: ProductCardProps) {
  const { add } = useCart()

  const categoryColors: Record<string, string> = {
    chaveiros: 'var(--cyan)',
    miniaturas: 'var(--purple)',
    decoracao: 'var(--green)',
    personalizados: 'var(--amber)',
  }

  const color = categoryColors[product.category] ?? 'var(--cyan)'

  return (
    <div
      className="product-card animate-fade-up"
      style={{
        borderRadius: 12,
        animationDelay: `${index * 0.06}s`,
        opacity: 0,
        animationFillMode: 'forwards',
      }}
    >
      {/* Image */}
      <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '1 / 1' }}>
        <img
          src={product.image}
          alt={product.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease', display: 'block' }}
          onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.06)')}
          onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
        />
        {/* Category badge */}
        <div style={{
          position: 'absolute', top: 10, left: 10,
          padding: '3px 8px', borderRadius: 4,
          background: 'rgba(2,2,10,0.8)',
          border: `1px solid ${color}44`,
          backdropFilter: 'blur(8px)',
        }}>
          <span className="font-display" style={{ fontSize: 8, letterSpacing: '0.15em', color, textTransform: 'uppercase' }}>
            {product.category}
          </span>
        </div>
        {/* Out of stock overlay */}
        {!product.inStock && (
          <div style={{
            position: 'absolute', inset: 0,
            background: 'rgba(2,2,10,0.7)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span className="font-display" style={{ fontSize: 11, letterSpacing: '0.2em', color: 'var(--text-dim)' }}>ESGOTADO</span>
          </div>
        )}
        {product.featured && (
          <div style={{
            position: 'absolute', top: 10, right: 10,
            width: 8, height: 8, borderRadius: '50%',
            background: 'var(--green)',
            boxShadow: '0 0 8px var(--green)',
          }} />
        )}
      </div>

      {/* Info */}
      <div style={{ padding: '16px' }}>
        <h3 style={{ margin: '0 0 6px', fontSize: 13, fontWeight: 600, color: 'var(--text)', lineHeight: 1.3 }}>
          {product.name}
        </h3>
        <p style={{ margin: '0 0 16px', fontSize: 12, color: 'var(--text-dim)', lineHeight: 1.5 }}>
          {product.description}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap', marginBottom: 16 }}>
          {product.tags.slice(0, 2).map(tag => (
            <span key={tag} style={{
              padding: '2px 6px', borderRadius: 3,
              background: 'var(--surface-alt)', border: '1px solid var(--border)',
              fontSize: 9, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)',
            }}>
              #{tag}
            </span>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
          <div>
            <div className="font-mono" style={{ fontSize: 18, fontWeight: 600, color, lineHeight: 1 }}>
              R$ {product.price.toFixed(2).replace('.', ',')}
            </div>
            <div className="font-display" style={{ fontSize: 8, color: 'var(--text-muted)', letterSpacing: '0.1em', marginTop: 2 }}>
              {product.inStock ? 'EM ESTOQUE' : 'INDISPONÍVEL'}
            </div>
          </div>

          <button
            className="btn-primary"
            disabled={!product.inStock}
            onClick={() => add(product)}
            style={{
              padding: '10px 14px', borderRadius: 8,
              display: 'flex', alignItems: 'center', gap: 6,
              opacity: product.inStock ? 1 : 0.4,
              cursor: product.inStock ? 'pointer' : 'not-allowed',
            }}
          >
            {product.inStock ? <ShoppingCart size={13} /> : <Package size={13} />}
            {product.inStock ? 'Comprar' : 'Esgotado'}
          </button>
        </div>
      </div>
    </div>
  )
}
