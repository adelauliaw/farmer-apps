"use client"

import { useState } from "react"
import { PageHeader } from "@/components/PageHeader"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Terima kasih! Pesan Anda telah diterima. Tim kami akan menghubungi Anda segera.")
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  return (
    <>
      <PageHeader title="Hubungi Kami" />

      <div className="container-main mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info */}
          <div className="space-y-4">
            <Card className="p-6">
              <div className="flex gap-4">
                <Phone className="text-green-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Telepon</h3>
                  <a
                    href="tel:+621234567890"
                    className="text-green-600 hover:underline"
                  >
                    +62 123-456-7890
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex gap-4">
                <Mail className="text-green-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <a
                    href="mailto:info@tanimarket.com"
                    className="text-green-600 hover:underline"
                  >
                    info@tanimarket.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex gap-4">
                <MapPin className="text-green-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Lokasi</h3>
                  <p className="text-gray-700 text-sm">
                    Jakarta, Indonesia
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex gap-4">
                <Clock className="text-green-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Jam Operasional</h3>
                  <p className="text-gray-700 text-sm">
                    Senin - Jumat: 08:00 - 17:00
                    <br />
                    Sabtu: 08:00 - 13:00
                    <br />
                    Minggu: Libur
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-6">Kirim Pesan</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  label="Nama"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Nama lengkap Anda"
                  required
                />

                <Input
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Anda"
                  required
                />

                <Input
                  label="Nomor Telepon"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Nomor telepon Anda"
                />

                <Input
                  label="Subjek"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Subjek pesan"
                  required
                />

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Pesan
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tulis pesan Anda di sini..."
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-600 transition-colors font-sans"
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Kirim Pesan
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
