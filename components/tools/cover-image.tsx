"use client";

import Image from "next/image";
import { useMutation } from "convex/react";
import { useParams } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useCoverImage } from "@/hooks/use-cover-image";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useEdgeStore } from "../providers/edgestore-provider";



interface CoverImageProps {
  url?: string;
  preview?: boolean;
}

const CoverImage = ({ url, preview }: CoverImageProps) => {
  const { edgestore } = useEdgeStore();
  const params = useParams();
  const coverImage = useCoverImage();
  const removeCoverImage = useMutation(api.documents.removeCoverImage);

  const onRemove = async () => {
    if (url) {
      await edgestore.publicFiles.delete({
        url: url,
      });
    }
    removeCoverImage({
      id: params.documentId as Id<"documents">,
    });
  };
  return (
   <div
  className={cn(
    "relative w-full h-[40vh] group py-4",
    !url && "h-[16vh]",
  )}
>
  {!!url && (
    <Image
      src={url}
      alt="Cover"
      width={1000} 
      height={1000} 
      className="w-full h-full border object-cover rounded-xl"
    />
  )}
  {url && !preview && (
    <div className="opacity-0 group-hover:opacity-100 absolute bottom-5 right-5 flex items-center gap-x-2 px-4 py-4">
      <Button
        onClick={() => coverImage.onReplace(url)}
        variant="secondary"
        size="sm"
      >
        Change cover
      </Button>
      <Button
        onClick={onRemove}
        variant="destructive"
        size="sm"
      >
        Remove
      </Button>
    </div>
  )}
</div>
  );
};

export default CoverImage;

CoverImage.Skeleton = function CoverSkeleton() {
  return <Skeleton className="w-full h-[12vh]" />;
};
