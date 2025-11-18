"use client"

import { useState } from "react"
import { categories as initialCategories } from "@/app/data/mockData"
import { Card } from "@/components/ui/Card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/Input"
import { Edit, Trash2 } from 'lucide-react'

export default function CategoriesPage() {
  const [categories, setCategories] = useState(initialCategories)
  const [isAdding, setIsAdding] = useState(false)
  const [newCategory, setNewCategory] = useState({ name: "", slug: "" })

  const handleAddCategory = (e: React.FormEvent) => {
    e.preventDefault()
    if (newCategory.name && newCategory.slug) {
      setCategories([
        ...categories,
        {
          id: `cat-${Date.now()}`,
          name: newCategory.name,
          slug: newCategory.slug,
        },
      ])
      setNewCategory({ name: "", slug: "" })
      setIsAdding(false)
    }
  }

  const handleDelete = (id: string) => {
    if (confirm("Apakah Anda yakin ingin menghapus kategori ini?")) {
      setCategories(categories.filter((c) => c.id !== id))
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Kelola Kategori</h1>
        <Button onClick={() => setIsAdding(!isAdding)}>
          {isAdding ? "Batal" : "Tambah Kategori"}
        </Button>
      </div>

      {isAdding && (
        <Card className="p-6 mb-8">
          <form onSubmit={handleAddCategory} className="space-y-4">
            <Input
              label="Nama Kategori"
              value={newCategory.name}
              onChange={(e) =>
                setNewCategory((prev) => ({ ...prev, name: e.target.value }))
              }
              placeholder="Masukkan nama kategori"
              required
            />

            <Input
              label="Slug"
              value={newCategory.slug}
              onChange={(e) =>
                setNewCategory((prev) => ({ ...prev, slug: e.target.value }))
              }
              placeholder="Masukkan slug (contoh: pupuk)"
              required
            />

            <Button type="submit">Tambah Kategori</Button>
          </form>
        </Card>
      )}

      <Card className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Nama
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Slug
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tr
                  key={category.id}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="py-3 px-4 text-gray-900 font-semibold">
                    {category.name}
                  </td>
                  <td className="py-3 px-4 text-gray-700">{category.slug}</td>
                  <td className="py-3 px-4 flex gap-2">
                    <Button size="sm" variant="secondary">
                      <Edit size={16} />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleDelete(category.id)}
                    >
                      <Trash2 size={16} />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
