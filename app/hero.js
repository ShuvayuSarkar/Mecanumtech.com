import { Button } from '../components/ui/button';

export default function Hero() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to MyProject</h1>
        <p className="text-lg text-gray-600 mb-8">Innovative solutions for modern needs</p>
        <Button size="lg">Get Started</Button>
      </div>
    </section>
  );
}