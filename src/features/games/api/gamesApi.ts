import { client } from "@/lib/axios";
import {
  GameResponseSchema,
  GameDetailSchema,
} from "@/features/games/schemas/gameSchema";

export const getGames = async () => {
  const response = await client.get("/games");
  return GameResponseSchema.parse(response.data);
};

export const getGameById = async (id: string) => {
  const response = await client.get(`/games/${id}`);
  return GameDetailSchema.parse(response.data);
};
