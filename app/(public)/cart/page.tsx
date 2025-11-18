"use client"

import { useCart } from "@/app/context/CartContext"
import { PageHeader } from "@/components/PageHeader"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Trash2, Minus, Plus } from 'lucide-react'

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, getTotalPrice } = useCart()
  const totalPrice = getTotalPrice()

  if (items.length === 0) {
    return (
      <>
        <PageHeader title="Keranjang Belanja" />
        <div className="container-main mb-16">
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg mb-6">
              Keranjang Anda kosong. Mulai belanja sekarang!
            </p>
            <Link href="/products">
              <Button>Lihat Produk</Button>
            </Link>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <PageHeader title="Keranjang Belanja" />

      <div className="container-main mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="hidden md:grid grid-cols-5 gap-4 p-4 bg-gray-50 font-semibold text-gray-700 text-sm">
                <div className="col-span-2">Produk</div>
                <div>Harga</div>
                <div>Jumlah</div>
                <div className="text-right">Total</div>
              </div>

              <div className="divide-y">
                {items.map((item) => (
                  <div key={item.productId} className="p-4">
                    <div className="md:grid md:grid-cols-5 md:gap-4 flex flex-col gap-4">
                      {/* Product */}
                      <div className="md:col-span-2 flex gap-3">
                        <img
                          src={item.product.imageUrl || "/placeholder.svg"}
                          alt={item.product.name}
                          className="w-20 h-20 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">
                            {item.product.name}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {item.product.unit}
                          </p>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="text-sm">
                        <p className="md:hidden text-gray-600 mb-1">Harga</p>
                        <p className="font-semibold">
                          Rp {item.product.price.toLocaleString("id-ID")}
                        </p>
                      </div>

                      {/* Quantity */}
                      <div className="text-sm">
                        <p className="md:hidden text-gray-600 mb-1">Jumlah</p>
                        <div className="flex items-center gap-2 bg-gray-100 rounded w-fit">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.productId,
                                item.quantity - 1
                              )
                            }
                            className="p-1 hover:bg-gray-200"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="w-8 text-center font-semibold">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.productId,
                                item.quantity + 1
                              )
                            }
                            className="p-1 hover:bg-gray-200"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      </div>

                      {/* Total */}
                      <div className="md:text-right text-sm">
                        <p className="md:hidden text-gray-600 mb-1">Total</p>
                        <p className="font-semibold">
                          Rp{" "}
                          {(
                            item.product.price * item.quantity
                          ).toLocaleString("id-ID")}
                        </p>
                        <button
                          onClick={() => removeFromCart(item.productId)}
                          className="mt-2 text-red-600 hover:text-red-700 flex items-center gap-1 text-xs"
                        >
                          <Trash2 size={14} />
                          Hapus
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Link href="/products">
              <Button variant="outline" className="mt-6 w-full md:w-auto">
                Lanjut Belanja
              </Button>
            </Link>
          </div>

          {/* Summary */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Ringkasan Pesanan
              </h3>

              <div className="space-y-3 mb-4 pb-4 border-b border-gray-200">
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

              <div className="flex justify-between text-lg font-bold mb-6">
                <p>Total</p>
                <p className="text-green-600">
                  Rp {totalPrice.toLocaleString("id-ID")}
                </p>
              </div>

              <Link href="/checkout" className="w-full block">
                <Button size="lg" className="w-full">
                  Checkout
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
