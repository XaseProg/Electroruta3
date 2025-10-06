import { Product } from '../types'

export const products: Product[] = [
  {
    id: 1,
    name: "Cable HDMI 4K Ultra HD",
    price: 2500,
    originalPrice: 3200,
    image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "cables",
    description: "Cable HDMI de alta velocidad compatible con resolución 4K Ultra HD, HDR y Ethernet.",
    features: [
      "Resolución 4K Ultra HD (3840x2160)",
      "Soporte HDR10 y Dolby Vision",
      "Canal de retorno de audio (ARC)",
      "Longitud: 2 metros",
      "Conectores chapados en oro"
    ],
    inStock: true,
    rating: 4.8,
    reviews: 156
  },
  {
    id: 2,
    name: "Adaptador USB-C a HDMI",
    price: 4200,
    image: "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "adaptadores",
    description: "Adaptador compacto que convierte señal USB-C a HDMI para conectar dispositivos a monitores y TVs.",
    features: [
      "Resolución hasta 4K@60Hz",
      "Plug and Play - sin drivers",
      "Compatible con MacBook, iPad Pro, smartphones",
      "Diseño compacto y portátil",
      "Aluminio premium"
    ],
    inStock: true,
    rating: 4.6,
    reviews: 89
  },
  {
    id: 3,
    name: "Cargador Inalámbrico Qi 15W",
    price: 5800,
    originalPrice: 7200,
    image: "https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "cargadores",
    description: "Base de carga inalámbrica rápida compatible con todos los dispositivos Qi.",
    features: [
      "Carga rápida de 15W",
      "Compatible con iPhone y Android",
      "Indicador LED de estado",
      "Protección contra sobrecalentamiento",
      "Base antideslizante"
    ],
    inStock: true,
    rating: 4.7,
    reviews: 203
  },
  {
    id: 4,
    name: "Hub USB 3.0 de 7 Puertos",
    price: 3900,
    image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "hubs",
    description: "Hub USB 3.0 con 7 puertos para expandir la conectividad de tu computadora.",
    features: [
      "7 puertos USB 3.0",
      "Velocidad de transferencia hasta 5Gbps",
      "Alimentación externa incluida",
      "Compatible con USB 2.0",
      "Indicadores LED individuales"
    ],
    inStock: true,
    rating: 4.5,
    reviews: 127
  },
  {
    id: 5,
    name: "Protector de Voltaje Inteligente",
    price: 8500,
    image: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "protectores",
    description: "Protector de voltaje con 6 tomas y protección contra picos de tensión.",
    features: [
      "6 tomas con protección individual",
      "Protección contra rayos y picos",
      "Indicador de estado de protección",
      "Filtro de ruido electromagnético",
      "Garantía de equipos conectados"
    ],
    inStock: true,
    rating: 4.9,
    reviews: 312
  },
  {
    id: 6,
    name: "Lámpara LED Escritorio USB",
    price: 4700,
    originalPrice: 5900,
    image: "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "iluminacion",
    description: "Lámpara LED ajustable con alimentación USB y control táctil de intensidad.",
    features: [
      "3 niveles de intensidad",
      "Brazo flexible 360°",
      "Alimentación por USB",
      "Control táctil",
      "Luz blanca fría 6000K"
    ],
    inStock: true,
    rating: 4.4,
    reviews: 78
  },
  {
    id: 7,
    name: "Multímetro Digital Profesional",
    price: 12500,
    image: "https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "herramientas",
    description: "Multímetro digital de precisión para mediciones eléctricas profesionales.",
    features: [
      "Pantalla LCD de 4000 cuentas",
      "Medición AC/DC hasta 600V",
      "Función de retención de datos",
      "Protección contra sobrecargas",
      "Incluye puntas de prueba"
    ],
    inStock: true,
    rating: 4.8,
    reviews: 94
  },
  {
    id: 8,
    name: "Ventilador USB Silencioso",
    price: 2800,
    image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "ventilacion",
    description: "Ventilador compacto con alimentación USB para escritorio o laptop.",
    features: [
      "Ultra silencioso <25dB",
      "Alimentación USB 5V",
      "Base ajustable",
      "Aspas aerodinámicas",
      "Diseño compacto"
    ],
    inStock: false,
    rating: 4.2,
    reviews: 45
  },
  {
    id: 9,
    name: "Organizador de Cables Magnético",
    price: 1500,
    originalPrice: 2100,
    image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "organizadores",
    description: "Set de organizadores magnéticos para mantener los cables ordenados en el escritorio.",
    features: [
      "Base magnética fuerte",
      "Silicona premium",
      "Set de 6 unidades",
      "Diferentes tamaños",
      "Fácil instalación"
    ],
    inStock: true,
    rating: 4.6,
    reviews: 167
  },
  {
    id: 10,
    name: "Soporte para Laptop Ajustable",
    price: 6200,
    image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "soportes",
    description: "Soporte ergonómico ajustable para laptop con ventilación mejorada.",
    features: [
      "Altura ajustable 6 posiciones",
      "Ángulo regulable",
      "Ventilación mejorada",
      "Aluminio resistente",
      "Compatible hasta 17 pulgadas"
    ],
    inStock: true,
    rating: 4.7,
    reviews: 134
  },
  {
    id: 11,
    name: "Teclado Mecánico RGB",
    price: 15800,
    originalPrice: 18900,
    image: "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "perifericos",
    description: "Teclado mecánico gaming con switches azules y retroiluminación RGB personalizable.",
    features: [
      "Switches mecánicos azules",
      "Retroiluminación RGB",
      "87 teclas compacto",
      "Anti-ghosting completo",
      "Software de personalización"
    ],
    inStock: true,
    rating: 4.9,
    reviews: 289
  },
  {
    id: 12,
    name: "Webcam HD 1080p con Micrófono",
    price: 7800,
    image: "https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "perifericos",
    description: "Cámara web Full HD con micrófono integrado y enfoque automático.",
    features: [
      "Resolución Full HD 1080p",
      "Micrófono con cancelación de ruido",
      "Enfoque automático",
      "Clip universal",
      "Compatible con todas las plataformas"
    ],
    inStock: true,
    rating: 4.5,
    reviews: 156
  }
]