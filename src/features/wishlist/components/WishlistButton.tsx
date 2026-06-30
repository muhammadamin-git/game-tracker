import { useWishlistStore } from "@/features/wishlist/store/wishlistStore";
import type { Game } from "@/features/games/schemas/gameSchema";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

type WishlistButtonProps = {
  game: Game;
};

export const WishlistButton = ({ game }: WishlistButtonProps) => {
  const { isInWishlist, addGame, removeGame } = useWishlistStore();

  const isInWish = isInWishlist(game.id);

  const handleClick = () => {
    isInWish ? removeGame(game.id) : addGame(game);
  };

  return (
    <Button onClick={handleClick} variant={isInWish ? "secondary" : "default"}>
      <Heart className={isInWish ? "fill-current" : ""} />
      {isInWish ? "Remove from Wishlist" : "Add to Wishlist"}
    </Button>
  );
};
