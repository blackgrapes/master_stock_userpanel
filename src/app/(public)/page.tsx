"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, TrendingUp, Lock, Zap, Shield, BarChart3, Clock, CheckCircle2 } from "lucide-react";
import { MOCK_SIGNALS, MOCK_STATS } from "@/lib/mock";
import { MarketTicker } from "@/components/market-ticker";

export default function Home() {
    const signals = MOCK_SIGNALS.slice(0, 3);

    return (
        <div className="flex flex-col min-h-screen font-sans">
            <MarketTicker />

            {/* Hero Section - Fintech Style */}
            <section className="relative pt-20 pb-20 md:pb-32 overflow-hidden">

                {/* Background Grid & Spotlights */}
                <div className="absolute inset-0 z-0 w-full h-full bg-background">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.2]"></div>
                    <div className="absolute top-0 left-0 right-0 h-[500px] w-full bg-gradient-to-b from-primary/5 via-transparent to-transparent blur-3xl opacity-40"></div>
                </div>

                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Left Column: Text & CTAs */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">

                        {/* Social Proof Pill (Left Aligned) */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                            Trusted by 10,000+ Traders
                        </div>

                        {/* Main Heading */}
                        <div className="relative">
                            <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter text-foreground leading-[0.9]">
                                Trade Smarter. <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary/80 to-primary/50 filter drop-shadow-sm">Win Faster.</span>
                            </h1>
                            {/* Decorative Underline */}
                            <svg className="hidden lg:block absolute w-[120%] h-4 -bottom-2 -left-4 text-primary/20 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                            </svg>
                        </div>

                        {/* Subtext */}
                        <p className="max-w-[35rem] text-lg sm:text-xl text-muted-foreground leading-relaxed">
                            Institutional-grade signals delivered to your dashboard and mobile.
                            <span className="text-foreground font-medium"> 85% Win Rate</span> verified.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <Link href="/trial" className="w-full sm:w-auto">
                                <Button size="lg" className="w-full sm:w-auto h-14 px-8 rounded-full bg-primary text-primary-foreground font-bold shadow-lg hover:shadow-primary/25 hover:scale-105 transition-all">
                                    Start Free Trial
                                </Button>
                            </Link>
                            <Link href="/market" className="w-full sm:w-auto">
                                <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 px-8 rounded-full border-border/50 bg-background/50 backdrop-blur-sm hover:bg-muted font-semibold group">
                                    View Performance <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </div>

                        {/* Live Tech Stats Strip */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 text-[10px] uppercase tracking-widest text-muted-foreground font-mono opacity-80 border-t border-border/50 pt-6 w-full">
                            <div className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                System Latency: 12ms
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse delay-75"></span>
                                AI Scanning: Active
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex -space-x-2">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-foreground/50"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.21-.93 3.69-.93.95 0 1.88.34 2.67.93-2.43 1.5-2.05 5.56.44 6.59-.44 1.44-1.12 2.87-1.88 3.64zm-3.35-13.7c.56-1.5 2.53-2.62 4.41-2.5 0 1.78-1.78 3.59-4.41 2.5z" /></svg>
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-foreground/50"><path d="M3.5 19.5l4.5-8L3.5 19.5zm5.5-9.5l2.5-1.5L9 8.5zM12 2l-9 16 9 4 9-4L12 2zm1 18.5l-2.5-1.5L13 17l-2.5 2z" /></svg>
                                </div>
                                <span className="text-xs">App Available</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Golden Fintech Ecosystem (Theme Aligned) */}
                    <div className="relative hidden lg:flex h-[600px] w-full items-center justify-end perspective-1000">
                        {/* Golden Glow Background */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-primary/20 blur-[130px] rounded-full opacity-60 animate-pulse-slow"></div>
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30"></div>

                        {/* Central "Master Strategy" Card */}
                        <div className="relative z-20 w-[380px] bg-card/40 backdrop-blur-xl border border-primary/20 rounded-[32px] shadow-2xl shadow-primary/5 p-6 transform hover:scale-[1.02] transition-transform duration-500 ease-out group">
                            {/* Premium header */}
                            <div className="flex justify-between items-center mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-white shadow-lg shadow-primary/20">
                                        <Zap className="w-5 h-5 fill-current" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Active Strategy</div>
                                        <div className="font-bold text-foreground text-lg">Golden Eagle</div>
                                    </div>
                                </div>
                                <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                                    Live
                                </div>
                            </div>

                            {/* Main Chart Area */}
                            <div className="relative h-48 bg-gradient-to-b from-primary/5 to-transparent rounded-2xl border border-primary/10 overflow-hidden mb-6 group-hover:border-primary/30 transition-colors">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <svg className="w-full h-full p-4 overflow-visible" preserveAspectRatio="none">
                                        <path d="M0,100 C40,80 80,110 120,40 S200,60 240,10 V140 H0 Z" fill="url(#goldGradient)" className="opacity-30" />
                                        <path d="M0,100 C40,80 80,110 120,40 S200,60 240,10" fill="none" stroke="currentColor" strokeWidth="4" className="text-primary drop-shadow-md" />
                                        <defs>
                                            <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
                                                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                                            </linearGradient>
                                        </defs>
                                        {/* Highlight Marker */}
                                        <circle cx="240" cy="10" r="6" className="fill-primary animate-ping opacity-75" />
                                        <circle cx="240" cy="10" r="4" className="fill-background stroke-primary stroke-2" />
                                    </svg>
                                </div>
                                <div className="absolute top-4 left-4">
                                    <div className="text-3xl font-bold text-primary tracking-tight">85%</div>
                                    <div className="text-[10px] font-bold text-muted-foreground uppercase">Win Rate</div>
                                </div>
                            </div>

                            {/* Performance Metrics */}
                            <div className="grid grid-cols-2 gap-3">
                                <div className="p-3 rounded-2xl bg-muted/50 border border-border flex flex-col items-center text-center hover:bg-muted/80 transition-colors">
                                    <span className="text-[10px] font-bold text-muted-foreground uppercase">Total Profit</span>
                                    <span className="text-lg font-bold text-green-500">+₹1.2L</span>
                                </div>
                                <div className="p-3 rounded-2xl bg-muted/50 border border-border flex flex-col items-center text-center hover:bg-muted/80 transition-colors">
                                    <span className="text-[10px] font-bold text-muted-foreground uppercase">Trades</span>
                                    <span className="text-lg font-bold text-foreground">1,240</span>
                                </div>
                            </div>
                        </div>


                        {/* Decorative Blur Circles */}
                        <div className="absolute top-20 left-10 w-24 h-24 bg-primary/20 rounded-full blur-2xl -z-10 animate-blob"></div>
                        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -z-10 animate-blob animation-delay-2000"></div>

                    </div>
                </div>

                {/* Dashboard Preivew (Moved Below Split Hero) */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 mt-8 lg:mt-0 flex flex-col items-center gap-10 text-center">
                    {/* High-Fidelity Dashboard Mockup (Flat & Premium) */}
                    <div className="relative w-full max-w-7xl mx-auto px-3 group mt-8">
                        {/* Glow Effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500"></div>

                        <div className="relative rounded-xl border border-border bg-card shadow-2xl overflow-hidden ring-1 ring-white/5">
                            {/* Terminal Header */}
                            <div className="h-14 border-b border-border bg-muted/20 flex items-center justify-between px-6">
                                <div className="flex items-center gap-4">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                        <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                    </div>
                                    <div className="h-4 w-[1px] bg-border mx-2"></div>
                                    <div className="flex items-center gap-3 text-sm font-medium text-muted-foreground">
                                        <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-background border border-border/50 text-foreground shadow-sm">
                                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                                            MSPK Terminal v2.0
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6 text-sm">
                                    <div className="flex flex-col items-end leading-none">
                                        <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold">Portfolio Value</span>
                                        <span className="font-mono font-bold text-foreground">₹2,45,000.00</span>
                                    </div>
                                    <div className="flex flex-col items-end leading-none">
                                        <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold">Today's P&L</span>
                                        <span className="font-mono font-bold text-green-500">+₹12,450.00</span>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30"></div>
                                </div>
                            </div>

                            {/* Main Trading Interface */}
                            <div className="p-0 grid grid-cols-1 lg:grid-cols-4 h-[500px] divide-x divide-border">
                                {/* Left: Market Watch */}
                                <div className="hidden lg:flex col-span-1 flex-col bg-muted/5">
                                    <div className="p-4 border-b border-border font-semibold text-sm flex justify-between items-center">
                                        <span>Market Watch</span>
                                        <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded">Live</span>
                                    </div>
                                    <div className="flex-1 overflow-y-auto">
                                        {[
                                            { s: 'NIFTY 50', p: '21,750.45', c: '+1.2%', up: true },
                                            { s: 'BANKNIFTY', p: '48,150.20', c: '-0.4%', up: false },
                                            { s: 'RELIANCE', p: '2,850.00', c: '+0.8%', up: true },
                                            { s: 'HDFCBANK', p: '1,640.10', c: '+0.2%', up: true },
                                            { s: 'INFY', p: '1,520.00', c: '-1.1%', up: false },
                                            { s: 'TATASTEEL', p: '135.40', c: '+2.4%', up: true },
                                        ].map((ticker, i) => (
                                            <div key={i} className="p-3 border-b border-border/50 hover:bg-muted/50 cursor-pointer transition-colors group/item relative">
                                                {i === 0 && <div className="absolute inset-y-0 left-0 w-1 bg-primary"></div>}
                                                <div className="flex justify-between items-start">
                                                    <span className="font-bold text-sm">{ticker.s}</span>
                                                    <span className={`font-mono text-sm ${ticker.up ? 'text-green-500' : 'text-red-500'}`}>{ticker.p}</span>
                                                </div>
                                                <div className="flex justify-between items-center mt-1">
                                                    <span className="text-[10px] text-muted-foreground border border-border/50 px-1 rounded">NSE</span>
                                                    <span className={`text-[10px] ${ticker.up ? 'text-green-500' : 'text-red-500'}`}>{ticker.c}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Center: Chart Area */}
                                <div className="col-span-1 lg:col-span-2 flex flex-col bg-background relative">
                                    {/* Chart Header */}
                                    <div className="p-4 border-b border-border flex justify-between items-center bg-background/50 backdrop-blur">
                                        <div className="flex items-baseline gap-2">
                                            <h3 className="text-lg font-bold">NIFTY 50</h3>
                                            <span className="text-xs text-muted-foreground">INDEX</span>
                                        </div>
                                        <div className="flex gap-1">
                                            {['1m', '5m', '15m', '1H', '1D'].map(t => (
                                                <div key={t} className={`px-3 py-1 rounded-md text-xs font-medium cursor-pointer ${t === '15m' ? 'bg-primary/10 text-primary' : 'hover:bg-muted text-muted-foreground'}`}>{t}</div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Chart Viz */}
                                    <div className="flex-1 relative w-full p-4 group-hover:scale-[1.01] transition-transform duration-700">
                                        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:50px_50px] opacity-[0.1]"></div>

                                        {/* Simulated Candles (CSS or simplified SVG) - Using Area for elegance */}
                                        <div className="w-full h-full relative">
                                            <svg viewBox="0 0 800 300" className="w-full h-full" preserveAspectRatio="none">
                                                <defs>
                                                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                                        <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
                                                        <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                                                    </linearGradient>
                                                </defs>
                                                <path d="M0,250 C100,240 150,200 250,220 C350,240 400,100 500,120 C600,140 700,50 800,80 V300 H0 Z" fill="url(#chartGradient)" />
                                                <path d="M0,250 C100,240 150,200 250,220 C350,240 400,100 500,120 C600,140 700,50 800,80" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" />

                                                {/* Simulated Moving Averages */}
                                                <path d="M0,280 C150,260 300,200 500,180 C650,160 750,100 800,120" fill="none" stroke="hsl(var(--foreground))" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="4 4" />
                                            </svg>

                                            {/* Current Price Beacon */}
                                            <div className="absolute right-0 top-[26%] flex items-center">
                                                <div className="w-20 bg-primary text-primary-foreground text-xs font-bold py-1 px-2 rounded-l shadow-lg">21,750.45</div>
                                                <div className="h-[1px] w-full bg-primary absolute right-0 top-1/2 -z-10 bg-opacity-50 border-t border-dashed border-primary/50 w-[800px]"></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Bar */}
                                    <div className="h-16 border-t border-border flex items-center px-6 gap-4 bg-muted/10">
                                        <Button className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold text-lg h-10">BUY CALL</Button>
                                        <div className="flex flex-col items-center px-4">
                                            <span className="text-[10px] text-muted-foreground uppercase font-bold">Qty</span>
                                            <span className="font-mono font-bold">50</span>
                                        </div>
                                        <Button className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold text-lg h-10">BUY PUT</Button>
                                    </div>
                                </div>

                                {/* Right: Active Alert Feed */}
                                <div className="col-span-1 bg-muted/5 flex flex-col">
                                    <div className="p-4 border-b border-border font-semibold text-sm flex justify-between items-center">
                                        <span>AI Signals</span>
                                        <Zap className="h-4 w-4 text-amber-500 fill-current" />
                                    </div>
                                    <div className="p-4 space-y-3">
                                        <div className="p-3 bg-card border border-border rounded-lg shadow-sm border-l-4 border-l-green-500">
                                            <div className="flex justify-between mb-1">
                                                <span className="font-bold text-sm">BANKNIFTY</span>
                                                <span className="text-[10px] bg-green-500/10 text-green-500 px-1.5 py-0.5 rounded font-bold">BUY</span>
                                            </div>
                                            <div className="text-xs text-muted-foreground flex justify-between">
                                                <span>Entry: 48,100</span>
                                                <span>Target: 48,300</span>
                                            </div>
                                            <div className="mt-2 text-[10px] text-muted-foreground text-right">2 mins ago</div>
                                        </div>

                                        <div className="p-3 bg-card border border-border rounded-lg shadow-sm border-l-4 border-l-amber-500 opacity-60">
                                            <div className="flex justify-between mb-1">
                                                <span className="font-bold text-sm">NIFTY</span>
                                                <span className="text-[10px] bg-amber-500/10 text-amber-500 px-1.5 py-0.5 rounded font-bold">HOLD</span>
                                            </div>
                                            <div className="text-xs text-muted-foreground">Approaching Resistance</div>
                                        </div>
                                    </div>

                                    <div className="mt-auto p-4 border-t border-border bg-gradient-to-t from-primary/5 to-transparent">
                                        <div className="text-xs text-center text-muted-foreground mb-2">Want visuals like this?</div>
                                        <Link href="/trial">
                                            <Button size="sm" variant="outline" className="w-full border-primary/20 text-primary hover:bg-primary/10">Get Full Access</Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >

                </div >
            </section >

            {/* Platform Ecosystem - SOW Features */}
            < section className="w-full max-w-7xl mx-auto px-2 py-24 relative z-10" >
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Complete <span className="text-primary">Trading Ecosystem</span></h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Built for speed, accuracy, and scale. Powered by institutional-grade infrastructure.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {/* Feature 1: Strategy Engine */}
                    <Card className="glass-card border-border/50 hover:border-primary/50 transition-all">
                        <CardHeader>
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                                <Zap className="w-6 h-6" />
                            </div>
                            <CardTitle className="text-xl">Smart Strategy Engine</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-4">Automated execution with customizable parameters. Backtest strategies against historical data before going live.</p>
                            <ul className="space-y-2 text-sm text-foreground/80">
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Live Execution & Backtesting</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Custom Strategy Parameters</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Feature 2: Multi-Channel Alerts */}
                    <Card className="glass-card border-border/50 hover:border-primary/50 transition-all">
                        <CardHeader>
                            <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 mb-4">
                                <Shield className="w-6 h-6" />
                            </div>
                            <CardTitle className="text-xl">Multi-Channel Alerts</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-4">Never miss a setup. Get instant notifications delivered to your preferred device and platform.</p>
                            <ul className="space-y-2 text-sm text-foreground/80">
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> WhatsApp, Telegram, & SMS</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> &lt; 100ms Push Latency</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Feature 3: Low Latency Data */}
                    <Card className="glass-card border-border/50 hover:border-primary/50 transition-all">
                        <CardHeader>
                            <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500 mb-4">
                                <BarChart3 className="w-6 h-6" />
                            </div>
                            <CardTitle className="text-xl">Ultra-Low Latency</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-4">Powered by institutional feeds (Polygon.io, DxFeed) for microsecond-level precision.</p>
                            <ul className="space-y-2 text-sm text-foreground/80">
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> &lt; 1ms Tick Delivery</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Real-time Tick-by-Tick Data</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Feature 4: Analytics */}
                    <Card className="glass-card border-border/50 hover:border-primary/50 transition-all">
                        <CardHeader>
                            <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500 mb-4">
                                <TrendingUp className="w-6 h-6" />
                            </div>
                            <CardTitle className="text-xl">Deep Analytics</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-4">Comprehensive trading journals and performance reports to optimize your edge.</p>
                            <ul className="space-y-2 text-sm text-foreground/80">
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Strategy-wise Performance</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> One-Click CSV/PDF Export</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Feature 5: Security */}
                    <Card className="glass-card border-border/50 hover:border-primary/50 transition-all">
                        <CardHeader>
                            <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 mb-4">
                                <Lock className="w-6 h-6" />
                            </div>
                            <CardTitle className="text-xl">Enterprise Security</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-4">Your data and API keys are protected with bank-grade encryption and protocols.</p>
                            <ul className="space-y-2 text-sm text-foreground/80">
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> JWT & Refresh Tokens</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Encrypted Credential Storage</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Feature 6: Cross Platform */}
                    <Card className="glass-card border-border/50 hover:border-primary/50 transition-all">
                        <CardHeader>
                            <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-500 mb-4">
                                <Clock className="w-6 h-6" />
                            </div>
                            <CardTitle className="text-xl">Frontend & Mobile</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-4">Seamless experience across Web and Mobile App (Flutter) with real-time sync.</p>
                            <ul className="space-y-2 text-sm text-foreground/80">
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Next.js + Tailwind Web</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Native iOS & Android App</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </section >

            {/* Live Signals Strip */}
            < section className="w-full max-w-7xl mx-auto px-2 py-12 md:py-24 bg-muted/20 rounded-3xl my-12" >
                <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
                    <div className="text-left">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Recent <span className="text-primary">Alpha</span> Setup</h2>
                        <p className="text-muted-foreground mt-2 text-lg">Live signals currently tracked by our algorithms.</p>
                    </div>
                    <Link href="/market">
                        <Button variant="outline" size="lg" className="border-border hover:bg-background h-12">View All Signals <ArrowRight className="ml-2 w-4 h-4" /></Button>
                    </Link>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {signals.map((signal) => (
                        <Card key={signal.id} className="relative overflow-hidden glass-card border-border/40 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b border-border/40 bg-muted/20">
                                <div>
                                    <Badge variant="outline" className="mb-2 border-border/50">{signal.segment}</Badge>
                                    <CardTitle className="text-xl font-bold tracking-tight">{signal.symbol}</CardTitle>
                                </div>
                                <Badge variant={signal.type === 'BUY' ? "default" : "destructive"} className={`px-3 py-1 text-sm ${signal.type === 'BUY' ? 'bg-green-500/20 text-green-600 dark:text-green-400' : 'bg-red-500/20 text-red-600 dark:text-red-400'}`}>
                                    {signal.type}
                                </Badge>
                            </CardHeader>
                            <CardContent className="pt-6">
                                <div className="flex justify-between items-baseline mb-6">
                                    <div className="text-sm font-medium text-muted-foreground">Entry Zone</div>
                                    <div className="text-3xl font-mono font-bold text-foreground tracking-tighter">{signal.entry}</div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                                    <div className="bg-muted/30 p-3 rounded-lg text-center border border-border/30">
                                        <div className="text-muted-foreground text-xs uppercase font-bold mb-1">Stop Loss</div>
                                        <div className="font-mono text-red-500 font-bold">{signal.stopLoss}</div>
                                    </div>
                                    <div className="bg-muted/30 p-3 rounded-lg text-center border border-border/30">
                                        <div className="text-muted-foreground text-xs uppercase font-bold mb-1">Target</div>
                                        <div className="font-mono text-green-500 font-bold">{signal.targets[0]}</div>
                                    </div>
                                </div>

                                {!signal.isFree && signal.status !== 'Closed' && (
                                    <div className="absolute inset-0 bg-background/60 backdrop-blur-md flex items-center justify-center z-10 transition-opacity opacity-100 group-hover:opacity-95">
                                        <div className="text-center p-6 bg-card border border-border/50 rounded-xl shadow-2xl max-w-[200px]">
                                            <Lock className="mx-auto h-8 w-8 text-primary mb-3" />
                                            <h4 className="font-bold text-base mb-1">Premium Member</h4>
                                            <Button size="sm" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mt-2" asChild>
                                                <Link href="/login">Unlock</Link>
                                            </Button>
                                        </div>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section >

            {/* Testimonials - Social Proof */}
            < section className="w-full max-w-7xl mx-auto px-2 py-24 text-center" >
                <h2 className="text-3xl md:text-5xl font-bold mb-16 tracking-tight">Trusted by <span className="text-primary">10,000+</span> Traders</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((i) => (
                        <Card key={i} className="border-border/50 bg-card/30">
                            <CardContent className="pt-8">
                                <div className="flex justify-center mb-4 text-primary">
                                    {[1, 2, 3, 4, 5].map(s => <CheckCircle2 key={s} className="w-5 h-5 fill-current text-primary" />)}
                                </div>
                                <p className="text-lg italic text-muted-foreground mb-6">&quot;Finally a signal provider that is transparent with their P&L. I&apos;ve recovered my past losses in just 2 months using the Pro plan.&quot;</p>
                                <div className="font-bold text-foreground">Rahul S.</div>
                                <div className="text-sm text-muted-foreground">Pro Trader • Mumbai</div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section >
        </div >
    );
}
