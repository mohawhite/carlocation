// app/components/hero-section.tsx
import { Button } from "@/app/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="relative bg-gray-900 text-white">
            <div
                className="absolute inset-0 bg-cover bg-center opacity-40"
                style={{
                    backgroundImage: "url('/images/hero.jpg')",
                }}
            />
            <div className="container mx-auto px-4 py-32 relative z-10">
                <div className="max-w-xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        La liberté de mouvement à prix abordable
                    </h1>
                    <p className="text-lg mb-8">
                        Louez la voiture idéale pour tous vos déplacements. Service rapide,
                        véhicules modernes et tarifs compétitifs.
                    </p>
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <Link href="/cars">
                            <Button size="lg" className="w-full sm:w-auto">
                                Voir nos véhicules
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button size="lg" variant="outline" className="w-full sm:w-auto">
                                Nous contacter
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}