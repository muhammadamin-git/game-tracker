import { createFileRoute } from "@tanstack/react-router";
import { GameListContainer } from "@/features/games/components/GameListContainer";

export const Route = createFileRoute("/")({ component: HomePage });

function HomePage() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Popular Games</h1>
      <GameListContainer />
    </section>
  );
}
