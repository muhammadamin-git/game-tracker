import { GameCard } from "@/features/games/components/GameCard";
import type { Game } from "@/features/games/schemas/gameSchema";
import { Link } from "@tanstack/react-router";

type Games = {
  games: Game[];
};

export const GameGrid = ({ games }: Games) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {games.map((game) => (
        <Link key={game.id} to="/games/$id" params={{ id: String(game.id) }}>
          <GameCard game={game} />
        </Link>
      ))}
    </div>
  );
};
