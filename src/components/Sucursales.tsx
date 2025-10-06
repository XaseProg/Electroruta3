import { MapPin, Phone, Clock } from 'lucide-react'

const sucursales = [
  {
    id: 1,
    nombre: "Sucursal Casanova",
    direccion: "Av. Brig. Gral. Juan Manuel de Rosas 8933, B1765 Isidro Casanova, Provincia de Buenos Aires",
    telefono: "+54 11 4623-4567",
    horarios: "Lun a Vie: 8:00 - 18:00 | Sáb: 8:00 - 13:00",

  },
  {
    id: 2,
    nombre: "Sucursal Gonzales Catan",
    direccion: "Av. Brig. Gral. Juan Manuel de Rosas 15145, B1759 González Catán, Provincia de Buenos Aires",
    telefono: "+54 11 4623-4568",
    horarios: "Lun a Vie: 8:00 - 18:00 | Sáb: 8:00 - 13:00",

  },
  {
    id: 3,
    nombre: "Sucursal Virrey del Pino",
    direccion: "Av. Brig. Gral. Juan Manuel de Rosas 24741, B1763 Virrey del Pino, Provincia de Buenos Aires",
    telefono: "+54 11 4623-4569",
    horarios: "Lun a Vie: 8:00 - 18:00 | Sáb: 8:00 - 13:00",
  }
]

export default function Sucursales() {
  return (
    <section id="sucursales" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
            Nuestras Sucursales
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Visitanos en cualquiera de nuestras tres sucursales ubicadas estratégicamente sobre la Ruta Nacional 3 en La Matanza, Buenos Aires.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {sucursales.map((sucursal) => (
            <div key={sucursal.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Mapa */}
              <div className="h-64 relative">
                {sucursal.id === 1 && (
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d18551.144669538327!2d-58.602610749950195!3d-34.720057170218446!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc67f6300021d%3A0x7443f7cd623a8b92!2sElectro%20Ruta%203!5e0!3m2!1ses-419!2sus!4v1759671075208!5m2!1ses-419!2sus" width="600" height="450" style={{ border: 0, width: '100%', height: '100%' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                )}
                {sucursal.id === 2 && (
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6554.841566425787!2d-58.62023399353297!3d-34.7701808804009!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc5647b9252a9%3A0xcf08f78a74fa39!2sElectro%20Ruta%203!5e0!3m2!1ses-419!2sus!4v1759671022763!5m2!1ses-419!2sus" width="600" height="450" style={{ border: 0, width: '100%', height: '100%' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                )}
                {sucursal.id === 3 && (
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6547.952586444722!2d-58.660544!3d-34.856823!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcdd8b382c8fff%3A0x7958efa7c747ce0f!2sElectro%20Ruta%203!5e0!3m2!1ses-419!2sus!4v1759672739405!5m2!1ses-419!2sus" width="600" height="450" style={{ border: 0, width: '100%', height: '100%' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                )}
              </div>

              {/* Información */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-600 mb-4">
                  {sucursal.nombre}
                </h3>

                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">
                      {sucursal.direccion}
                    </p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-500 flex-shrink-0" />
                    <a 
                      href={`tel:${sucursal.telefono}`}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200"
                    >
                      {sucursal.telefono}
                    </a>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">
                      {sucursal.horarios}
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(sucursal.direccion)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200"
                  >
                    <MapPin className="h-4 w-4 mr-2" />
                    Ver en Google Maps
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Información adicional */}
        <div className="mt-12 bg-blue-600 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            ¿Necesitas ayuda para encontrarnos?
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Nuestro equipo está disponible para ayudarte a encontrar la sucursal más cercana y resolver todas tus consultas sobre nuestros productos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+541146234567"
              className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Llamar Ahora
            </a>
            <a
              href="https://wa.me/541146234567"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}