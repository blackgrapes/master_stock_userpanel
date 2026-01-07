import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star } from "lucide-react";
import Link from "next/link";
import { MOCK_PLANS } from "@/lib/mock";

export default function PlansPage() {
    return (
        <div className="container py-20 px-4 md:px-6">
            <div className="text-center mb-16 space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-glow">
                    Unlock <span className="text-primary">Professional</span> Trading
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground text-lg">
                    Choose a plan that fits your ambition. Transparent pricing, no hidden fees.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                {MOCK_PLANS.map((plan) => (
                    <Card
                        key={plan.id}
                        className={`flex flex-col relative transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-white/10 ${plan.isPopular ? 'bg-gradient-to-b from-primary/10 to-card border-primary/50 shadow-primary/20 scale-105 z-10' : 'bg-card/50 hover:bg-card'}`}
                    >
                        {plan.isPopular && (
                            <div className="absolute -top-4 left-0 right-0 flex justify-center">
                                <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg flex items-center gap-1">
                                    <Star className="w-3 h-3 fill-current" /> Most Popular
                                </span>
                            </div>
                        )}

                        <CardHeader>
                            <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                            <CardDescription className="text-base">{plan.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <div className="mb-6">
                                <span className="text-4xl font-bold">₹{plan.price.toLocaleString()}</span>
                                <span className="text-muted-foreground ml-2">/ {plan.duration} days</span>
                            </div>

                            <ul className="space-y-4">
                                {plan.features.map((feature: string, i: number) => (
                                    <li key={i} className="flex items-center text-sm">
                                        <div className={`mr-3 rounded-full p-1 ${plan.isPopular ? 'bg-primary text-black' : 'bg-white/10 text-white'}`}>
                                            <Check className="h-3 w-3" />
                                        </div>
                                        <span className="opacity-90">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Link href="/trial" className="w-full">
                                <Button
                                    className={`w-full h-12 text-base font-bold ${plan.isPopular ? 'bg-primary text-black hover:bg-primary/90' : 'variant-outline border-white/20 hover:bg-white/10'}`}
                                    variant={plan.isPopular ? "default" : "outline"}
                                >
                                    Subscribe Now
                                </Button>
                            </Link>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            <div className="mt-20 text-center">
                <p className="text-muted-foreground mb-4">Not ready to commit?</p>
                <Link href="/trial">
                    <Button variant="link" className="text-primary text-lg">Start your 7-day free trial today</Button>
                </Link>
            </div>
        </div>
    );
}
