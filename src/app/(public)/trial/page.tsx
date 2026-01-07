'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import api from '@/lib/api';
import { toast } from 'sonner'; // Next.js 14 / Shadcn usually uses sonner or toast

export default function TrialPage() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone')
        };

        try {
            await api.post('/leads', data);
            setSuccess(true);
            // toast.success("Request submitted successfully!");
        } catch (error) {
            console.error(error);
            // toast.error("Something went wrong");
        } finally {
            setLoading(false);
        }
    }

    if (success) {
        return (
            <div className="container flex items-center justify-center min-h-[80vh]">
                <Card className="w-full max-w-md text-center p-6">
                    <CardHeader>
                        <CardTitle className="text-2xl text-green-600">Request Received!</CardTitle>
                        <CardDescription>
                            Thank you for your interest. Our team will contact you shortly to activate your free trial.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Button onClick={() => setSuccess(false)} variant="outline">Submit Another</Button>
                    </CardContent>
                </Card>
            </div>
        )
    }

    return (
        <div className="container flex items-center justify-center min-h-[80vh] py-10">
            <Card className="w-full max-w-lg">
                <CardHeader>
                    <CardTitle>Request Free Trial</CardTitle>
                    <CardDescription>
                        Experience our premium signals for free. Fill out the form below.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={onSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input id="name" name="name" required placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" name="email" type="email" required placeholder="john@example.com" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input id="phone" name="phone" type="tel" required placeholder="+91 98765 43210" />
                        </div>
                        <Button type="submit" className="w-full" disabled={loading}>
                            {loading ? 'Submitting...' : 'Request Trial'}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
