// Fichier : src/app/page.tsx

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-[url('/tlou.webp')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black/50" /> 
      <div className="relative z-10 text-center text-white p-5">
        <h1 className="text-5xl font-bold">Bienvenue sur le site de la guilde C-4 !</h1>
        <p className="mt-4 text-xl">Retrouvez ici tous nos guides pour dominer dans Lords Mobile.</p>
      </div>

    </main>
  );
}