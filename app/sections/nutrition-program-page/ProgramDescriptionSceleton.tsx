import { Skeleton } from "@/components/ui/sceleton";

const ProgramDescriptionSkeleton = () => {
  return (
    <div className="w-full flex flex-col animate-pulse">
      <div className="grid w-full grid-cols-1 lg:grid-cols-3 gap-5 my-7">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col space-y-3 border p-4 rounded-lg border-darkLiver/20"
          >
            <Skeleton className="h-7 w-40 rounded-md" />
            <Skeleton className="h-5 w-32 rounded-md" />
          </div>
        ))}
      </div>

      <div className="flex flex-col space-y-6">
        <Skeleton className="h-8 w-52 rounded-md" />

        <div className="flex flex-col space-y-3">
          <Skeleton className="h-5 w-full rounded-md" />
          <Skeleton className="h-5 w-full rounded-md" />
          <Skeleton className="h-5 w-4/5 rounded-md" />
          <Skeleton className="h-5 w-3/5 rounded-md" />
        </div>

        <div className="hidden lg:grid grid-cols-4 gap-5">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="border rounded-xl p-4 space-y-4">
              <Skeleton className="h-[180px] w-full rounded-xl" />
              <Skeleton className="h-5 w-3/4 rounded-md" />
              <Skeleton className="h-5 w-1/2 rounded-md" />
            </div>
          ))}
        </div>

        <div className="space-y-4 mt-5">
          <Skeleton className="h-7 w-44 rounded-md" />

          <div className="flex flex-wrap gap-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <Skeleton key={index} className="h-16 w-[140px] rounded-lg" />
            ))}
          </div>
        </div>

        <div className="space-y-4 mt-5">
          <Skeleton className="h-7 w-44 rounded-md" />

          <div className="flex flex-wrap gap-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <Skeleton
                key={index}
                className="h-24 flex-1 min-w-[180px] rounded-lg"
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-5">
          <div className="flex p-4 rounded-xl bg-amberOrange/20 justify-around max-w-[600px] w-full">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="flex flex-col items-center gap-y-3">
                <Skeleton className="h-7 w-12 rounded-md" />
                <Skeleton className="h-5 w-20 rounded-md" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 flex items-center space-x-5">
          <Skeleton className="h-8 w-44 rounded-md" />
          <Skeleton className="h-12 w-40 rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default ProgramDescriptionSkeleton;
