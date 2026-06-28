import { useQuery } from "@tanstack/react-query";
import { getGames } from "@/features/games/api/gamesApi";

export const useGames = () => {
  return useQuery({
    queryKey: ["games"],
    queryFn: getGames,
  });
};
