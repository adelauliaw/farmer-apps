"use client"

import { useState } from "react"
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/Input"
import { Card } from "@/components/ui/Card"
import Link from "next/link"

export default function AdminLoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple login simulation
    if (email && password) {
      localStorage.setItem("adminLoggedIn", "true")
      router.push("/admin")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-600 to-green-700 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <div className="p-8">
          <h1 className="text-2xl font-bold text-center mb-8 text-green-600">
            TaniMarket Admin
          </h1>

          <form onSubmit={handleLogin} className="space-y-4">
            <Input
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@tanimarket.com"
              required
            />

            <Input
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />

            <Button type="submit" size="lg" className="w-full">
              Masuk
            </Button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-4">
            Kembali ke{" "}
            <Link href="/" className="text-green-600 hover:underline font-medium">
              halaman utama
            </Link>
          </p>
        </div>
      </Card>
    </div>
  )
}
