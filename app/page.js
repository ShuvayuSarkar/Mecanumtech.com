import Navbar from './navbar';
import Hero from './hero';
import ProductShowcase from './product-showcase';
import WarrantyForm from './warranty-form';
import Footer from './footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProductShowcase />
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto">
            <WarrantyForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}