
import React from 'react';
import { PRODUCTS } from '../constants';

const Products: React.FC = () => {
  return (
    <section id="products" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-4 md:space-y-0">
          <div>
            <h2 className="text-cyan-600 font-bold tracking-widest uppercase text-sm mb-4">Our Stock</h2>
            <h3 className="text-3xl md:text-4xl font-display text-slate-900">Featured Ornamental Fish</h3>
          </div>
          <p className="text-slate-600 max-w-md">
            All our fish are quarantined and bred in stress-free environments to ensure they reach you in peak condition.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-slate-100">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-cyan-600 uppercase">
                  {product.category}
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold text-slate-900 mb-2">{product.name}</h4>
                <p className="text-slate-500 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                <button className="w-full py-2 bg-slate-50 text-cyan-600 font-semibold rounded-xl group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                  Inquire Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
