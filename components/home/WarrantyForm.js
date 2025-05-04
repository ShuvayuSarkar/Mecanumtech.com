'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { format } from 'date-fns';
import { CalendarIcon } from '@heroicons/react/24/outline';

export default function WarrantyForm() {
    const [purchaseDate, setPurchaseDate] = useState();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        productModel: '',
        serialNumber: '',
        issueDescription: '',
        receiptUploaded: false
    });

    useEffect(() => {
        const warrantySection = document.getElementById('warranty');
        
        if (warrantySection) {
            const observer = new IntersectionObserver((entries) => {}, { threshold: 0.3 });
            
            observer.observe(warrantySection);
            
            return () => {
                observer.unobserve(warrantySection);
            };
        }
    }, []);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ ...formData, purchaseDate });
        alert('Warranty claim submitted!');
    };

    const productOptions = [
        { value: 'solar-battery', label: 'Solar Battery System' },
        { value: 'ups-system', label: 'UPS System' },
        { value: 'inverter', label: 'Power Inverter' },
        { value: 'solar-panel', label: 'Solar Panel' },
    ];

    return (
        <section id="warranty" className="py-16 bg-slate-900 font-sans">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold mb-4 text-white">Register Your Warranty</h2>
                        <p className="text-blue-100">
                            Complete the form below to register your product warranty or submit a warranty claim.
                        </p>
                    </div>

                    <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                        <form onSubmit={handleSubmit} className="font-sans">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="block text-sm font-medium text-blue-100">
                                        Full Name
                                    </label>
                                    <Input
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your full name"
                                        required
                                        className="border-gray-700 bg-gray-700 text-white focus:ring-green-500 focus:border-green-500 font-sans"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="block text-sm font-medium text-blue-100">
                                        Email Address
                                    </label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email"
                                        required
                                        className="border-gray-700 bg-gray-700 text-white focus:ring-green-500 focus:border-green-500 font-sans"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="productModel" className="block text-sm font-medium text-blue-100">
                                        Product Model
                                    </label>
                                    <Select
                                        value={formData.productModel}
                                        onValueChange={(value) => setFormData(prev => ({ ...prev, productModel: value }))}
                                    >
                                        <SelectTrigger className="border-gray-700 bg-gray-700 text-white focus:ring-green-500 focus:border-green-500 font-sans">
                                            <SelectValue placeholder="Select product model" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-gray-800 border-gray-700">
                                            {productOptions.map((option) => (
                                                <SelectItem key={option.value} value={option.value} className="font-sans text-white">
                                                    {option.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="serialNumber" className="block text-sm font-medium text-blue-100">
                                        Serial Number
                                    </label>
                                    <Input
                                        id="serialNumber"
                                        name="serialNumber"
                                        value={formData.serialNumber}
                                        onChange={handleChange}
                                        placeholder="Enter product serial number"
                                        required
                                        className="border-gray-700 bg-gray-700 text-white focus:ring-green-500 focus:border-green-500 font-sans"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="purchaseDate" className="block text-sm font-medium text-blue-100">
                                        Purchase Date
                                    </label>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant="outline"
                                                className="w-full justify-start text-left font-normal flex items-center border-gray-700 bg-gray-700 text-white hover:bg-gray-600 font-sans"
                                            >
                                                <CalendarIcon className="mr-2 h-4 w-4" />
                                                {purchaseDate ? format(purchaseDate, 'PPP') : <span>Select date</span>}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0 border-gray-700 bg-gray-800">
                                            <Calendar
                                                mode="single"
                                                selected={purchaseDate}
                                                onSelect={setPurchaseDate}
                                                initialFocus
                                                className="text-white font-sans"
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </div>

                                <div className="space-y-2 md:col-span-2">
                                    <label htmlFor="issueDescription" className="block text-sm font-medium text-blue-100">
                                        Issue Description
                                    </label>
                                    <Textarea
                                        id="issueDescription"
                                        name="issueDescription"
                                        value={formData.issueDescription}
                                        onChange={handleChange}
                                        placeholder="Describe the issue you're experiencing"
                                        rows={4}
                                        required
                                        className="border-gray-700 bg-gray-700 text-white focus:ring-green-500 focus:border-green-500 font-sans"
                                    />
                                </div>

                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                        id="receiptUploaded"
                                        name="receiptUploaded"
                                        checked={formData.receiptUploaded}
                                        onCheckedChange={(checked) => setFormData(prev => ({ ...prev, receiptUploaded: checked }))}
                                        className="text-green-400 border-gray-600 focus:ring-green-500"
                                    />
                                    <label
                                        htmlFor="receiptUploaded"
                                        className="text-sm font-medium text-blue-100 font-sans"
                                    >
                                        I have uploaded a copy of my receipt
                                    </label>
                                </div>

                                <div className="md:col-span-2 mt-4">
                                    <Button type="submit" className="w-full bg-gradient-to-r from-green-500 to-blue-300 hover:opacity-90 text-black font-sans rounded-full">
                                        Submit Warranty Claim
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}