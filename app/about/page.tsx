// app/about/page.tsx
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";

export const metadata: Metadata = {
    title: "À propos - CarLocation",
    description: "Découvrez l'histoire et les valeurs de CarLocation",
};

export default function AboutPage() {
    return (
        <div className="py-16">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-center mb-10">À propos de CarLocation</h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Notre histoire</h2>
                        <p className="mb-4">
                            Fondée en 2010, CarLocation est née d'une vision simple : rendre la location de voitures
                            accessible, transparente et sans tracas pour tous.
                        </p>
                        <p className="mb-4">
                            Depuis plus de 10 ans, nous nous efforçons de proposer un service de qualité supérieure
                            à des prix compétitifs. Notre flotte s'est progressivement élargie pour inclure une grande
                            variété de véhicules répondant à tous les besoins et budgets.
                        </p>
                        <p className="mb-4">
                            Aujourd'hui, CarLocation est fière d'être reconnue comme l'une des agences de location les plus
                            fiables et appréciées de la région, grâce à notre engagement envers la satisfaction client
                            et la qualité de service.
                        </p>
                    </div>
                    <div className="relative h-64 lg:h-auto bg-gray-200 rounded-lg">
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                            Image illustrative de l'entreprise
                        </div>
                    </div>
                </div>

                <div className="mb-16">
                    <h2 className="text-2xl font-semibold text-center mb-8">Nos valeurs</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 border border-gray-200 rounded-lg text-center">
                            <h3 className="text-xl font-medium mb-3">Transparence</h3>
                            <p>
                                Nous croyons en une tarification claire et sans frais cachés.
                                Ce que vous voyez est ce que vous payez.
                            </p>
                        </div>
                        <div className="p-6 border border-gray-200 rounded-lg text-center">
                            <h3 className="text-xl font-medium mb-3">Qualité</h3>
                            <p>
                                Notre flotte est régulièrement renouvelée et rigoureusement entretenue
                                pour vous garantir sécurité et confort.
                            </p>
                        </div>
                        <div className="p-6 border border-gray-200 rounded-lg text-center">
                            <h3 className="text-xl font-medium mb-3">Service Client</h3>
                            <p>
                                Notre équipe est formée pour vous offrir un service personnalisé
                                et répondre à toutes vos questions.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mb-16">
                    <h2 className="text-2xl font-semibold text-center mb-8">Notre équipe</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="text-center">
                                <div className="w-40 h-40 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <span className="text-gray-400">Photo</span>
                                </div>
                                <h3 className="font-semibold">Nom Prénom</h3>
                                <p className="text-gray-600">Poste</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-blue-50 p-8 rounded-lg text-center">
                    <h2 className="text-2xl font-semibold mb-4">Prêt à prendre la route avec nous ?</h2>
                    <p className="mb-6 max-w-2xl mx-auto">
                        Que vous ayez besoin d'une voiture pour un weekend, des vacances ou un déplacement professionnel,
                        nous avons le véhicule parfait pour vous.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <Link href="/cars">
                            <Button size="lg">Voir nos véhicules</Button>
                        </Link>
                        <Link href="/contact">
                            <Button size="lg" variant="outline">Nous contacter</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}