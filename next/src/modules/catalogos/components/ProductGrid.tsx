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
        <div className="mb-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex flex-wrap gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setCurrentCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    currentCategory === category
                      ? 'bg-grey-90 text-pearl shadow-md'
                      : 'bg-pearl text-grey-90 hover:bg-grey-90/10 border border-grey-90/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <select className="text-sm bg-pearl border border-grey-90/20 rounded-full px-4 py-2 text-grey-90 font-medium focus:outline-none focus:ring-2 focus:ring-grey-90/30 shadow-sm">
                <option>Más Reciente</option>
                <option>Precio: Menor a Mayor</option>
                <option>Precio: Mayor a Menor</option>
              </select>
            </div>
          </div>
        </div>

        {/* Grid de Productos */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Paginación */}
        <div className="mt-16 flex justify-center">
          <nav className="flex items-center gap-3">
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                className="h-10 w-10 rounded-full text-sm bg-pearl border border-grey-90/20 text-grey-90 font-medium hover:bg-grey-90 hover:text-pearl transition-all shadow-sm"
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