import React from 'react';
import ProductGallery from '../components/products/detail/ProductGallery';
import ProductInfo from '../components/products/detail/ProductInfo';
import type { Product } from '../types/product';

// This would normally come from an API
const SAMPLE_PRODUCT: Product = {
  id: '1',
  name: 'The Chain Cassette Bag',
  designer: 'BOTTEGA VENETA',
  price: 4500,
  imageUrl: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80',
  category: 'Bags',
  description: 'Crafted in Italy from soft padded leather, this bag features our signature Intrecciato weave and an oversized chain strap. The flap closure opens to reveal a suede-lined interior with a zip pocket.',
  details: [
    'Made in Italy',
    'Padded Nappa leather',
    'Antique gold-finish hardware',
    'Suede lining',
    'Magnetic flap closure',
    'Interior zip pocket',
    'Adjustable chain strap',
    'Dimensions: 24 x 14 x 4.5 cm'
  ],
  images: [
    'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1591561954555-607968c989ab?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1591561954549-d716f8c6af8a?auto=format&fit=crop&q=80'
  ],
  cryptoPrice: {
    btc: 0.1032,
    eth: 1.9876
  }
};

const ProductDetail: React.FC = () => {
  return (
    <div className="container mx-auto px-16 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <ProductGallery images={SAMPLE_PRODUCT.images || [SAMPLE_PRODUCT.imageUrl]} name={SAMPLE_PRODUCT.name} />
        <ProductInfo product={SAMPLE_PRODUCT} />
      </div>
    </div>
  );
};

export default ProductDetail;