"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import Link from "next/link";
import { Id } from "@/convex/_generated/dataModel";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Trash2Icon,
  MoreHorizontalIcon,
  GlobeIcon,
  EyeOffIcon,
} from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";
import { format } from "date-fns";
import SiteEmpty from "@/components/main/site-empty";

const Documents = () => {
  const documents = useQuery(api.documents.getOverview);
  const archiveDocument = useMutation(api.documents.archive);
  // const restoreDocument = useMutation(api.documents.restore);
  // const removeDocument = useMutation(api.documents.remove);

  const onArchive = (documentId: string) => {
    const promise = archiveDocument({ id: documentId as Id<"documents"> });

    toast.promise(promise, {
      loading: "Moving to trash...",
      success: "Document moved to trash!",
      error: "Failed to archive document.",
    });
  };


  if (documents === undefined) {
    return (
      <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <Card key={i} className="flex flex-col h-[280px] overflow-hidden">
            <Skeleton className="w-full h-32 rounded-t-lg" />
            <CardHeader className="flex-grow">
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-1/2" />
            </CardHeader>
            <CardFooter className="flex flex-col items-start px-6 pb-4">
              <Skeleton className="h-4 w-full mb-1" />
              <Skeleton className="h-4 w-[80%]" />
            </CardFooter>
          </Card>
        ))}
      </div>
    );
  }

  if (documents.length === 0) {
    return <SiteEmpty />;
  }
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Your Notes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {documents.map((document) => (
          <Card
            key={document._id}
            className="flex flex-col h-full hover:shadow-lg transition-shadow rounded-lg overflow-hidden"
          >
            {document.coverImage && (
              <div className="relative w-full h-32">
                <Image
                  src={document.coverImage}
                  alt="Cover Image"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-t-lg"
                />
              </div>
            )}
            <CardHeader className="flex flex-row items-start justify-between pb-2 pt-4 px-6">
              <div className="flex flex-col overflow-hidden">
                <CardTitle className="text-lg font-semibold truncate mb-1">
                  {document.title || "Untitled"}
                </CardTitle>
                <div className="text-sm text-muted-foreground">
                  <p>
                    Created:{" "}
                    {format(
                      new Date(document._creationTime),
                      "MMM dd, yyyy HH:mm"
                    )}
                  </p>
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontalIcon className="size-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link href={`/documents/${document._id}`}>Open Note</Link>
                  </DropdownMenuItem>
                  {document.isPublished && (
                    <DropdownMenuItem>
                      <GlobeIcon className="mr-2 size-4" /> View Published
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => onArchive(document._id)}>
                    <Trash2Icon className="mr-2 size-4" /> Move to trash
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardHeader>

            <CardFooter className="flex justify-end items-center pt-2 pb-4 px-6">
              {document.isPublished && (
                <Badge variant="secondary" className="mr-2">
                  <GlobeIcon className="size-3 mr-1" /> Published
                </Badge>
              )}
              {document.isArchived && (
                <Badge variant="destructive">
                  <EyeOffIcon className="size-3 mr-1" /> Archived
                </Badge>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Documents;
