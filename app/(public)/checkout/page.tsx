"use client"

import { useState } from "react"
import { useRouter } from 'next/navigation'
import { useCart } from "@/app/context/CartContext"
import { PageHeader } from "@/components/PageHeader"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/Input"
import { Select } from "@/components/ui/Select"
import { Card } from "@/components/ui/Card"
import Link from "next/link"

export default function CheckoutPage() {
  const { items, getTotalPrice, clearCart } = useCart()
  const router = useRouter()
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    notes: "",
    shippingMethod: "standard",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  if (items.length === 0) {
    return (
      <>
        <PageHeader title="Checkout" />
        <div className="container-main mb-16">
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg mb-6">
              Keranjang Anda kosong. Silakan tambahkan produk terlebih dahulu.
            </p>
            <Link href="/products">
              <Button>Kembali ke Produk</Button>
            </Link>
          </div>
        </div>
      </>
    )
  }

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.fullName) newErrors.fullName = "Nama lengkap harus diisi"
    if (!formData.phone) newErrors.phone = "Nomor telepon harus diisi"
    if (!formData.address) newErrors.address = "Alamat harus diisi"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    // Generate order number
    const orderNumber = `ORD-${Date.now()}`

    // Show success (in real app, this would be sent to backend)
    alert(`Pesanan berhasil dibuat!\nNomor Pesanan: ${orderNumber}`)

    // Clear cart and redirect
    clearCart()
    router.push(`/`)
  }

  const totalPrice = getTotalPrice()

  return (
    <>
      <PageHeader title="Checkout" />

      <div className="container-main mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-6">Data Pengiriman</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  label="Nama Lengkap"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  error={errors.fullName}
                  placeholder="Masukkan nama lengkap"
                />

                <Input
                  label="Nomor Telepon/WhatsApp"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  error={errors.phone}
                  placeholder="Contoh: 08123456789"
                />

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Alamat Lengkap
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Alamat rumah, jalan, kelurahan, kecamatan, kabupaten"
                    className={`w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-600 transition-colors font-sans ${
                      errors.address ? "border-red-500" : ""
                    }`}
                    rows={4}
                  />
                  {errors.address && (
                    <p className="text-red-500 text-xs mt-1">{errors.address}</p>
                  )}
                </div>

                <Select
                  label="Metode Pengiriman"
                  name="shippingMethod"
                  value={formData.shippingMethod}
                  onChange={handleInputChange}
                  options={[
                    { value: "standard", label: "Standar (3-5 hari)" },
                    { value: "express", label: "Express (1-2 hari)" },
                    { value: "same-day", label: "Same Day (Hari yang sama)" },
                  ]}
                />

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Catatan (Opsional)
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Catatan tambahan untuk pesanan Anda"
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-600 transition-colors font-sans"
                    rows={3}
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <Link href="/cart" className="flex-1">
                    <Button variant="outline" className="w-full">
                      Kembali
                    </Button>
                  </Link>
                  <button type="submit" className="flex-1">
                    <Button size="lg" className="w-full">
                      Buat Pesanan
                    </Button>
                  </button>
                </div>
              </form>
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="p-6 sticky top-20">
              <h3 className="text-lg font-bold mb-6">Ringkasan Pesanan</h3>

              <div className="space-y-3 mb-6 pb-6 border-b border-gray-200 max-h-64 overflow-y-auto">
                {items.map((item) => (
                  <div key={item.productId} className="flex justify-between text-sm">
                    <p className="text-gray-600">
                      {item.product.name} <br />
                      <span className="text-xs">x{item.quantity}</span>
                    </p>
                    <p className="font-semibold">
                      Rp{" "}
                      {(
                        item.product.price * item.quantity
                      ).toLocaleString("id-ID")}
                    </p>
                  </div>
                ))}
              </div>

              <div className="space-y-2 mb-6 pb-6 border-b border-gray-200">
                <div className="flex justify-between text-sm">
                  <p className="text-gray-600">Subtotal</p>
                  <p className="font-semibold">
                    Rp {totalPrice.toLocaleString("id-ID")}
                  </p>
                </div>
                <div className="flex justify-between text-sm">
                  <p className="text-gray-600">Ongkir</p>
                  <p className="font-semibold">Gratis</p>
                </div>
              </div>

              <div className="flex justify-between text-lg font-bold">
                <p>Total</p>
                <p className="text-green-600">
                  Rp {totalPrice.toLocaleString("id-ID")}
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
