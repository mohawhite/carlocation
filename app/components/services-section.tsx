// app/components/services-section.tsx
import {
    Car,
    CreditCard,
    MapPin,
    Shield,
    Clock
} from "lucide-react";

export default function ServicesSection() {
    const services = [
        {
            icon: <Car className="w-10 h-10 text-blue-600 mb-4" />,
            title: "Large choix de véhicules",
            description:
                "Des citadines économiques aux véhicules premium, nous avons ce qu'il vous faut.",
        },
        {
            icon: <CreditCard className="w-10 h-10 text-blue-600 mb-4" />,
            title: "Tarifs transparents",
            description:
                "Pas de frais cachés. Nos prix incluent tout ce dont vous avez besoin.",
        },
        {
            icon: <MapPin className="w-10 h-10 text-blue-600 mb-4" />,
            title: "Emplacements pratiques",
            description:
                "Récupérez votre véhicule dans l'un de nos nombreux points de service.",
        },
        {
            icon: <Shield className="w-10 h-10 text-blue-600 mb-4" />,
            title: "Assurance complète",
            description:
                "Voyagez l'esprit tranquille avec notre assurance tous risques incluse.",
        },
        {
            icon: <Clock className="w-10 h-10 text-blue-600 mb-4" />,
            title: "Service 24/7",
            description:
                "Notre service client est disponible à tout moment pour vous assister.",
        },
    ];

    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-10">
                    Nos services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="p-6 border border-gray-200 rounded-lg text-center hover:shadow-lg transition-shadow"
                        >
                            <div className="flex justify-center">{service.icon}</div>
                            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}