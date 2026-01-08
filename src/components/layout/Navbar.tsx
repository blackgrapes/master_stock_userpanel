"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Zap } from "lucide-react"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const pathname = usePathname()

    return (
        <div className={cn(
            "flex justify-center w-full fixed z-50 px-2 transition-all duration-[1200ms] ease-in-out",
            scrolled ? "top-2 sm:top-2" : "top-0 sm:top-10"
        )}>
            <header className={cn(
                "w-full border-b sm:border border-black/5 dark:border-white/10 bg-background/70 dark:bg-black/50 backdrop-blur-2xl shadow-xl dark:shadow-[0_8px_40px_-12px_rgba(255,255,255,0.1)] transition-all duration-[1200ms] ease-in-out ring-1 ring-black/5 dark:ring-white/15",
                scrolled ? "max-w-7xl rounded-none sm:rounded-full" : "max-w-7xl rounded-none sm:rounded-t-none sm:rounded-b-2xl"
            )}>
                <div className="flex h-16 items-center justify-between px-6">

                    {/* Logo Section */}
                    <div className="flex items-center gap-2">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                                <Zap className="h-5 w-5 text-primary fill-current" />
                            </div>
                            <span className="font-heading text-lg font-bold tracking-tight text-foreground/90">
                                MSPK
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation - Centered Dock */}
                    <nav className="hidden md:flex items-center justify-center gap-1 bg-secondary/50 p-1.5 rounded-full border border-border/10 backdrop-blur-md">
                        {['Home', 'Market', 'Plans', 'About'].map((item) => {
                            const href = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
                            const isActive = item === 'Home' ? pathname === '/' : pathname.startsWith(href);

                            return (
                                <Link
                                    key={item}
                                    href={href}
                                    className={cn(
                                        "px-5 py-2 text-sm transition-all duration-300 rounded-full",
                                        isActive
                                            ? "bg-background text-foreground font-bold shadow-sm ring-1 ring-black/5 dark:ring-white/10"
                                            : "font-medium text-muted-foreground hover:text-foreground hover:bg-background/50"
                                    )}
                                >
                                    {item}
                                </Link>
                            )
                        })}
                    </nav>

                    {/* Right Actions */}
                    <div className="flex items-center gap-3">
                        <ModeToggle />
                        <Link href="/login" className="hidden sm:block">
                            <Button variant="ghost" size="sm" className="rounded-full font-semibold hover:bg-muted text-foreground/80">
                                Log In
                            </Button>
                        </Link>
                        <Link href="/trial">
                            <Button size="sm" className="relative overflow-hidden rounded-full bg-foreground text-background font-bold hover:bg-foreground/90 px-6 shadow-lg group/btn">
                                <span className="relative z-10">Get Started</span>
                                <div className="absolute inset-0 -translate-x-[100%] group-hover/btn:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </header>
        </div >
    )
}
