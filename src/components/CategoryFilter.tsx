interface CategoryFilterProps {
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

const categories = [
  { id: 'all', name: 'Todos los Productos', count: 12 },
  { id: 'cables', name: 'Cables', count: 2 },
  { id: 'adaptadores', name: 'Adaptadores', count: 1 },
  { id: 'cargadores', name: 'Cargadores', count: 1 },
  { id: 'hubs', name: 'Hubs USB', count: 1 },
  { id: 'protectores', name: 'Protectores', count: 1 },
  { id: 'iluminacion', name: 'Iluminación', count: 1 },
  { id: 'herramientas', name: 'Herramientas', count: 1 },
  { id: 'perifericos', name: 'Periféricos', count: 2 },
  { id: 'soportes', name: 'Soportes', count: 1 },
  { id: 'organizadores', name: 'Organizadores', count: 1 }
]

export default function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-blue-200">
      <h3 className="text-lg font-semibold text-blue-600 mb-4">Categorías</h3>
      <div className="flex flex-wrap gap-2">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedCategory === category.id
                ? 'bg-blue-600 text-white shadow-md transform scale-105'
                : 'bg-blue-50 text-blue-600 hover:bg-blue-100 hover:shadow-sm'
            }`}
          >
            {category.name}
            <span className="ml-2 text-xs opacity-75">({category.count})</span>
          </button>
        ))}
      </div>
    </div>
  )
}