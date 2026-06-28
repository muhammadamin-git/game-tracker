import type { Game } from "@/features/games/schemas/gameSchema";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

type GameCardProps = {
  game: Game;
};

export const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card>
      {game.background_image ? (
        <img
          src={game.background_image}
          alt={game.name}
          className="w-full h-48 object-cover"
        />
      ) : (
        <div className="w-full h-48 bg-muted flex items-center justify-center">
          <span className="text-muted-foreground text-sm">No image</span>
        </div>
      )}

      <CardContent className="flex flex-col gap-2 p-4">
        <h3 className="font-semibold text-base line-clamp-1">{game.name}</h3>

        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            {game.rating.toFixed(1)}
          </span>
          <time dateTime={game.released}>{game.released}</time>
        </div>

        <div className="flex flex-wrap gap-1">
          {game.genres.slice(0, 3).map((genre) => (
            <Badge key={genre.id} variant="secondary">
              {genre.name}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
