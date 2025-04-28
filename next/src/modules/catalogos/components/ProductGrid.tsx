import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { Product } from '../types';

const ProductGrid: React.FC = () => {
  const [currentCategory, setCurrentCategory] = useState('Todos');
  const categories = ['Todos', 'Anillos', 'Collares', 'Pulseras', 'Aretes'];

  const products: Product[] = [
    {
      id: '1',
      name: 'Anillo de Oro 18k',
      price: 1299.99,
      image: '/images/products/ring-gold.jpg',
      category: 'Anillos'
    },
    {
      id: '2',
      name: 'Collar de Plata Sterling',
      price: 599.99,
      image: '/images/products/necklace-silver.jpg',
      category: 'Collares'
    },
    {
      id: '3',
      name: 'Pulsera de Oro Rosa',
      price: 899.99,
      image: '/images/products/bracelet-rose.jpg',
      category: 'Pulseras'
    }
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Filtros */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex gap-6">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setCurrentCategory(category)}
                  className={`text-sm transition-colors ${
                    currentCategory === category
                      ? 'text-amber-400 font-medium'
                      : 'text-amber-300/70 hover:text-amber-400'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <select className="text-sm bg-transparent border-0">
                <option>Más Reciente</option>
                <option>Precio: Menor a Mayor</option>
                <option>Precio: Mayor a Menor</option>
              </select>
            </div>
          </div>
        </div>

        {/* Grid de Productos */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Paginación */}
        <div className="mt-12 flex justify-center">
          <nav className="flex items-center gap-2">
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                className="h-8 w-8 rounded-full text-sm"
              >
                {page}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid; 