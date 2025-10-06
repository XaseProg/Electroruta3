import React, { useState } from 'react'
import { X, Star, ShoppingCart, Check, Zap, Shield, Truck } from 'lucide-react'
import { Product } from '../types'
import { useCart } from '../context/CartContext'

interface ProductModalProps {
  product: Product
  onClose: () => void
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [imageLoaded, setImageLoaded] = useState(false)

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product)
    }
    onClose()
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fadeIn"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-slideIn">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white bg-opacity-90 hover:bg-opacity-100 p-2 rounded-full shadow-lg transition-all duration-200"
          >
            <X className="h-6 w-6 text-gray-700" />
          </button>
          
          <div className="grid md:grid-cols-2 gap-8 p-8">
            {/* Image Section */}
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-xl bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className={`w-full h-96 object-cover transition-opacity duration-300 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => setImageLoaded(true)}
                />
                {!imageLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                  </div>
                )}
                {product.originalPrice && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </div>
                )}
              </div>
              
              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center p-3 bg-green-50 rounded-lg">
                  <Shield className="h-6 w-6 text-green-600 mb-1" />
                  <span className="text-xs font-medium text-green-800">Garantía</span>
                  <span className="text-xs text-green-600">12 meses</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-blue-50 rounded-lg">
                  <Truck className="h-6 w-6 text-blue-600 mb-1" />
                  <span className="text-xs font-medium text-blue-800">Envío</span>
                  <span className="text-xs text-blue-600">24-48hs</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-yellow-50 rounded-lg">
                  <Zap className="h-6 w-6 text-yellow-600 mb-1" />
                  <span className="text-xs font-medium text-yellow-800">Calidad</span>
                  <span className="text-xs text-yellow-600">Premium</span>
                </div>
              </div>
            </div>
            
            {/* Product Info Section */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="font-medium text-gray-900">{product.rating}</span>
                    <span className="text-gray-500">({product.reviews} reseñas)</span>
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {product.name}
                </h2>
                
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    ${product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xl text-gray-500 line-through">
                      ${product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {product.description}
                </p>
              </div>
              
              {/* Features */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Características Principales
                </h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Add to Cart Section */}
              <div className="border-t pt-6">
                <div className="flex items-center space-x-4 mb-4">
                  <label className="text-sm font-medium text-gray-700">
                    Cantidad:
                  </label>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 border-x border-gray-300 font-medium">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
                    >
                      +
                    </button>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <button
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                    className={`flex-1 flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                      product.inStock
                        ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <ShoppingCart className="h-5 w-5" />
                    <span>
                      {product.inStock ? 'Agregar al Carrito' : 'Sin Stock'}
                    </span>
                  </button>
                </div>
                
                {product.inStock && (
                  <p className="text-sm text-green-600 mt-2 flex items-center">
                    <Check className="h-4 w-4 mr-1" />
                    En stock - Envío inmediato
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}