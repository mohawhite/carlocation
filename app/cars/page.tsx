// app/cars/page.tsx
import { Metadata } from "next";
import CarCard from "@/app/components/car-card";
import { Car } from "@/types";

export const metadata: Metadata = {
    title: "Nos véhicules - CarLocation",
    description: "Découvrez notre flotte de véhicules disponibles à la location",
};

// Données fictives pour les voitures
const cars: Car[] = [
    {
        id: "1",
        name: "Renault Clio",
        category: "Économique",
        image: "/images/cars/car1.jpg",
        pricePerDay: 35,
        seats: 5,
        doors: 5,
        transmission: "Manuelle",
        fuelType: "Essence",
        year: 2022,
        luggage: 2,
        description: "Parfaite pour la ville et les petits trajets économiques."
    },
    {
        id: "2",
        name: "Peugeot 3008",
        category: "SUV",
        image: "/images/cars/car2.jpg",
        pricePerDay: 65,
        seats: 5,
        doors: 5,
        transmission: "Automatique",
        fuelType: "Diesel",
        year: 2023,
        luggage: 4,
        description: "SUV spacieux et confortable pour tous vos voyages."
    },
    {
        id: "3",
        name: "Citroën C3",
        category: "Économique",
        image: "/images/cars/car3.jpg",
        pricePerDay: 30,
        seats: 5,
        doors: 5,
        transmission: "Manuelle",
        fuelType: "Essence",
        year: 2021,
        luggage: 2,
        description: "Citadine agile et économique pour vos déplacements urbains."
    },
    {
        id: "4",
        name: "Tesla Model 3",
        category: "Premium",
        image: "/images/cars/car3.jpg", // Réutiliser l'image pour l'exemple
        pricePerDay: 95,
        seats: 5,
        doors: 4,
        transmission: "Automatique",
        fuelType: "Électrique",
        year: 2023,
        luggage: 3,
        description: "Véhicule électrique haute performance avec autonomie étendue."
    },
    {
        id: "5",
        name: "Mercedes Classe C",
        category: "Premium",
        image: "/images/cars/car2.jpg", // Réutiliser l'image pour l'exemple
        pricePerDay: 85,
        seats: 5,
        doors: 4,
        transmission: "Automatique",
        fuelType: "Diesel",
        year: 2022,
        luggage: 3,
        description: "Berline élégante et confortable pour vos déplacements professionnels."
    },
    {
        id: "6",
        name: "Fiat 500",
        category: "Mini",
        image: "/images/cars/car1.jpg", // Réutiliser l'image pour l'exemple
        pricePerDay: 28,
        seats: 4,
        doors: 3,
        transmission: "Manuelle",
        fuelType: "Essence",
        year: 2021,
        luggage: 1,
        description: "Petite citadine idéale pour le stationnement facile en ville."
    }
];

export default function CarsPage() {
    return (
        <div className="py-16">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-center mb-4">Nos véhicules</h1>
                <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
                    Découvrez notre sélection de véhicules de qualité pour tous vos besoins.
                    Des petites citadines économiques aux berlines de luxe, nous avons ce qu'il vous faut.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cars.map((car) => (
                        <CarCard key={car.id} car={car} />
                    ))}
                </div>

                <div className="mt-16 bg-blue-50 p-8 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4">Vous ne trouvez pas ce que vous cherchez ?</h2>
                    <p className="mb-6">
                        Nous disposons d'une large gamme de véhicules qui ne sont pas tous affichés sur notre site.
                        Contactez-nous pour des demandes spécifiques ou pour des réservations de longue durée.
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="/contact"
                            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
                        >
                            Nous contacter
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}