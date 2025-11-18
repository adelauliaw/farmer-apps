import type { Metadata } from "next"
import "./globals.css"
import { CartProvider } from "./context/CartContext"

export const metadata: Metadata = {
  title: "TaniMarket - Platform Belanja Pertanian",
  description:
    "Platform e-commerce terpercaya untuk pupuk, benih, dan peralatan pertanian berkualitas tinggi.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className="bg-white text-gray-900 font-sans">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}
