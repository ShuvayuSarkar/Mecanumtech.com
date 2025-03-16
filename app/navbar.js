'use client';
import { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-40 transition-all ${scrolled ? 'py-3 shadow-md' : 'py-4'}`}>
      <div className="container flex items-center justify-between">
        <div className="text-xl font-bold">Mecanum Energitech</div>
        <div className="flex gap-4">
          <Button variant="ghost">Home</Button>
          <Button variant="ghost">Products</Button>
          <Button variant="ghost">Contact</Button>
        </div>
      </div>
    </nav>
  );
}