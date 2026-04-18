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

export type Category = 'chaveiros' | 'times' | 'personalizados'

export interface CartItem {
  product: Product
  quantity: number
}
