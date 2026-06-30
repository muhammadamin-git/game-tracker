import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Game } from "@/features/games/schemas/gameSchema";

type WishlistStore = {
  games: Game[];
  addGame: (game: Game) => void;
  removeGame: (id: number) => void;
  isInWishlist: (id: number) => boolean;
};

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      games: [],
      addGame: (game) =>
        set((state) => ({
          games: [...state.games, game],
        })),
      removeGame: (id) =>
        set((state) => ({
          games: state.games.filter((game) => game.id !== id),
        })),
      isInWishlist: (id) => get().games.some((game) => game.id === id),
    }),
    { name: "wishlist-storage" },
  ),
);
