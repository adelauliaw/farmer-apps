"use client"

import { Card } from "@/components/ui/Card"
import { products, mockOrders } from "@/app/data/mockData"
import { ShoppingCart, Package, AlertCircle, TrendingUp } from 'lucide-react'

export default function AdminDashboard() {
  const stats = [
    {
      label: "Total Produk",
      value: products.length,
      icon: Package,
      color: "bg-blue-100 text-blue-600",
    },
    {
      label: "Total Pesanan",
      value: mockOrders.length,
      icon: ShoppingCart,
      color: "bg-green-100 text-green-600",
    },
    {
      label: "Pesanan Pending",
      value: mockOrders.filter((o) => o.status === "pending").length,
      icon: AlertCircle,
      color: "bg-amber-100 text-amber-600",
    },
    {
      label: "Total Penjualan",
      value: `Rp ${mockOrders
        .reduce((sum, o) => sum + o.totalPrice, 0)
        .toLocaleString("id-ID")}`,
      icon: TrendingUp,
      color: "bg-purple-100 text-purple-600",
    },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, idx) => {
          const Icon = stat.icon
          return (
            <Card key={idx} className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-gray-600 text-sm mb-2">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon size={24} />
                </div>
              </div>
            </Card>
          )
        })}
      </div>

      {/* Recent Orders Table */}
      <Card className="p-6">
        <h2 className="text-lg font-bold mb-4">Pesanan Terbaru</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  No. Pesanan
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Pelanggan
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Status
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {mockOrders.slice(0, 5).map((order) => (
                <tr key={order.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-900 font-semibold">
                    {order.id}
                  </td>
                  <td className="py-3 px-4 text-gray-700">
                    {order.customerName}
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        order.status === "paid"
                          ? "bg-green-100 text-green-800"
                          : order.status === "pending"
                            ? "bg-amber-100 text-amber-800"
                            : order.status === "shipped"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-red-100 text-red-800"
                      }`}
                    >
                      {order.status.charAt(0).toUpperCase() +
                        order.status.slice(1)}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-900 font-semibold">
                    Rp {order.totalPrice.toLocaleString("id-ID")}
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
