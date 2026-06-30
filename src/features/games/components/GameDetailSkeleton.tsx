import { Skeleton } from "@/components/ui/skeleton";

export const GameDetailSkeleton = () => {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col gap-5">
      <Skeleton className="w-full h-48" />
      <Skeleton className="h-5 w-1/3" />
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-12" />
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-12" />
        </div>
        <div className="flex gap-1">
          <Skeleton className="h-4 w-16 rounded-full" />
          <Skeleton className="h-4 w-16 rounded-full" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    </div>
  );
};
