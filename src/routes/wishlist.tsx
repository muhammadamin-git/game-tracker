import { WishlistContainer } from "@/features/wishlist/components/WishlistContainer";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/wishlist")({
  component: WishlistPage,
});

function WishlistPage() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Wishlist</h1>
      <WishlistContainer />
    </section>
  );
}
