// app/components/contact-form.tsx
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/app/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/app/components/ui/form";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Le nom doit contenir au moins 2 caractères.",
    }),
    email: z.string().email({
        message: "Veuillez entrer une adresse email valide.",
    }),
    phone: z.string().min(10, {
        message: "Veuillez entrer un numéro de téléphone valide.",
    }),
    subject: z.string().min(5, {
        message: "Le sujet doit contenir au moins 5 caractères.",
    }),
    message: z.string().min(10, {
        message: "Le message doit contenir au moins 10 caractères.",
    }),
});

export default function ContactForm() {
    const { toast } = useToast();
    const [isLoading, setIsLoading] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true);
        try {
            const response = await fetch("/api/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });

            const data = await response.json();

            if (response.ok) {
                toast({
                    title: "Message envoyé",
                    description: "Nous vous contacterons bientôt.",
                });
                form.reset();
            } else {
                throw new Error(data.error || "Une erreur est survenue");
            }
        } catch (error) {
            toast({
                title: "Erreur",
                description: error instanceof Error ? error.message : "Une erreur est survenue",
                variant: "destructive",
            });
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nom complet</FormLabel>
                                <FormControl>
                                    <Input placeholder="Jean Dupont" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="jean@exemple.fr" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Téléphone</FormLabel>
                                <FormControl>
                                    <Input placeholder="0123456789" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Sujet</FormLabel>
                                <FormControl>
                                    <Input placeholder="Demande de réservation" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Écrivez votre message ici..."
                                    className="h-32"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Envoi en cours..." : "Envoyer le message"}
                </Button>
            </form>
        </Form>
    );
}