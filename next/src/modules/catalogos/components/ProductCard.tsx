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
      <div className="relative bg-black/50 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <div className="aspect-[3/4] w-full overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={400}
            className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4 space-y-2 bg-black/60 backdrop-blur-sm">
          <h3 className="text-lg font-semibold text-white group-hover:text-amber-400 transition-colors">{product.name}</h3>
          <p className="text-base text-amber-200 group-hover:text-white transition-colors">${product.price.toLocaleString()}</p>
          <button
            className="mt-4 w-full bg-amber-400 text-black py-2 rounded-md font-medium hover:bg-white hover:text-amber-400 transition-colors"
            onClick={() => setShowDetails(true)}
          >Detalles</button>
        </div>
      </div>
      {showDetails && (
        <Modal title={product.name} onClose={() => setShowDetails(false)}>
          <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded" />
          <p className="text-amber-300">Precio: ${product.price.toLocaleString()}</p>
          <p className="text-gray-700">Categoría: {product.category}</p>
          <button className="mt-4 bg-amber-400 text-white px-4 py-2 rounded" onClick={() => { addToCart(); setShowDetails(false); }}>
            Agregar al Carrito
          </button>
        </Modal>
      )}
    </>
  );
};

export default ProductCard; 