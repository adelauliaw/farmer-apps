import { Card } from "@/components/ui/card"
import { mockOrders } from "@/app/data/mockData"

export default function OrdersPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Kelola Pesanan</h1>

      <Card className="p-6">
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
                  Telepon
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Status
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Total
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Tanggal
                </th>
              </tr>
            </thead>
            <tbody>
              {mockOrders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="py-3 px-4 text-gray-900 font-semibold">
                    {order.id}
                  </td>
                  <td className="py-3 px-4 text-gray-700">
                    {order.customerName}
                  </td>
                  <td className="py-3 px-4 text-gray-700">
                    {order.customerPhone}
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
                  <td className="py-3 px-4 text-gray-700">
                    {new Date(order.createdAt).toLocaleDateString("id-ID")}
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
