"use client"

import { useState } from "react"
import { useRouter } from 'next/navigation'
import Link from "next/link"
import { PageHeader } from "@/components/PageHeader"
import { ProductCard } from "@/components/ProductCard"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { products, categories } from "@/app/data/mockData"
import { useCart } from "@/app/context/CartContext"
import { ChevronLeft, Minus, Plus, ShoppingCart } from 'lucide-react'

interface ProductDetailPageProps {
  params: { slug: string }
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = products.find((p) => p.slug === params.slug)
  const { addToCart } = useCart()
  const router = useRouter()
  const [quantity, setQuantity] = useState(1)

  if (!product) {
    return (
      <div className="container-main py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Produk tidak ditemukan</h2>
          <Link href="/products">
            <Button>Kembali ke Produk</Button>
          </Link>
        </div>
      </div>
    )
  }

  const category = categories.find((c) => c.id === product.categoryId)
  const relatedProducts = products.filter(
    (p) => p.categoryId === product.categoryId && p.id !== product.id
  )

  const handleAddToCart = () => {
    addToCart(product, quantity)
    router.push("/cart")
  }

  return (
    <>
      <PageHeader
        title={product.name}
        breadcrumbs={[
          { label: "Produk", href: "/products" },
          { label: category?.name || "", href: `/categories/${category?.slug}` },
          { label: product.name, href: "#" },
        ]}
      />

      <div className="container-main mb-16">
        {/* Product Detail */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Image */}
          <div className="flex items-center justify-center bg-gray-100 rounded-lg p-8">
            <img
              src={product.imageUrl || "/placeholder.svg"}
              alt={product.name}
              className="max-w-full h-auto"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>

            <div className="mb-6">
              <p className="text-3xl font-bold text-green-600 mb-2">
                Rp {product.price.toLocaleString("id-ID")}
              </p>
              {product.unit && (
                <p className="text-gray-600">Per {product.unit}</p>
              )}
            </div>

            <div className="mb-6 pb-6 border-b border-gray-200">
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>

            <div className="mb-6">
              <p className="text-sm font-semibold text-gray-600 mb-2">Ketersediaan Stok</p>
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-600 h-2 rounded-full transition-all"
                    style={{
                      width: `${Math.min((product.stock / 100) * 100, 100)}%`,
                    }}
                  />
                </div>
                <p className="font-semibold text-gray-900">{product.stock} tersedia</p>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mb-6">
              <p className="text-sm font-semibold text-gray-600 mb-3">Jumlah</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 border-2 border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Minus size={20} />
                </button>
                <Input
                  type="number"
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                  }
                  className="text-center w-16"
                />
                <button
                  onClick={() =>
                    setQuantity(Math.min(product.stock, quantity + 1))
                  }
                  className="p-2 border-2 border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Plus size={20} />
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <Button
                onClick={handleAddToCart}
                size="lg"
                className="flex-1 flex items-center justify-center gap-2"
              >
                <ShoppingCart size={20} />
                Tambah ke Keranjang
              </Button>
              <Link href="/products" className="flex-1">
                <Button variant="outline" size="lg" className="w-full">
                  Lanjut Belanja
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-8">Produk Terkait</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.slice(0, 4).map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  )
}
