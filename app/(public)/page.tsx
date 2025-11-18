"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/ProductCard"
import { products, categories } from "@/app/data/mockData"
import { Star, Truck, Award, Shield } from "lucide-react"


export default function HomePage() {
  const topProducts = products.slice(0, 6)

  return (
    <>
      {/* Hero Section */}
      <section className="bg-linear-to-r from-green-600 to-green-700 text-white py-20">
        <div className="container-main">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-4 text-balance">
              Solusi Lengkap untuk Pertanian Modern
            </h1>
            <p className="text-lg text-green-50 mb-8 text-balance">
              Belanja pupuk, benih, dan peralatan pertanian berkualitas tinggi dengan harga terjangkau. Kami membantu petani mencapai hasil panen maksimal.
            </p>
            <Link href="/products">
              <Button size="lg" variant="secondary">
                Belanja Sekarang
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Highlight */}
      <section className="py-16 bg-gray-50">
        <div className="container-main">
          <h2 className="text-3xl font-bold mb-12 text-center">Kategori Produk</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/categories/${category.slug}`}
                className="group"
              >
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center cursor-pointer h-full flex flex-col justify-center">
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-600">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Top Products */}
      <section className="py-16">
        <div className="container-main">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Produk Terlaris</h2>
            <Link href="/products">
              <Button variant="outline">Lihat Semua</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container-main">
          <h2 className="text-3xl font-bold mb-12 text-center">Mengapa Pilih TaniMarket?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Award className="text-green-600" size={32} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Produk Berkualitas</h3>
              <p className="text-gray-600 text-sm">
                Semua produk telah melewati kontrol kualitas ketat
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Truck className="text-green-600" size={32} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Pengiriman Cepat</h3>
              <p className="text-gray-600 text-sm">
                Pengiriman ke seluruh Indonesia dengan jaminan tepat waktu
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Shield className="text-green-600" size={32} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Harga Terjangkau</h3>
              <p className="text-gray-600 text-sm">
                Harga kompetitif dengan kualitas terbaik di kelasnya
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Star className="text-green-600" size={32} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Layanan Terpercaya</h3>
              <p className="text-gray-600 text-sm">
                Tim customer service responsif siap membantu Anda 24/7
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container-main">
          <h2 className="text-3xl font-bold mb-12 text-center">Testimoni Pelanggan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Budi Santoso",
                role: "Petani Padi",
                text: "TaniMarket sangat membantu saya mendapatkan pupuk berkualitas dengan harga terjangkau. Pengiriman cepat dan barang sesuai pesanan.",
              },
              {
                name: "Siti Nurhaliza",
                role: "Petani Sayuran",
                text: "Produk benih yang saya beli benar-benar berkualitas. Hasil panen jauh lebih baik dari musim sebelumnya.",
              },
              {
                name: "Ahmad Wijaya",
                role: "Petani Jagung",
                text: "Pelayanan luar biasa! Tim TaniMarket sangat responsif menjawab pertanyaan saya tentang pilihan produk yang tepat.",
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
