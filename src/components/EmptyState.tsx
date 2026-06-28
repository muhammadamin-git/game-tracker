import { Gamepad2 } from "lucide-react";

type EmptyStateProps = {
  title?: string;
  description?: string;
};

export const EmptyState = ({
  title = "No games found",
  description = "Try adjusting your search or filters",
}: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
      <Gamepad2 className="w-12 h-12 text-muted-foreground" />
      <div className="flex flex-col gap-1">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};
