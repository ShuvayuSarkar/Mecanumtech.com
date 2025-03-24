"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Form schema for validation
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  company: z.string().min(1, {
    message: "Company name is required.",
  }),
  phone: z.string().optional(),
  productInterest: z.string({
    required_error: "Please select a product category.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export function QuoteFormModal({ isOpen, onClose }) {
  // Define form
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      productInterest: "",
      message: "",
    },
  });

  // Form submission handler
  function onSubmit(values) {
    console.log(values);
    alert("Thank you for your interest! We'll get back to you shortly.");
    form.reset();
    onClose();
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] font-sans">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-green-800 font-sans">Request a Quote</DialogTitle>
          <DialogDescription className="text-green-700 font-sans">
            Fill out the form below and our team will get back to you with a personalized quote.
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 font-sans">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-sans">Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} className="font-sans" />
                    </FormControl>
                    <FormMessage className="font-sans" />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-sans">Email</FormLabel>
                    <FormControl>
                      <Input placeholder="email@example.com" type="email" {...field} className="font-sans" />
                    </FormControl>
                    <FormMessage className="font-sans" />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-sans">Company</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Company" {...field} className="font-sans" />
                    </FormControl>
                    <FormMessage className="font-sans" />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-sans">Phone (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="+1 (555) 000-0000" type="tel" {...field} className="font-sans" />
                    </FormControl>
                    <FormMessage className="font-sans" />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="productInterest"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-sans">Product Interest</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="font-sans">
                        <SelectValue placeholder="Select product category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="font-sans">
                      <SelectItem value="lithium-batteries">Lithium Batteries</SelectItem>
                      <SelectItem value="energy-storage">Energy Storage Solutions</SelectItem>
                      <SelectItem value="sustainable-fuel">Sustainable Fuel</SelectItem>
                      <SelectItem value="green-technology">Green Technology</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="font-sans" />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-sans">Message</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Tell us about your project and requirements..." 
                      className="min-h-[100px] font-sans"
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription className="font-sans">
                    Please provide details about your needs so we can prepare an accurate quote.
                  </FormDescription>
                  <FormMessage className="font-sans" />
                </FormItem>
              )}
            />
            
            <DialogFooter className="flex flex-col sm:flex-row gap-3 sm:justify-end pt-4">
              <Button type="button" variant="outline" onClick={onClose} className="border-green-300 text-green-700 hover:bg-green-50 hover:text-green-800 font-sans">
                Cancel
              </Button>
              <Button type="submit" className="bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 font-sans">
                Submit Request
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
