import Link from "next/link"
import { ChevronRight } from 'lucide-react'

interface PageHeaderProps {
  title: string
  breadcrumbs?: { label: string; href: string }[]
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  breadcrumbs = [],
}) => {
  return (
    <div className="bg-gradient-to-r from-green-50 to-amber-50 py-8 mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>

        {breadcrumbs.length > 0 && (
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-green-600">
              Home
            </Link>
            {breadcrumbs.map((crumb, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <ChevronRight size={16} />
                {idx === breadcrumbs.length - 1 ? (
                  <span className="text-green-600 font-medium">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="hover:text-green-600">
                    {crumb.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
