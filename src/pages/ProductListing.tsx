import React from 'react';
import ProductGrid from '../components/products/ProductGrid';
import ProductFilters from '../components/products/ProductFilters';
import type { Product } from '../types/product';

const SAMPLE_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Leather Tote Bag',
    designer: 'GUCCI',
    price: 2800,
    imageUrl: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80',
    category: 'Bags',
    cryptoPrice: {
      btc: 0.0642,
      eth: 1.2345
    }
  },
  {
    id: '2',
    name: 'Silk Evening Dress',
    designer: 'VALENTINO',
    price: 4500,
    imageUrl: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80',
    category: 'Clothing',
    cryptoPrice: {
      btc: 0.1032,
      eth: 1.9876
    }
  },
  {
    id: '3',
    name: 'Classic Loafers',
    designer: 'PRADA',
    price: 950,
    imageUrl: 'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&q=80',
    category: 'Shoes',
    cryptoPrice: {
      btc: 0.0218,
      eth: 0.4179
    }
  },
  {
    id: '4',
    name: 'Diamond Necklace',
    designer: 'CARTIER',
    price: 12500,
    imageUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80',
    category: 'Jewelry',
    cryptoPrice: {
      btc: 0.2867,
      eth: 5.5089
    }
  }
];

const ProductListing: React.FC = () => {
  return (
    <div className="container mx-auto px-16 py-12">
      <div className="mb-12">
        <h1 className="font-heading font-heading1 text-3xl tracking-wider mb-4">New Arrivals</h1>
        <p className="font-body text-gray-600">Discover our latest luxury pieces</p>
      </div>
      
      <ProductFilters />
      <ProductGrid products={SAMPLE_PRODUCTS} />
    </div>
  );
};

export default ProductListing;