// Fichier : src/app/guides/defense/page.tsx

export default function GuideDefensePage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <div className="container mx-auto">
        
        {/* Titre du guide */}
        <h1 className="text-5xl font-bold text-center text-blue-300 mb-12">
          Guide de Défense
        </h1>

        {/* Section 1 */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold border-b-2 border-blue-500 pb-2 mb-4">
            1. La Composition des Troupes
          </h2>
          <p className="text-lg text-gray-300">
            Le premier principe d'une bonne défense est d'avoir une composition de troupes équilibrée. 
            Il est crucial de ne jamais laisser un seul type de troupe exposé...
            {/* ... Vous écrirez la suite de votre guide ici ... */}
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold border-b-2 border-blue-500 pb-2 mb-4">
            2. Le Mur et les Pièges
          </h2>
          <p className="text-lg text-gray-300">
            Votre mur est votre première ligne de défense. Ne le négligez jamais ! 
            Assurez-vous qu'il soit toujours au niveau maximum de votre château...
            {/* ... Vous écrirez la suite de votre guide ici ... */}
          </p>
        </section>

        {/* Vous pouvez ajouter autant de sections que vous le souhaitez */}

      </div>
    </main>
  );
}