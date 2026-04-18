import { X, Trash2, Plus, Minus, ShoppingBag, MessageCircle } from 'lucide-react'
import { useCart } from '../context/CartContext'

const WHATSAPP_NUMBER = '5585999999999' // trocar pelo número real

interface CartProps {
  isOpen: boolean
  onClose: () => void
}

export function Cart({ isOpen, onClose }: CartProps) {
  const { items, remove, updateQty, total, clear } = useCart()

  function buildWhatsAppMessage() {
    const lines = items.map(i => `• ${i.product.name} x${i.quantity} — R$ ${(i.product.price * i.quantity).toFixed(2).replace('.', ',')}`)
    const text = [
      '🤖 *Pedido Sintetiza 3D*',
      '',
      ...lines,
      '',
      `*Total: R$ ${total.toFixed(2).replace('.', ',')}*`,
      '',
      'Gostaria de finalizar meu pedido!',
    ].join('\n')
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
  }

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0,
          background: 'rgba(2,2,10,0.7)',
          backdropFilter: 'blur(4px)',
          zIndex: 200,
        }}
      />

      {/* Panel */}
      <div
        className="animate-slide-in"
        style={{
          position: 'fixed', top: 0, right: 0, bottom: 0,
          width: 'min(400px, 100vw)',
          background: 'var(--surface)',
          borderLeft: '1px solid var(--border)',
          zIndex: 201,
          display: 'flex', flexDirection: 'column',
        }}
      >
        {/* Header */}
        <div style={{
          padding: '20px 24px', borderBottom: '1px solid var(--border)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <ShoppingBag size={18} color="var(--cyan)" />
            <span className="font-display" style={{ fontSize: 12, letterSpacing: '0.12em', color: 'var(--text)' }}>
              CARRINHO
            </span>
          </div>
          <button onClick={onClose} style={{
            background: 'transparent', border: '1px solid var(--border)', borderRadius: 6,
            width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', color: 'var(--text-dim)', transition: 'all 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--cyan)'; e.currentTarget.style.color = 'var(--cyan)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-dim)' }}
          >
            <X size={14} />
          </button>
        </div>

        {/* Items */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '16px 24px' }}>
          {items.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 0' }}>
              <ShoppingBag size={40} color="var(--text-muted)" style={{ marginBottom: 16 }} />
              <p className="font-display" style={{ fontSize: 10, letterSpacing: '0.15em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                Carrinho vazio
              </p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {items.map(item => (
                <div key={item.product.id} style={{
                  background: 'var(--surface-alt)', border: '1px solid var(--border)',
                  borderRadius: 10, padding: 14, display: 'flex', gap: 12, alignItems: 'center',
                }}>
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    style={{ width: 56, height: 56, objectFit: 'cover', borderRadius: 6, flexShrink: 0 }}
                  />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--text)', marginBottom: 4, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {item.product.name}
                    </div>
                    <div className="font-mono" style={{ fontSize: 13, color: 'var(--cyan)', fontWeight: 600 }}>
                      R$ {(item.product.price * item.quantity).toFixed(2).replace('.', ',')}
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <button onClick={() => updateQty(item.product.id, item.quantity - 1)} style={{
                        width: 24, height: 24, border: '1px solid var(--border)', borderRadius: 4,
                        background: 'transparent', cursor: 'pointer', color: 'var(--text-dim)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.15s',
                      }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--cyan)'; e.currentTarget.style.color = 'var(--cyan)' }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-dim)' }}
                      >
                        <Minus size={10} />
                      </button>
                      <span className="font-mono" style={{ fontSize: 13, color: 'var(--text)', width: 20, textAlign: 'center' }}>
                        {item.quantity}
                      </span>
                      <button onClick={() => updateQty(item.product.id, item.quantity + 1)} style={{
                        width: 24, height: 24, border: '1px solid var(--border)', borderRadius: 4,
                        background: 'transparent', cursor: 'pointer', color: 'var(--text-dim)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.15s',
                      }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--cyan)'; e.currentTarget.style.color = 'var(--cyan)' }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-dim)' }}
                      >
                        <Plus size={10} />
                      </button>
                    </div>
                    <button onClick={() => remove(item.product.id)} style={{
                      background: 'transparent', border: 'none', cursor: 'pointer',
                      color: 'var(--text-muted)', transition: 'color 0.15s', padding: 2,
                    }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#ef4444')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
                    >
                      <Trash2 size={12} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div style={{ padding: '20px 24px', borderTop: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <span className="font-display" style={{ fontSize: 10, letterSpacing: '0.1em', color: 'var(--text-dim)' }}>TOTAL</span>
              <span className="font-mono" style={{ fontSize: 22, fontWeight: 700, color: 'var(--cyan)' }}>
                R$ {total.toFixed(2).replace('.', ',')}
              </span>
            </div>
            <a href={buildWhatsAppMessage()} target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
              <button className="btn-primary" style={{
                width: '100%', padding: '14px', borderRadius: 10,
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontSize: 11,
              }}>
                <MessageCircle size={16} />
                Finalizar pelo WhatsApp
              </button>
            </a>
            <button onClick={clear} className="btn-ghost" style={{
              width: '100%', marginTop: 8, padding: '10px', borderRadius: 10, fontSize: 9,
            }}>
              Limpar carrinho
            </button>
          </div>
        )}
      </div>
    </>
  )
}
