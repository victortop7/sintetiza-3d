export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: Category
  tags: string[]
  inStock: boolean
  featured?: boolean
}

export type Category = 'chaveiros' | 'miniaturas' | 'decoracao' | 'personalizados'

export interface CartItem {
  product: Product
  quantity: number
}
