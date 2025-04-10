// app/components/car-card.tsx
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/app/components/ui/card";
import { Car } from "@/types";

interface CarCardProps {
    car: Car;
}

export default function CarCard({ car }: CarCardProps) {
    return (
        <Card className="overflow-hidden">
            <CardHeader className="p-0">
                <div className="relative h-48 w-full">
                    <Image
                        src={car.image}
                        alt={car.name}
                        fill
                        className="object-cover"
                    />
                </div>
            </CardHeader>
            <CardContent className="p-4">
                <h3 className="text-xl font-bold">{car.name}</h3>
                <div className="flex items-center text-sm text-gray-500 mt-2">
                    <span>{car.category}</span>
                    <span className="mx-2">•</span>
                    <span>{car.seats} places</span>
                    <span className="mx-2">•</span>
                    <span>{car.transmission}</span>
                </div>
                <div className="mt-4">
                    <p className="text-2xl font-bold">{car.pricePerDay}€ <span className="text-sm font-normal text-gray-500">/jour</span></p>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center">
                        <span className="mr-1">🚗</span>
                        <span>{car.year}</span>
                    </div>
                    <div className="flex items-center">
                        <span className="mr-1">⛽</span>
                        <span>{car.fuelType}</span>
                    </div>
                    <div className="flex items-center">
                        <span className="mr-1">🧳</span>
                        <span>{car.luggage} bagages</span>
                    </div>
                    <div className="flex items-center">
                        <span className="mr-1">🚪</span>
                        <span>{car.doors} portes</span>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
                <Link href="/contact" className="w-full">
                    <Button className="w-full">Réserver maintenant</Button>
                </Link>
            </CardFooter>
        </Card>
    );
}