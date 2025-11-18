export interface Category {
  id: string
  name: string
  slug: string
  description?: string
}

export interface Product {
  id: string
  name: string
  slug: string
  categoryId: string
  price: number
  stock: number
  unit?: string
  imageUrl: string
  shortDescription: string
  description: string
  isActive: boolean
  tags?: string[]
}

export interface CartItem {
  productId: string
  product: Product
  quantity: number
}

export interface Order {
  id: string
  customerName: string
  customerPhone: string
  status: "pending" | "paid" | "shipped" | "cancelled"
  totalPrice: number
  createdAt: string | Date
  items: OrderItem[]
}

export interface OrderItem {
  id: string
  orderId: string
  productId: string
  quantity: number
  price: number
}
