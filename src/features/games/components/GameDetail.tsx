import type { GameDetails } from "@/features/games/schemas/gameSchema";
import { WishlistButton } from "@/features/wishlist/components/WishlistButton";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type GameDetailProps = {
  game: GameDetails;
};

export const GameDetail = ({ game }: GameDetailProps) => {
  return (
    <section className="container mx-auto px-4 py-8 flex flex-col gap-6">
      {game.background_image ? (
        <img
          src={game.background_image}
          alt={game.name}
          className="w-full h-64 md:h-96 object-cover rounded-lg"
        />
      ) : (
        <div className="w-full h-64 md:h-96 bg-muted flex items-center justify-center rounded-lg">
          <span className="text-muted-foreground text-sm">No image</span>
        </div>
      )}

      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-3xl font-bold">{game.name}</h1>
          <WishlistButton game={game} />
        </div>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            {game.rating.toFixed(1)}
          </span>
          {game.metacritic && <span>Metacritic: {game.metacritic}</span>}
          <time dateTime={game.released}>{game.released}</time>
          {game.esrb_rating && <span>{game.esrb_rating.name}</span>}
        </div>

        <div className="flex flex-wrap gap-1">
          {game.genres.map((genre) => (
            <Badge key={genre.id} variant="secondary">
              {genre.name}
            </Badge>
          ))}
        </div>
      </div>

      <p className="text-muted-foreground leading-relaxed">
        {game.description_raw}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <h2 className="font-semibold mb-2">Platforms</h2>
          <div className="flex flex-wrap gap-1">
            {game.platforms.map((item) => (
              <Badge key={item.platform.id} variant="outline">
                {item.platform.name}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-semibold mb-2">Developers</h2>
          <p className="text-sm text-muted-foreground">
            {game.developers.map((d) => d.name).join(", ")}
          </p>
        </div>

        <div>
          <h2 className="font-semibold mb-2">Publishers</h2>
          <p className="text-sm text-muted-foreground">
            {game.publishers.map((p) => p.name).join(", ")}
          </p>
        </div>

        {game.website && (
          <div>
            <h2 className="font-semibold mb-2">Websites</h2>
            <a
              href={game.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline"
            >
              {game.website}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};
