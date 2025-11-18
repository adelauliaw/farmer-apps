"use client"

import { useState, useMemo } from "react"
import { PageHeader } from "@/components/PageHeader"
import { ProductCard } from "@/components/ProductCard"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { products, categories } from "@/app/data/mockData"

export default function ProductsPage() {
  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("newest")

  const filteredProducts = useMemo(() => {
    let result = products.filter(
      (p) =>
        p.isActive &&
        p.name.toLowerCase().includes(search.toLowerCase()) &&
        (selectedCategory === "all" || p.categoryId === selectedCategory)
    )

    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        result.sort((a, b) => b.price - a.price)
        break
      default:
        // newest - keep original order
        break
    }

    return result
  }, [search, selectedCategory, sortBy])

  return (
    <>
      <PageHeader title="Semua Produk" />

      <div className="container-main mb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {/* Search */}
          <div className="md:col-span-2">
            <Input
              placeholder="Cari produk..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Category Filter */}
          <Select
            options={[
              { value: "all", label: "Semua Kategori" },
              ...categories.map((cat) => ({ value: cat.id, label: cat.name })),
            ]}
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          />

          {/* Sort */}
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

        {/* Results */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">Tidak ada produk yang ditemukan.</p>
          </div>
        ) : (
          <>
            <p className="text-gray-600 mb-6">
              Ditemukan {filteredProducts.length} produk
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  )
}
