import { GameCard } from "@/features/games/components/GameCard";
import type { Game } from "@/features/games/schemas/gameSchema";

type Games = {
  games: Game[];
};

export const GameGrid = ({ games }: Games) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
};
