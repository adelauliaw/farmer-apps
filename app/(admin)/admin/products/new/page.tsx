"use client"

import { useState } from "react"
import { useRouter } from 'next/navigation'
import { Card } from "@/components/ui/Card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/Input"
import { Select } from "@/components/ui/Select"
import { categories } from "@/app/data/mockData"

export default function NewProductPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    categoryId: categories[0].id,
    price: "",
    stock: "",
    unit: "",
    shortDescription: "",
    description: "",
    isActive: true,
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
    alert("Produk berhasil ditambahkan!")
    router.push("/admin/products")
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Tambah Produk Baru</h1>

      <Card className="p-6 max-w-2xl">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Nama Produk"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Masukkan nama produk"
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
            placeholder="Masukkan harga"
            required
          />

          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Stok"
              name="stock"
              type="number"
              value={formData.stock}
              onChange={handleInputChange}
              placeholder="Masukkan jumlah stok"
              required
            />

            <Input
              label="Satuan"
              name="unit"
              value={formData.unit}
              onChange={handleInputChange}
              placeholder="Contoh: kg, sak, pcs"
            />
          </div>

          <Input
            label="Deskripsi Singkat"
            name="shortDescription"
            value={formData.shortDescription}
            onChange={handleInputChange}
            placeholder="Deskripsi singkat produk"
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
              placeholder="Deskripsi lengkap produk"
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
            <Button type="submit">Simpan Produk</Button>
          </div>
        </form>
      </Card>
    </div>
  )
}
