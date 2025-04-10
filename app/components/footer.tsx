// app/components/footer.tsx
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-12 pb-6">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">CarLocation</h3>
                        <p className="mb-4">
                            Votre partenaire de confiance pour tous vos besoins de mobilité.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/public" className="hover:text-blue-400">
                                    Accueil
                                </Link>
                            </li>
                            <li>
                                <Link href="/cars" className="hover:text-blue-400">
                                    Nos véhicules
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-blue-400">
                                    À propos
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-blue-400">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Nos services</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/cars" className="hover:text-blue-400">
                                    Location courte durée
                                </Link>
                            </li>
                            <li>
                                <Link href="/cars" className="hover:text-blue-400">
                                    Location longue durée
                                </Link>
                            </li>
                            <li>
                                <Link href="/cars" className="hover:text-blue-400">
                                    Location avec chauffeur
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact</h4>
                        <address className="not-italic">
                            <p>123 Avenue des Voitures</p>
                            <p>75000 Paris, France</p>
                            <p className="mt-2">Tél: 01 23 45 67 89</p>
                            <p>Email: contact@carlocation.fr</p>
                        </address>
                    </div>
                </div>
                <div className="border-t border-gray-800 pt-6 mt-6 text-center text-sm text-gray-400">
                    <p>© {new Date().getFullYear()} CarLocation. Tous droits réservés.</p>
                    <p className="mt-2">
                        Ce site est un exemple fictif créé avec Next.js et déployé gratuitement sur Netlify/Vercel.
                    </p>
                </div>
            </div>
        </footer>
    );
}