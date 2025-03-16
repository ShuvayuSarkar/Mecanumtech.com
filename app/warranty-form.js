import { Input } from '../components/ui/input';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';

export default function WarrantyForm() {
  return (
    <Card className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Warranty Registration</h2>
      <form className="space-y-4">
        <Input placeholder="Full Name" required />
        <Input type="email" placeholder="Email" required />
        <Input placeholder="Product Serial Number" required />
        <Input type="date" placeholder="Purchase Date" required />
        <Button className="w-full" type="submit">
          Submit
        </Button>
      </form>
    </Card>
  );
}