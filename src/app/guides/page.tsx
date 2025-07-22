// Fichier : src/app/guides/page.tsx
import Link from 'next/link';

export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">
          Guides de la Guilde
        </h1>

        {/* Grille pour nos futurs guides */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* -- Le bouton pour le guide "Défense" -- */}
          <Link 
            href="/guides/defense" 
            className="group block bg-gray-800 rounded-lg p-6 shadow-lg hover:bg-blue-900 hover:scale-105 transition-all duration-300"
          >
            <h2 className="text-2xl font-bold text-blue-300 group-hover:text-white">
              Guide de Défense
            </h2>
            <p className="mt-2 text-gray-400 group-hover:text-gray-200">
              Apprenez à construire une forteresse imprenable et à protéger vos ressources.
            </p>
          </Link>

          {/* Vous pourrez ajouter d'autres blocs de guide ici plus tard */}
          {/* Exemple :
          <Link href="/guides/attaque" className="...">
            <h2 ...>Guide d'Attaque</h2>
            <p ...>Maîtrisez l'art de la guerre...</p>
          </Link>
          */}

        </div>
      </div>
    </main>
  );
}