import { Card } from '../components/ui/card';

export default function ProductShowcase() {
  const products = [
    { id: 1, name: 'Premium Toolset', image: '/products/product1.jpg' },
    { id: 2, name: 'Professional Kit', image: '/products/product2.jpg' },
    { id: 3, name: 'Deluxe Package', image: '/products/product3.jpg' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="relative h-64 overflow-hidden group">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundImage: `url(${product.image})` }}
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white tracking-wide">
                  {product.name}
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}