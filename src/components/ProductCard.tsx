import React from 'react'
import { Star, ShoppingCart, Eye } from 'lucide-react'
import { Product } from '../types'
import { useCart } from '../context/CartContext'

interface ProductCardProps {
  product: Product
  onViewDetails: (product: Product) => void
}

export default function ProductCard({ product, onViewDetails }: ProductCardProps) {
  const { addToCart } = useCart()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation()
    addToCart(product)
  }

  const handleViewDetails = () => {
    onViewDetails(product)
  }

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
      <div className="relative overflow-hidden rounded-t-xl">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {product.originalPrice && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
          </div>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold">
              Sin Stock
            </span>
          </div>
        )}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={handleViewDetails}
            className="bg-white bg-opacity-90 hover:bg-opacity-100 p-2 rounded-full shadow-lg transition-all duration-200"
          >
            <Eye className="h-4 w-4 text-gray-700" />
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
            {product.category}
          </span>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600">{product.rating}</span>
            <span className="text-xs text-gray-400">({product.reviews})</span>
          </div>
        </div>
        
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-gray-900">
                ${product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  ${product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
          </div>
          
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              product.inStock
                ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg transform hover:scale-105'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <ShoppingCart className="h-4 w-4" />
            <span className="hidden sm:inline">Agregar</span>
          </button>
        </div>
      </div>
    </div>
  )
}