"use client"

import { useState, useMemo } from "react"
import { PageHeader } from "@/components/PageHeader"
import { ProductCard } from "@/components/ProductCard"
import { Select } from "@/components/ui/select"
import { products, categories } from "@/app/data/mockData"

interface CategoryPageProps {
  params: { slug: string }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = categories.find((c) => c.slug === params.slug)
  const [sortBy, setSortBy] = useState("newest")

  const categoryProducts = useMemo(() => {
    if (!category) return []

    let result = products.filter(
      (p) => p.isActive && p.categoryId === category.id
    )

    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        result.sort((a, b) => b.price - a.price)
        break
      default:
        break
    }

    return result
  }, [sortBy])

  if (!category) {
    return (
      <div className="container-main py-12">
        <p className="text-gray-600 text-center">Kategori tidak ditemukan</p>
      </div>
    )
  }

  return (
    <>
      <PageHeader
        title={category.name}
        breadcrumbs={[{ label: category.name, href: "#" }]}
      />

      <div className="container-main mb-12">
        {/* Sort */}
        <div className="mb-8 flex justify-between items-center">
          <p className="text-gray-600">
            Ditemukan {categoryProducts.length} produk
          </p>
          <Select
            options={[
              { value: "newest", label: "Terbaru" },
              { value: "price-low", label: "Harga Terendah" },
              { value: "price-high", label: "Harga Tertinggi" },
            ]}
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          />
        </div>

        {/* Products Grid */}
        {categoryProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Tidak ada produk dalam kategori ini.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </>
  )
}
