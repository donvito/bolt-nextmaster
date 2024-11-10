import React from 'react';
import { Link } from './Link';
import { products } from '../data/products';

export function ProductGrid() {
  const currentCategory = 'Art Books and Educational Materials';
  const categoryProducts = products.filter(product => product.category === currentCategory);
  const totalProducts = products.length;

  return (
    <div className="flex-1">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">{currentCategory}</h1>
        <p className="text-gray-600">Explore {totalProducts.toLocaleString()} products</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {categoryProducts.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            className="group"
          >
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
              />
            </div>
            <h3 className="mt-2 text-sm text-gray-700 group-hover:text-green-800">
              {product.title}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
}