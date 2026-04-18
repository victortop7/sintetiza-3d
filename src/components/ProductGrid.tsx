import { useState } from 'react'
import { ProductCard } from './ProductCard'
import { products, categories } from '../data/products'
import type { Category } from '../types'

export function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState<'all' | Category>('all')

  const filtered = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory)

  return (
    <section id="produtos" style={{ padding: '80px 24px', maxWidth: 1280, margin: '0 auto' }}>
      {/* Section header */}
      <div style={{ marginBottom: 48, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
        <div>
          <div className="font-display" style={{ fontSize: 10, letterSpacing: '0.2em', color: 'var(--cyan)', textTransform: 'uppercase', marginBottom: 8 }}>
            // CATÁLOGO
          </div>
          <h2 className="font-display" style={{ margin: 0, fontSize: 'clamp(20px, 3vw, 32px)', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.01em' }}>
            Produtos
          </h2>
        </div>

        {/* Category filter */}
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`btn-ghost ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id as 'all' | Category)}
              style={{ padding: '8px 14px', borderRadius: 6 }}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
        gap: 20,
      }}>
        {filtered.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>
    </section>
  )
}
