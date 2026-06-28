import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

type ErrorMessageProps = {
  message?: string;
  onRetry?: () => void;
};

export const ErrorMessage = ({
  message = "Something went wrong",
  onRetry,
}: ErrorMessageProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
      <AlertCircle className="w-12 h-12 text-destructive" />
      <p className="text-muted-foreground">{message}</p>
      {onRetry && (
        <Button variant="outline" onClick={onRetry}>
          Try again
        </Button>
      )}
    </div>
  );
};
