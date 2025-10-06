import React from 'react'
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react'
import { useCart } from '../context/CartContext'

interface CartProps {
  isOpen: boolean
  onClose: () => void
}

export default function Cart({ isOpen, onClose }: CartProps) {
  const { items, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart()

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const handleCheckout = () => {
    alert('¡Gracias por tu compra! En una implementación real, aquí se procesaría el pago.')
    clearCart()
    onClose()
  }

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-end z-50 animate-fadeIn"
      onClick={handleBackdropClick}
    >
      <div className="bg-white h-full w-full max-w-md shadow-2xl animate-slideIn">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-xl font-bold text-gray-900 flex items-center">
              <ShoppingBag className="h-6 w-6 mr-2" />
              Carrito de Compras
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              <X className="h-6 w-6 text-gray-600" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg mb-2">Tu carrito está vacío</p>
                <p className="text-gray-400 text-sm">Agrega algunos productos para comenzar</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map(item => (
                  <div key={item.product.id} className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-900 truncate">
                        {item.product.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        ${item.product.price.toLocaleString()} c/u
                      </p>
                      
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-gray-300 rounded-lg">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="p-1 hover:bg-gray-200 transition-colors duration-200"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="px-3 py-1 text-sm font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="p-1 hover:bg-gray-200 transition-colors duration-200"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="p-1 text-red-500 hover:text-red-700 transition-colors duration-200"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">
                        ${(item.product.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t p-6 space-y-4">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Total:</span>
                <span className="text-2xl text-blue-600">
                  ${getTotalPrice().toLocaleString()}
                </span>
              </div>
              
              <div className="space-y-2">
                <button
                  onClick={handleCheckout}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Proceder al Pago
                </button>
                
                <button
                  onClick={clearCart}
                  className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-lg font-medium transition-colors duration-200"
                >
                  Vaciar Carrito
                </button>
              </div>
              
              <p className="text-xs text-gray-500 text-center">
                Envío gratis en compras superiores a $10.000
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}