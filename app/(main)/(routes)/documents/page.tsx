'use client'

import { useQuery, useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'
import Link from 'next/link'
import { Id } from '@/convex/_generated/dataModel'
import Image from 'next/image'
import { Card, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Trash2Icon, MoreHorizontalIcon, GlobeIcon, EyeOffIcon } from 'lucide-react'
import { Skeleton } from '@/components/ui/skeleton'
import { toast } from 'sonner'
import { format } from 'date-fns'
import SiteEmpty from '@/components/main/site-empty'

const Documents = () => {
  const documents = useQuery(api.documents.getOverview)
  const archiveDocument = useMutation(api.documents.archive)
  // const restoreDocument = useMutation(api.documents.restore);
  // const removeDocument = useMutation(api.documents.remove);

  const onArchive = (documentId: string) => {
    const promise = archiveDocument({ id: documentId as Id<'documents'> })

    toast.promise(promise, {
      loading: 'Moving to trash...',
      success: 'Document moved to trash!',
      error: 'Failed to archive document.',
    })
  }

  if (documents === undefined) {
    return (
      <div className="grid grid-cols-1 gap-6 p-8 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <Card key={i} className="flex h-[280px] flex-col overflow-hidden">
            <Skeleton className="h-32 w-full rounded-t-lg" />
            <CardHeader className="flex-grow">
              <Skeleton className="mb-2 h-6 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </CardHeader>
            <CardFooter className="flex flex-col items-start px-6 pb-4">
              <Skeleton className="mb-1 h-4 w-full" />
              <Skeleton className="h-4 w-[80%]" />
            </CardFooter>
          </Card>
        ))}
      </div>
    )
  }

  if (documents.length === 0) {
    return <SiteEmpty />
  }
  return (
    <div className="p-8">
      <h1 className="mb-6 text-2xl font-bold">Your Notes</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {documents.map((document) => (
          <Card
            key={document._id}
            className="flex h-full flex-col overflow-hidden rounded-lg transition-shadow hover:shadow-lg"
          >
            {document.coverImage && (
              <div className="relative h-32 w-full">
                <Image
                  src={document.coverImage}
                  alt="Cover Image"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-t-lg"
                />
              </div>
            )}
            <CardHeader className="flex flex-row items-start justify-between px-6 pt-4 pb-2">
              <div className="flex flex-col overflow-hidden">
                <CardTitle className="mb-1 truncate text-lg font-semibold">
                  {document.title || 'Untitled'}
                </CardTitle>
                <div className="text-muted-foreground text-sm">
                  <p>Created: {format(new Date(document._creationTime), 'MMM dd, yyyy HH:mm')}</p>
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

            <CardFooter className="flex items-center justify-end px-6 pt-2 pb-4">
              {document.isPublished && (
                <Badge variant="secondary" className="mr-2">
                  <GlobeIcon className="mr-1 size-3" /> Published
                </Badge>
              )}
              {document.isArchived && (
                <Badge variant="destructive">
                  <EyeOffIcon className="mr-1 size-3" /> Archived
                </Badge>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Documents
