"use client";

import { useMutation, useQuery } from "convex/react";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import { useParams } from "next/navigation"; 
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { Skeleton } from "@/components/ui/skeleton";
import CoverImage from "@/components/tools/cover-image";
import Toolbar from "@/components/tools/toolbar";
import { Container } from "@/components/ui/container";

const DocumentId = () => {
  const { documentId } = useParams(); 
  const Editor = useMemo(
    () =>
      dynamic(() => import("@/components/tools/blocknote-editor"), {
        ssr: false,
      }),
    []
  );

  const document = useQuery(api.documents.getById, {
    documentId: documentId as Id<"documents">, 
  });

  const update = useMutation(api.documents.update);

  const onChange = (content: string) => {
    update({
      id: documentId as Id<"documents">, 
      content,
    });
  };

  if (document === undefined) {
    return (
      <div>
        <CoverImage.Skeleton />
        <div className="md:max-w-3xl lg:max-w-4xl mx-auto mt-10">
          <div className="space-y-4 pl-8 pt-4">
            <Skeleton className="h-14 w-[50%]" />
            <Skeleton className="h-4 w-[80%]" />
            <Skeleton className="h-4 w-[40%]" />
            <Skeleton className="h-4 w-[60%]" />
          </div>
        </div>
      </div>
    );
  }

  if (document === null) {
    return <div>Not found</div>;
  }
  return (
    <Container
      size={"2xl"}
      alignment={"none"}
      height={"full"}
      className="overflow-x-hidden"
      >
      <CoverImage url={document.coverImage} />
      <div className="mx-auto">
        <Toolbar initialData={document} />
        <Editor onChange={onChange} initialContent={document.content} />
      </div>
    </Container>
  );
};

export default DocumentId;
