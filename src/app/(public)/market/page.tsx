import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Lock, ArrowUpRight, ArrowDownRight, Gem } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MOCK_SIGNALS } from "@/lib/mock";

export default function MarketPage() {
    const segments = ['All', 'Equity', 'Crypto', 'Commodity'];

    return (
        <div className="container py-10 md:py-20 min-h-screen">
            <div className="mb-12 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading tracking-tight">
                    Live Market <span className="text-primary text-glow-primary">Intel</span>
                </h1>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                    Track our latest high-probability setups. Filter by segment to find what suits your trading style.
                </p>
            </div>

            <Tabs defaultValue="All" className="w-full">
                <div className="flex justify-center mb-8">
                    <TabsList className="bg-white/5 border border-white/10 p-1">
                        {segments.map(seg => (
                            <TabsTrigger key={seg} value={seg} className="px-6 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all">
                                {seg}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </div>

                {segments.map(seg => (
                    <TabsContent key={seg} value={seg} className="space-y-4">
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {MOCK_SIGNALS.filter(s => seg === 'All' || s.segment === seg).map((signal) => (
                                <Card key={signal.id} className="relative overflow-hidden glass-card border-none hover:bg-card/80 transition-all duration-300 group">
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 border-b border-white/5">
                                        <div className="flex items-center gap-3">
                                            <div className={`p-2 rounded-full ${signal.type === 'BUY' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                                                {signal.type === 'BUY' ? <ArrowUpRight className="w-5 h-5" /> : <ArrowDownRight className="w-5 h-5" />}
                                            </div>
                                            <div>
                                                <CardTitle className="text-lg font-bold">{signal.symbol}</CardTitle>
                                                <div className="text-xs text-muted-foreground">{signal.segment}</div>
                                            </div>
                                        </div>
                                        <Badge variant="outline" className={`border ${signal.status === 'Closed' ? 'border-green-500/50 text-green-500' : 'border-blue-500/50 text-blue-500 animate-pulse'}`}>
                                            {signal.status}
                                        </Badge>
                                    </CardHeader>
                                    <CardContent className="pt-6">
                                        <div className="flex justify-between items-center mb-6">
                                            <span className="text-sm font-medium text-muted-foreground">Entry Zone</span>
                                            <span className="text-2xl font-mono font-bold">{signal.entry}</span>
                                        </div>

                                        <div className="grid grid-cols-2 gap-3 text-sm">
                                            <div className="flex flex-col gap-1 p-3 rounded bg-white/5 border border-white/5">
                                                <span className="text-xs text-muted-foreground opacity-70">Stop Loss</span>
                                                <span className="font-mono text-red-400 font-semibold">{signal.stopLoss}</span>
                                            </div>
                                            <div className="flex flex-col gap-1 p-3 rounded bg-white/5 border border-white/5">
                                                <span className="text-xs text-muted-foreground opacity-70">Target 1</span>
                                                <span className="font-mono text-green-400 font-semibold">{signal.targets[0]}</span>
                                            </div>
                                        </div>

                                        {!signal.isFree && (
                                            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm transition-opacity opacity-100">
                                                <Gem className="w-10 h-10 text-primary mb-3" />
                                                <h3 className="text-xl font-bold mb-1">Premium Signal</h3>
                                                <p className="text-sm text-muted-foreground mb-4">Subscribe to view levels</p>
                                                <Link href="/plans">
                                                    <Button className="bg-primary text-black font-bold">Unlock Access</Button>
                                                </Link>
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>
                ))}
            </Tabs>

            {MOCK_SIGNALS.length === 0 && (
                <div className="text-center py-20 text-muted-foreground">
                    No active signals in this category.
                </div>
            )}
        </div>
    );
}
