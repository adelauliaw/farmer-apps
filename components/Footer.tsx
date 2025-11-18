import Link from "next/link"
import { Mail, Phone, MapPin } from 'lucide-react'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">TaniMarket</h3>
            <p className="text-sm text-gray-400">
              Platform belanja pertanian terpercaya untuk petani dan bisnis agrikultur modern.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Tautan</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-green-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-green-400">
                  Produk
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-green-400">
                  Tentang
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-green-400">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kebijakan</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-green-400">
                  Syarat & Ketentuan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400">
                  Kebijakan Privasi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400">
                  Kebijakan Pengiriman
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Hubungi Kami</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+62812345678" className="hover:text-green-400">
                  +62 812-345-678
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:info@tanimarket.com" className="hover:text-green-400">
                  info@tanimarket.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 TaniMarket. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}
