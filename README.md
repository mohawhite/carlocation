# CarLocation - Site vitrine de location de voitures

Ce projet est un site vitrine pour une agence de location de voitures fictive, développé avec Next.js 13, TypeScript et Shadcn UI. Il inclut un formulaire de contact fonctionnel qui envoie des emails gratuitement.

## Fonctionnalités

- Design responsive moderne avec Tailwind CSS
- Interface utilisateur élégante grâce à Shadcn UI
- Formulaire de contact fonctionnel avec validation
- Envoi d'emails gratuit via Resend API
- Page de présentation des véhicules
- Page À propos
- Page Contact avec formulaire

## Prérequis

- Node.js (version 16.8 ou supérieure)
- npm ou yarn ou pnpm

## Installation

1. Clonez le dépôt:

```bash
git clone https://github.com/votre-nom/carlocation.git
cd carlocation
```

2. Installez les dépendances:

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. Créez un fichier `.env.local` à la racine du projet et ajoutez vos variables d'environnement:

```
RESEND_API_KEY=votre_cle_api_resend
EMAIL_TO=votre_email@exemple.com
```

> Pour obtenir une clé API Resend gratuite, créez un compte sur [resend.com](https://resend.com)

4. Lancez le serveur de développement:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

5. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Déploiement sur GitHub

1. Créez un nouveau dépôt sur GitHub
2. Initialisez Git et poussez votre code:

```bash
git init
git add .
git commit -m "Premier commit"
git remote add origin https://github.com/votre-nom/carlocation.git
git push -u origin main
```

## Déploiement sur Netlify (Gratuit à vie)

1. Créez un compte sur [Netlify](https://netlify.com) si vous n'en avez pas déjà un
2. Cliquez sur "New Site from Git"
3. Sélectionnez GitHub et autorisez Netlify
4. Sélectionnez votre dépôt
5. Configuration du build:
    - Build command: `npm run build`
    - Publish directory: `.next`
6. Cliquez sur "Advanced" et ajoutez vos variables d'environnement:
    - RESEND_API_KEY
    - EMAIL_TO
7. Cliquez sur "Deploy site"

> Netlify offre un hébergement gratuit à vie avec des performances rapides, un certificat SSL et un nom de domaine personnalisé (votresite.netlify.app).

## Déploiement sur Vercel (Gratuit pour les projets personnels)

1. Créez un compte sur [Vercel](https://vercel.com) si vous n'en avez pas déjà un
2. Cliquez sur "New Project"
3. Importez votre dépôt GitHub
4. Vercel détectera automatiquement que c'est un projet Next.js
5. Ajoutez vos variables d'environnement:
    - RESEND_API_KEY
    - EMAIL_TO
6. Cliquez sur "Deploy"

> Vercel est la plateforme créée par les développeurs de Next.js et offre la meilleure expérience de déploiement pour les applications Next.js.

## Personnalisation

- **Images**: Remplacez les images factices dans le dossier `/public/images/` par vos propres images
- **Contenu**: Modifiez le contenu du site en éditant les fichiers dans le dossier `/app/`
- **Styles**: Personnalisez les styles en modifiant `globals.css` et en utilisant Tailwind CSS
- **Composants**: Ajoutez ou modifiez les composants dans le dossier `/app/components/`

## Maintenir votre site gratuit à vie

Ce projet a été conçu pour rester 100% gratuit à maintenir:

1. **Hébergement**: Netlify et Vercel offrent des plans gratuits généreux pour les projets personnels
2. **Envoi d'emails**: Resend offre jusqu'à 3000 emails gratuits par mois (100/jour)
3. **Domaine**: Utilisez le sous-domaine gratuit de Netlify/Vercel ou achetez un domaine personnalisé (seul coût potentiel, environ 10-15€/an)
4. **Base de code**: Entièrement open-source, sans dépendances payantes

## License

MIT

## Crédits

Ce projet a été créé avec:
- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Resend](https://resend.com/) pour l'envoi d'emails