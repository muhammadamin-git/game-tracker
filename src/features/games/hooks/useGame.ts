import { useQuery } from "@tanstack/react-query";
import { getGameById } from "@/features/games/api/gamesApi";

export const useGame = (id: number) => {
  return useQuery({
    queryKey: ["game", id],
    queryFn: () => getGameById(id),
  });
};
