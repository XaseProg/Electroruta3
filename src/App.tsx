import { useState } from 'react'
import { CartProvider } from './context/CartContext'
import Header from './components/Header'
import Hero from './components/Hero'
import CategoryFilter from './components/CategoryFilter'
import ProductCard from './components/ProductCard'
import ProductModal from './components/ProductModal'
import Cart from './components/Cart'
import Footer from './components/Footer'
import Sucursales from './components/Sucursales'
import { products } from './data/products'
import { Product } from './types'

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isCartOpen, setIsCartOpen] = useState(false)

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Header
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onCartClick={() => setIsCartOpen(true)}
        />

        <div id="inicio">
          <Hero />
        </div>

        {/* About Section */}
        <section id="nosotros" className="bg-blue-600 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                ¿Quiénes somos?
              </h2>
              <div className="text-lg text-white leading-relaxed space-y-6">
                <p>
                  Somos una empresa familiar dedicada a la venta de Materiales Eléctricos.
                </p>
                <p>
                  Estamos ubicados en el Partido de la Matanza, Bs As. Y hoy en día contamos con tres sucursales sobre la Ruta Nacional 3
                </p>
                <p>
                  Llevamos 35 años en el mercado ofreciendo materiales eléctricos de primera línea y un servicio de venta, distribución y financiación a la medida de cada uno de nuestros clientes con el fin de lograr relaciones comerciales duraderas y beneficiosas para ambos.
                </p>
                <p>
                  En estos años transcurridos enfrentamos diversas dificultades y crisis, pero de todas estas situaciones hemos sabido desarrollar habilidades, solidez, temple y confianza.
                </p>
                <p className="font-semibold text-white">
                  Seguimos apostando al rubro eléctrico, a nuestro país y su gente.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <Sucursales />

        <main id="productos" className="bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={setSelectedProduct}
              />
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-blue-600 text-lg">No se encontraron productos que coincidan con tu búsqueda.</p>
            </div>
          )}
        </main>
        
        <Footer />
        
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
        
        <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </CartProvider>
  )
}

export default App