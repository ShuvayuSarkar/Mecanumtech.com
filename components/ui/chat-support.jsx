'use client';
import { useState, useEffect } from 'react';
import { Button } from './button';
import { Input } from './input';
import { Card } from './card';

export default function ChatSupport() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! Our team will contact you soon.');
    setMessage('');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Button
        variant="outline"
        size="icon"
        className="w-16 h-16 rounded-full shadow-lg"
        onClick={toggleChat}
      >
        <i className="fas fa-comments text-xl" />
      </Button>

      {isOpen && (
        <Card className="absolute bottom-20 right-0 w-80">
          <div className="p-4 border-b">
            <h3 className="font-semibold">Chat with Support</h3>
          </div>
          <form onSubmit={handleSubmit} className="p-4 space-y-4">
            <Input
              placeholder="Your name"
              required
            />
            <Input
              type="email"
              placeholder="Your email"
              required
            />
            <Input
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </Card>
      )}
    </div>
  );
}