"use client"

import { useState } from "react"
import { useRouter } from 'next/navigation'
import { products, categories } from "@/app/data/mockData"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"

interface EditProductPageProps {
  params: { id: string }
}

export default function EditProductPage({ params }: EditProductPageProps) {
  const product = products.find((p) => p.id === params.id)
  const router = useRouter()

  if (!product) {
    return (
      <div>
        <p className="text-gray-600">Produk tidak ditemukan</p>
      </div>
    )
  }

  const [formData, setFormData] = useState({
    name: product.name,
    categoryId: product.categoryId,
    price: product.price.toString(),
    stock: product.stock.toString(),
    unit: product.unit || "",
    shortDescription: product.shortDescription,
    description: product.description,
    isActive: product.isActive,
  })

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Produk berhasil diperbarui!")
    router.push("/admin/products")
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Edit Produk</h1>

      <Card className="p-6 max-w-2xl">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Nama Produk"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />

          <Select
            label="Kategori"
            name="categoryId"
            value={formData.categoryId}
            onChange={handleInputChange}
            options={categories.map((cat) => ({ value: cat.id, label: cat.name }))}
          />

          <Input
            label="Harga (Rp)"
            name="price"
            type="number"
            value={formData.price}
            onChange={handleInputChange}
            required
          />

          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Stok"
              name="stock"
              type="number"
              value={formData.stock}
              onChange={handleInputChange}
              required
            />

            <Input
              label="Satuan"
              name="unit"
              value={formData.unit}
              onChange={handleInputChange}
            />
          </div>

          <Input
            label="Deskripsi Singkat"
            name="shortDescription"
            value={formData.shortDescription}
            onChange={handleInputChange}
            required
          />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Deskripsi Lengkap
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-600 transition-colors font-sans"
              rows={5}
              required
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="isActive"
              id="isActive"
              checked={formData.isActive}
              onChange={handleInputChange}
              className="w-4 h-4"
            />
            <label htmlFor="isActive" className="text-sm font-medium text-gray-700">
              Produk Aktif
            </label>
          </div>

          <div className="flex gap-4 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.push("/admin/products")}
            >
              Batal
            </Button>
            <Button type="submit">Simpan Perubahan</Button>
          </div>
        </form>
      </Card>
    </div>
  )
}
