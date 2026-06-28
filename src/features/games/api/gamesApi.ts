import { client } from "@/lib/axios";
import { GameResponseSchema } from "@/features/games/schemas/gameSchema";

export const getGames = async () => {
  const response = await client.get("/games");
  return GameResponseSchema.parse(response.data);
};
