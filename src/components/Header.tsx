import { Search, ShoppingCart, Facebook, Instagram, Twitter } from 'lucide-react'
import { useCart } from '../context/CartContext'

interface HeaderProps {
  searchTerm: string
  onSearchChange: (term: string) => void
  onCartClick: () => void
}

export default function Header({ searchTerm, onSearchChange, onCartClick }: HeaderProps) {
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header className="bg-blue-600 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="/logo2-130x43.png"
              alt="ElectroRuta Moderna"
              className="h-10 w-auto"
            />
          </div>

          {/* Navigation Buttons */}
          <nav className="hidden lg:flex items-center space-x-1">
            <button
              onClick={() => scrollToSection('inicio')}
              className="px-4 py-2 text-white hover:bg-blue-700 rounded-lg transition-colors duration-200 font-medium"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('nosotros')}
              className="px-4 py-2 text-white hover:bg-blue-700 rounded-lg transition-colors duration-200 font-medium"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection('sucursales')}
              className="px-4 py-2 text-white hover:bg-blue-700 rounded-lg transition-colors duration-200 font-medium"
            >
              Sucursales
            </button>
            <button
              onClick={() => scrollToSection('productos')}
              className="px-4 py-2 text-white hover:bg-blue-700 rounded-lg transition-colors duration-200 font-medium"
            >
              Productos
            </button>
          </nav>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-white rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-white focus:border-transparent"
                placeholder="Buscar productos..."
              />
            </div>
          </div>

          {/* Social Media and Cart */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-3">
              <a
                href="#"
                className="text-white hover:text-blue-200 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-200 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-200 transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>

            <button
              onClick={onCartClick}
              className="relative p-2 text-white hover:text-blue-200 transition-colors duration-200"
            >
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-bounce-custom">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}