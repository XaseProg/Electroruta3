import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/logo2-130x43.png" 
                alt="ElectroRuta Moderna" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Tu tienda de confianza para productos eléctricos y electrónicos de alta calidad. 
              Más de 10 años brindando soluciones tecnológicas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Inicio</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Productos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Ofertas</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Sobre Nosotros</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Contacto</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categorías</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Cables y Adaptadores</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Cargadores</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Periféricos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Herramientas</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Iluminación</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">+54 11 1234-5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">info@electrorutamoderna.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5" />
                <span className="text-gray-400">
                  Av. Corrientes 1234<br />
                  Buenos Aires, Argentina
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 ElectroRuta Moderna. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Términos y Condiciones
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Política de Devoluciones
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}