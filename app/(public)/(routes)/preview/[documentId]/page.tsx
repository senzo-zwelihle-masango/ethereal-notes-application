'use client'

import { useMutation, useQuery } from 'convex/react'
import dynamic from 'next/dynamic'
import { useMemo } from 'react'
import { useParams } from 'next/navigation'
import { api } from '@/convex/_generated/api'
import { Id } from '@/convex/_generated/dataModel'
import { Skeleton } from '@/components/ui/skeleton'
import CoverImage from '@/components/tools/cover-image'
import Toolbar from '@/components/tools/toolbar'

const DocumentIdPage = () => {
  const { documentId } = useParams() // Use useParams to get the documentId
  const Editor = useMemo(
    () =>
      dynamic(() => import('@/components/tools/blocknote-editor'), {
        ssr: false,
      }),
    []
  )

  const document = useQuery(api.documents.getById, {
    documentId: documentId as Id<'documents'>, // Cast documentId here
  })

  const update = useMutation(api.documents.update)

  const onChange = (content: string) => {
    update({
      id: documentId as Id<'documents'>,
      content,
    })
  }

  if (document === undefined) {
    return (
      <div>
        <CoverImage.Skeleton />
        <div className="mx-auto mt-10 md:max-w-3xl lg:max-w-4xl">
          <div className="space-y-4 pt-4 pl-8">
            <Skeleton className="h-14 w-[50%]" />
            <Skeleton className="h-4 w-[80%]" />
            <Skeleton className="h-4 w-[40%]" />
            <Skeleton className="h-4 w-[60%]" />
          </div>
        </div>
      </div>
    )
  }

  if (document === null) {
    return <div>Not found</div>
  }

  return (
    <div className="pb-40">
      <CoverImage preview url={document.coverImage} />
      <div className="mx-auto md:max-w-3xl lg:max-w-4xl">
        <Toolbar preview initialData={document} />
        <Editor editable={false} onChange={onChange} initialContent={document.content} />
      </div>
    </div>
  )
}

export default DocumentIdPage
