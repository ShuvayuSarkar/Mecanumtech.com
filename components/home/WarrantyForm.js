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
        <section id="warranty" className="py-16 bg-gradient-to-br from-green-50 to-emerald-100 font-inter">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold mb-4 text-emerald-800">Register Your Warranty</h2>
                        <p className="text-emerald-600">
                            Complete the form below to register your product warranty or submit a warranty claim.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-8 border border-emerald-200">
                        <form onSubmit={handleSubmit} className="font-inter">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="block text-sm font-medium text-emerald-700">
                                        Full Name
                                    </label>
                                    <Input
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your full name"
                                        required
                                        className="border-emerald-300 focus:ring-green-500 focus:border-green-500 font-inter"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="block text-sm font-medium text-emerald-700">
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
                                        className="border-emerald-300 focus:ring-green-500 focus:border-green-500 font-inter"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="productModel" className="block text-sm font-medium text-emerald-700">
                                        Product Model
                                    </label>
                                    <Select
                                        value={formData.productModel}
                                        onValueChange={(value) => setFormData(prev => ({ ...prev, productModel: value }))}
                                    >
                                        <SelectTrigger className="border-emerald-300 focus:ring-green-500 focus:border-green-500 font-inter">
                                            <SelectValue placeholder="Select product model" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-white border-emerald-200">
                                            {productOptions.map((option) => (
                                                <SelectItem key={option.value} value={option.value} className="font-inter">
                                                    {option.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="serialNumber" className="block text-sm font-medium text-emerald-700">
                                        Serial Number
                                    </label>
                                    <Input
                                        id="serialNumber"
                                        name="serialNumber"
                                        value={formData.serialNumber}
                                        onChange={handleChange}
                                        placeholder="Enter product serial number"
                                        required
                                        className="border-emerald-300 focus:ring-green-500 focus:border-green-500 font-inter"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="purchaseDate" className="block text-sm font-medium text-emerald-700">
                                        Purchase Date
                                    </label>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant="outline"
                                                className="w-full justify-start text-left font-normal flex items-center border-emerald-300 text-emerald-700 hover:bg-emerald-50 font-inter"
                                            >
                                                <CalendarIcon className="mr-2 h-4 w-4" />
                                                {purchaseDate ? format(purchaseDate, 'PPP') : <span>Select date</span>}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0 border-emerald-200">
                                            <Calendar
                                                mode="single"
                                                selected={purchaseDate}
                                                onSelect={setPurchaseDate}
                                                initialFocus
                                                className="text-emerald-800 font-inter"
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </div>

                                <div className="space-y-2 md:col-span-2">
                                    <label htmlFor="issueDescription" className="block text-sm font-medium text-emerald-700">
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
                                        className="border-emerald-300 focus:ring-green-500 focus:border-green-500 font-inter"
                                    />
                                </div>

                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                        id="receiptUploaded"
                                        name="receiptUploaded"
                                        checked={formData.receiptUploaded}
                                        onCheckedChange={(checked) => setFormData(prev => ({ ...prev, receiptUploaded: checked }))}
                                        className="text-emerald-600 border-emerald-400 focus:ring-emerald-500"
                                    />
                                    <label
                                        htmlFor="receiptUploaded"
                                        className="text-sm font-medium text-emerald-700 font-inter"
                                    >
                                        I have uploaded a copy of my receipt
                                    </label>
                                </div>

                                <div className="md:col-span-2 mt-4">
                                    <Button type="submit" className="w-full bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white font-inter">
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
