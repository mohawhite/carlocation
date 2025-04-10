// app/api/send/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.EMAIL_TO || 'votre_email@exemple.com';

export async function POST(request: Request) {
    try {
        const { name, email, phone, subject, message } = await request.json();

        // Validation simple
        if (!name || !email || !phone || !subject || !message) {
            return NextResponse.json(
                { error: "Tous les champs sont requis" },
                { status: 400 }
            );
        }

        // Création du template HTML pour un meilleur affichage des emails
        const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Nouvelle demande de contact</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
          }
          .email-container {
            border: 1px solid #ddd;
            border-radius: 5px;
            padding: 20px;
            margin: 20px 0;
          }
          .header {
            background-color: #1a56db;
            color: white;
            padding: 15px 20px;
            border-radius: 5px 5px 0 0;
            margin: -20px -20px 20px;
          }
          .field {
            margin-bottom: 15px;
          }
          .field-name {
            font-weight: bold;
            color: #555;
          }
          .message-box {
            background-color: #f9f9f9;
            border-left: 4px solid #1a56db;
            padding: 15px;
            margin-top: 20px;
            border-radius: 0 5px 5px 0;
          }
          .footer {
            margin-top: 30px;
            font-size: 0.9em;
            color: #777;
            text-align: center;
            padding-top: 10px;
            border-top: 1px solid #eee;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="header">
            <h2 style="margin: 0;">Nouvelle demande de contact</h2>
          </div>
          
          <div class="field">
            <div class="field-name">Sujet:</div>
            <div>${subject}</div>
          </div>
          
          <div class="field">
            <div class="field-name">Nom:</div>
            <div>${name}</div>
          </div>
          
          <div class="field">
            <div class="field-name">Email:</div>
            <div><a href="mailto:${email}">${email}</a></div>
          </div>
          
          <div class="field">
            <div class="field-name">Téléphone:</div>
            <div>${phone}</div>
          </div>
          
          <div class="message-box">
            <div class="field-name">Message:</div>
            <div style="white-space: pre-line;">${message}</div>
          </div>
          
          <div class="footer">
            <p>Ce message a été envoyé via le formulaire de contact de CarLocation.</p>
            <p>© ${new Date().getFullYear()} CarLocation. Tous droits réservés.</p>
          </div>
        </div>
      </body>
    </html>
    `;

        // Version texte pour les clients qui ne peuvent pas afficher l'HTML
        const textContent = `
Nouvelle demande de contact
===========================

Sujet: ${subject}

Informations de contact:
- Nom: ${name}
- Email: ${email}
- Téléphone: ${phone}

Message:
${message}

---
Ce message a été envoyé via le formulaire de contact de CarLocation.
© ${new Date().getFullYear()} CarLocation. Tous droits réservés.
    `;

        const { data, error } = await resend.emails.send({
            from: "CarLocation <onboarding@resend.dev>", // Utilisez l'email de validation fourni par Resend
            to: [toEmail],
            subject: `Demande de contact: ${subject}`,
            reply_to: email,
            html: htmlContent,
            text: textContent, // Version texte comme fallback
        });

        if (error) {
            console.error("Resend API error:", error);
            return NextResponse.json(
                { error: "Erreur lors de l'envoi de l'email" },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { message: "Email envoyé avec succès", id: data?.id },
            { status: 200 }
        );
    } catch (error) {
        console.error("Server error:", error);
        return NextResponse.json(
            { error: "Erreur serveur" },
            { status: 500 }
        );
    }
}