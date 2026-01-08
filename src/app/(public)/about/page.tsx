export default function AboutPage() {
    return (
        <div className="container flex flex-col items-center justify-center min-h-[60vh] py-10 text-center">
            <h1 className="text-4xl font-bold mb-6">About MSPK Trading</h1>
            <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
                MSPK Trading is a premier financial technology firm dedicated to providing accurate, data-driven trading signals.
                Our team of expert analysts and advanced algorithms work around the clock to identify profit opportunities
                in the Equity, Futures, and Options markets.
            </p>
            
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 bg-muted rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Transparency</h3>
                    <p className="text-sm text-muted-foreground">Verifiable track record with fully transparent signal history.</p>
                </div>
                <div className="p-6 bg-muted rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Accuracy</h3>
                    <p className="text-sm text-muted-foreground">High-precision signals backed by rigorous technical analysis.</p>
                </div>
                <div className="p-6 bg-muted rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Support</h3>
                    <p className="text-sm text-muted-foreground">Dedicated support team to help you succeed in your trading journey.</p>
                </div>
            </div>
        </div>
    );
}
