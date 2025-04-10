// app/components/navbar.tsx
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/app/components/ui/button";

export default function Navbar() {
    return (
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-10">
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <Link href="/public" className="flex items-center">
                        <span className="text-xl font-bold text-blue-600">CarLocation</span>
                    </Link>

                    <div className="hidden md:flex space-x-6">
                        <Link href="/public" className="text-gray-700 hover:text-blue-600">
                            Accueil
                        </Link>
                        <Link href="/cars" className="text-gray-700 hover:text-blue-600">
                            Nos véhicules
                        </Link>
                        <Link href="/about" className="text-gray-700 hover:text-blue-600">
                            À propos
                        </Link>
                        <Link href="/contact" className="text-gray-700 hover:text-blue-600">
                            Contact
                        </Link>
                    </div>

                    <Link href="/contact">
                        <Button>Réserver maintenant</Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}