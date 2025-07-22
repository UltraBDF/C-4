// Fichier : src/components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-900 bg-opacity-80 text-white shadow-md backdrop-blur-sm sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* Titre ou Logo du site */}
        <Link href="/" className="text-xl font-bold hover:text-blue-400 transition-colors">
          Guilde C-4
        </Link>

        {/* Liens de navigation */}
        <ul className="flex items-center space-x-6">
          <li>
            <Link href="/" className="hover:text-blue-400 transition-colors">
              Accueil
            </Link>
          </li>
          <li>
            <Link href="/guides" className="hover:text-blue-400 transition-colors">
              Guides
            </Link>
          </li>
          {/* Ajoutez d'autres liens ici plus tard */}
        </ul>
      </nav>
    </header>
  );
}