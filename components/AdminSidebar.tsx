"use client"

import Link from "next/link"
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Package, Layers, ShoppingCart, FileText } from 'lucide-react'

export const AdminSidebar: React.FC = () => {
  const pathname = usePathname()

  const menuItems = [
    { label: "Dashboard", icon: LayoutDashboard, href: "/admin" },
    { label: "Produk", icon: Package, href: "/admin/products" },
    { label: "Kategori", icon: Layers, href: "/admin/categories" },
    { label: "Pesanan", icon: ShoppingCart, href: "/admin/orders" },
    { label: "Halaman", icon: FileText, href: "/admin/pages" },
  ]

  return (
    <aside className="hidden md:flex flex-col w-64 bg-gray-900 text-white">
      <div className="p-6 border-b border-gray-800">
        <h2 className="text-xl font-bold">TaniMarket Admin</h2>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/")

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? "bg-green-600 text-white"
                  : "text-gray-300 hover:bg-gray-800"
              }`}
            >
              <Icon size={20} />
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div className="p-4 border-t border-gray-800">
        <Link
          href="/admin/login"
          className="block text-center px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
        >
          Keluar
        </Link>
      </div>
    </aside>
  )
}
