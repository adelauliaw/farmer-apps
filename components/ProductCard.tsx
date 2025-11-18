import Link from "next/link"
import { Product } from "@/app/data/types"
import { Badge } from "@/components/ui/badge"


interface ProductCardProps {
  product: Product
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const isLowStock = product.stock < 10
  const stockPercentage = (product.stock / 100) * 100

  return (
    <Link href={`/products/${product.slug}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden cursor-pointer h-full flex flex-col">
        {/* Image */}
        <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
          <img
            src={product.imageUrl || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform"
          />
          {isLowStock && (
            <div className="absolute top-2 right-2">
              <Badge variant="warning">Stok Terbatas</Badge>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 p-4 flex flex-col">
          <h3 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-2">
            {product.name}
          </h3>
          <p className="text-xs text-gray-600 mb-3 line-clamp-2">
            {product.shortDescription}
          </p>

          {/* Spacing */}
          <div className="flex-1" />

          {/* Price and Stock */}
          <div className="space-y-2">
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-bold text-green-600">
                Rp {product.price.toLocaleString("id-ID")}
              </span>
              {product.unit && (
                <span className="text-xs text-gray-500">/{product.unit}</span>
              )}
            </div>
            <div className="text-xs text-gray-600">
              Stok: {product.stock} {product.unit || "pcs"}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
