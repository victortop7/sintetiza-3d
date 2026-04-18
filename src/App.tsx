import { useState } from 'react'
import { CartProvider } from './context/CartContext'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ProductGrid } from './components/ProductGrid'
import { CustomSection } from './components/CustomSection'
import { Footer } from './components/Footer'
import { Cart } from './components/Cart'

export default function App() {
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <CartProvider>
      <Header onCartOpen={() => setCartOpen(true)} />
      <main>
        <Hero />
        <ProductGrid />
        <CustomSection />
      </main>
      <Footer />
      <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </CartProvider>
  )
}
