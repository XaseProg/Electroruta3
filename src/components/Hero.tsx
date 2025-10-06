import { Zap, Truck, Shield, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section className="bg-white text-blue-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Productos Eléctricos
            <span className="block text-blue-600">de Última Generación</span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-blue-600 max-w-3xl mx-auto">
            Descubre nuestra amplia selección de cables, adaptadores, cargadores y accesorios electrónicos de alta calidad
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="bg-blue-600 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">Alta Calidad</h3>
              <p className="text-blue-600 text-sm">Productos certificados y garantizados</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Truck className="h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">Envío Rápido</h3>
              <p className="text-blue-600 text-sm">Entrega en 24-48 horas</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">Garantía</h3>
              <p className="text-blue-600 text-sm">12 meses de garantía completa</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">Mejor Precio</h3>
              <p className="text-blue-600 text-sm">Precios competitivos garantizados</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}