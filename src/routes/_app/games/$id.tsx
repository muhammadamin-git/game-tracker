import { useGame } from "@/features/games/hooks/useGame";
import { createFileRoute } from "@tanstack/react-router";
import { ErrorMessage } from "@/components/ErrorMessage";
import { GameDetail } from "@/features/games/components/GameDetail";
import { GameDetailSkeleton } from "@/features/games/components/GameDetailSkeleton";

export const Route = createFileRoute("/_app/games/$id")({
  component: GamePage,
});

function GamePage() {
  const { id } = Route.useParams();

  const { data, isPending, isError, refetch, error } = useGame(id);

  if (isPending) return <GameDetailSkeleton />;
  if (isError)
    return <ErrorMessage message={error?.message} onRetry={refetch} />;
  if (!data) return null;

  return <GameDetail game={data} />;
}
