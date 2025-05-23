import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Projects from '@/components/home/Projects';
import About from '@/components/home/About.';
import WarrantyForm from '@/components/home/WarrantyForm';
import ContactUs from '@/components/home/contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <WarrantyForm />
      <ContactUs />
    </main>
  );
}