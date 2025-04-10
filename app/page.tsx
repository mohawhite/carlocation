// app/page.tsx
import HeroSection from "./components/hero-section";
import ServicesSection from "./components/services-section";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
      <div className="flex flex-col">
        <HeroSection />

        <section className="container mx-auto py-16 px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            Bienvenue chez CarLocation
          </h2>
          <p className="text-lg text-center max-w-3xl mx-auto mb-8">
            Nous proposons une large gamme de véhicules pour répondre à tous vos besoins de mobilité.
            Que ce soit pour un voyage d'affaires, des vacances en famille ou un déménagement,
            nous avons la solution idéale pour vous.
          </p>
          <div className="flex justify-center">
            <Link href="/cars">
              <Button size="lg" className="mr-4">
                Voir nos véhicules
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Nous contacter
              </Button>
            </Link>
          </div>
        </section>

        <ServicesSection />

        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10">
              Pourquoi nous choisir ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Prix compétitifs</h3>
                <p>
                  Nous offrons les meilleurs tarifs du marché, avec des options
                  flexibles adaptées à votre budget.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Véhicules récents</h3>
                <p>
                  Notre flotte est constamment renouvelée pour vous garantir des
                  véhicules modernes et bien entretenus.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Service client 24/7</h3>
                <p>
                  Notre équipe est disponible à tout moment pour répondre à vos
                  questions et vous assister en cas de besoin.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
}