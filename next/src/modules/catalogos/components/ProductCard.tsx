import React, { useState } from 'react';
import Image from 'next/image';
import { Product } from '../types';
import Modal from '../../common/components/modal';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const [showDetails, setShowDetails] = useState(false);

  // Función para agregar producto al carrito en localStorage
  const addToCart = () => {
    const stored = localStorage.getItem('cartItems');
    const items = stored ? JSON.parse(stored) as any[] : [];
    const index = items.findIndex(item => item.id === product.id);
    if (index > -1) {
      items[index].quantity += 1;
    } else {
      items.push({ id: product.id, name: product.name, price: product.price, quantity: 1, image: product.image });
    }
    localStorage.setItem('cartItems', JSON.stringify(items));
  };

  return (
    <>
      <div className="group relative bg-pearl rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-grey-90/10">
        <div className="aspect-[3/4] w-full overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={400}
            className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6 space-y-3 bg-pearl/95 backdrop-blur-sm">
          <h3 className="text-lg font-semibold text-grey-100 group-hover:text-grey-90 transition-colors">{product.name}</h3>
          <p className="text-base font-medium text-grey-90 group-hover:text-grey-100 transition-colors">${product.price.toLocaleString()}</p>
          <button
            className="mt-4 w-full bg-grey-90 text-pearl py-3 rounded-lg font-medium hover:bg-grey-100 transition-all shadow-sm"
            onClick={() => setShowDetails(true)}
          >Detalles</button>
        </div>
      </div>
      {showDetails && (
        <Modal title={product.name} onClose={() => setShowDetails(false)}>
          <div className="bg-pearl p-6 rounded-lg">
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-lg border border-grey-90/10" />
            <p className="text-grey-100 font-medium mt-4">Precio: ${product.price.toLocaleString()}</p>
            <p className="text-grey-90">Categoría: {product.category}</p>
            <button 
              className="mt-6 w-full bg-grey-90 text-pearl px-4 py-3 rounded-lg hover:bg-grey-100 transition-all shadow-sm" 
              onClick={() => { addToCart(); setShowDetails(false); }}
            >
              Agregar al Carrito
            </button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default ProductCard; 