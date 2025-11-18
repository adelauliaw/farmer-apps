"use client"

import { useState } from "react"
import Link from "next/link"
import { products as initialProducts, categories } from "@/app/data/mockData"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Edit, Trash2 } from 'lucide-react'

export default function AdminProductsPage() {
  const [products, setProducts] = useState(initialProducts)

  const handleDelete = (id: string) => {
    if (confirm("Apakah Anda yakin ingin menghapus produk ini?")) {
      setProducts(products.filter((p) => p.id !== id))
    }
  }

  const getCategoryName = (categoryId: string) => {
    return categories.find((c) => c.id === categoryId)?.name || "Unknown"
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Kelola Produk</h1>
        <Link href="/admin/products/new">
          <Button>Tambah Produk</Button>
        </Link>
      </div>

      <Card className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Nama
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Kategori
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Harga
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Stok
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Status
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="py-3 px-4 text-gray-900 font-semibold">
                    {product.name}
                  </td>
                  <td className="py-3 px-4 text-gray-700">
                    {getCategoryName(product.categoryId)}
                  </td>
                  <td className="py-3 px-4 text-gray-900 font-semibold">
                    Rp {product.price.toLocaleString("id-ID")}
                  </td>
                  <td className="py-3 px-4 text-gray-700">{product.stock}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        product.isActive
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {product.isActive ? "Aktif" : "Tidak Aktif"}
                    </span>
                  </td>
                  <td className="py-3 px-4 flex gap-2">
                    <Link href={`/admin/products/${product.id}`}>
                      <Button size="sm" variant="secondary">
                        <Edit size={16} />
                      </Button>
                    </Link>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleDelete(product.id)}
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
