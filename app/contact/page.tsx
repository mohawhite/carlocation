// app/contact/page.tsx
import ContactForm from "@/app/components/contact-form";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact - CarLocation",
    description: "Contactez-nous pour toute demande d'information ou de réservation",
};

export default function ContactPage() {
    return (
        <div className="py-16">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-center mb-10">Contactez-nous</h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Nous sommes là pour vous aider</h2>
                        <p className="mb-6">
                            Notre équipe est à votre disposition pour répondre à toutes vos questions et vous accompagner
                            dans votre réservation. N'hésitez pas à nous contacter par téléphone, email ou en remplissant
                            le formulaire ci-contre.
                        </p>

                        <div className="space-y-4 mb-8">
                            <div>
                                <h3 className="font-medium">Adresse</h3>
                                <p>123 Avenue des Voitures, 75000 Paris, France</p>
                            </div>
                            <div>
                                <h3 className="font-medium">Téléphone</h3>
                                <p>01 23 45 67 89</p>
                            </div>
                            <div>
                                <h3 className="font-medium">Email</h3>
                                <p>contact@carlocation.fr</p>
                            </div>
                            <div>
                                <h3 className="font-medium">Horaires d'ouverture</h3>
                                <p>Lundi au Vendredi: 9h - 19h</p>
                                <p>Samedi: 10h - 18h</p>
                                <p>Dimanche: Fermé</p>
                            </div>
                        </div>

                        <div className="bg-gray-100 p-6 rounded-lg">
                            <h3 className="font-semibold mb-2">Service d'urgence 24/7</h3>
                            <p>
                                En cas d'urgence en dehors des heures d'ouverture,
                                appelez notre ligne d'assistance au 01 23 45 67 90.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-6">Envoyez-nous un message</h2>
                        <ContactForm />
                    </div>
                </div>

                <div className="mt-12">
                    <h2 className="text-xl font-semibold mb-6 text-center">Notre emplacement</h2>
                    <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                        <p className="text-gray-500">
                            Carte Google Maps (à intégrer avec votre clé API Google Maps)
                        </p>
                    </div>
                    <p className="text-center text-sm text-gray-500 mt-2">
                        Note: Pour une version de production, vous pouvez intégrer une carte Google Maps gratuitement
                        avec une utilisation limitée ou utiliser une alternative open source comme OpenStreetMap.
                    </p>
                </div>
            </div>
        </div>
    );
}