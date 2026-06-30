import { GameGrid } from "@/features/games/components/GameGrid";
import { EmptyState } from "@/components/EmptyState";
import { useWishlistStore } from "@/features/wishlist/store/wishlistStore";

export const WishlistContainer = () => {
  const { games } = useWishlistStore();

  if (!games.length)
    return (
      <EmptyState
        title="Your wishlist is empty"
        description="Add games you're interested in to see them here"
      />
    );

  return <GameGrid games={games} />;
};
