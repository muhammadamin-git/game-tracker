import { GameGrid } from "@/features/games/components/GameGrid";
import { useGames } from "@/features/games/hooks/useGames";

export const GameListContainer = () => {
  const { data, isPending, isError } = useGames();

  if (isPending) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong</p>;
  if (!data) return null;

  return <GameGrid games={data.results} />;
};
