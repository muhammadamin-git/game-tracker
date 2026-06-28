import { GameGrid } from "@/features/games/components/GameGrid";
import { GameGridSkeleton } from "@/features/games/components/GameGridSkeleton";
import { ErrorMessage } from "@/components/ErrorMessage";
import { EmptyState } from "@/components/EmptyState";
import { useGames } from "@/features/games/hooks/useGames";

export const GameListContainer = () => {
  const { data, isPending, isError, refetch, error } = useGames();

  if (isPending) return <GameGridSkeleton />;
  if (isError)
    return <ErrorMessage message={error?.message} onRetry={refetch} />;
  if (!data.results.length) return <EmptyState />;

  return <GameGrid games={data.results} />;
};
