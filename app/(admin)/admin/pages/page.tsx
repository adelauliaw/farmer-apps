"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Edit, Trash2 } from 'lucide-react'

interface Page {
  id: string
  title: string
  slug: string
  content: string
}

export default function PagesPage() {
  const [pages, setPages] = useState<Page[]>([
    { id: "1", title: "Tentang Kami", slug: "about", content: "..." },
    { id: "2", title: "Hubungi Kami", slug: "contact", content: "..." },
  ])

  const [isEditing, setIsEditing] = useState<string | null>(null)
  const [editContent, setEditContent] = useState("")

  const handleEdit = (page: Page) => {
    setIsEditing(page.id)
    setEditContent(page.content)
  }

  const handleSave = (id: string) => {
    setPages(
      pages.map((p) => (p.id === id ? { ...p, content: editContent } : p))
    )
    setIsEditing(null)
  }

  const handleDelete = (id: string) => {
    if (confirm("Apakah Anda yakin ingin menghapus halaman ini?")) {
      setPages(pages.filter((p) => p.id !== id))
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Kelola Halaman</h1>

      <div className="space-y-4">
        {pages.map((page) => (
          <Card key={page.id} className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {page.title}
                </h3>
                <p className="text-sm text-gray-600">/{page.slug}</p>
              </div>
              <div className="flex gap-2">
                {isEditing !== page.id && (
                  <>
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => handleEdit(page)}
                    >
                      <Edit size={16} />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleDelete(page.id)}
                    >
                      <Trash2 size={16} />
                    </Button>
                  </>
                )}
              </div>
            </div>

            {isEditing === page.id ? (
              <div className="space-y-4">
                <textarea
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-600 font-sans"
                  rows={6}
                />
                <div className="flex gap-2">
                  <Button
                    onClick={() => handleSave(page.id)}
                    size="sm"
                  >
                    Simpan
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsEditing(null)}
                  >
                    Batal
                  </Button>
                </div>
              </div>
            ) : (
              <p className="text-gray-700 text-sm">{page.content}</p>
            )}
          </Card>
        ))}
      </div>
    </div>
  )
}
