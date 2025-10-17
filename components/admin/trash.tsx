'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'

import { useQuery, useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { Id } from '@/convex/_generated/dataModel'
import { SearchIcon, Trash2Icon, UndoIcon } from 'lucide-react'
import { toast } from 'sonner'
import { Input } from '@/components/ui/input'

import ConfirmModal from '../settings/confirm'
import { Spinner } from '../ui/spinner'

const Trash = () => {
  const router = useRouter()
  const params = useParams()
  const documents = useQuery(api.documents.getTrash)
  const restore = useMutation(api.documents.restore)
  const remove = useMutation(api.documents.remove)

  const [search, setSearch] = useState('')

  const filteredDocuments = documents?.filter((document) => {
    return document.title.toLowerCase().includes(search.toLowerCase())
  })

  const onClick = (documentId: string) => {
    router.push(`/documents/${documentId}`)
  }

  const onRestore = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    documentId: Id<'documents'>
  ) => {
    event.stopPropagation()
    const promise = restore({ id: documentId })

    toast.promise(promise, {
      loading: 'Restoring note...',
      success: 'Note restored!',
      error: ' Failed to restore note.',
    })
  }

  const onRemove = (documentId: Id<'documents'>) => {
    const promise = remove({ id: documentId })

    toast.promise(promise, {
      loading: 'Deleting note...',
      success: 'Note deleted!',
      error: ' Failed to delete note.',
    })

    if (params.documentId === documentId) {
      router.push('/documents')
    }
  }

  if (documents === undefined) {
    return (
      <div className="flex h-full items-center justify-center p-4">
        <Spinner />
      </div>
    )
  }
  return (
    <div className="text-sm">
      <div className="flex items-center gap-x-1 p-2">
        <SearchIcon className="h-4 w-4" />
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-secondary h-7 px-2 focus-visible:ring-transparent"
          placeholder="Filter by page title..."
        />
      </div>
      <div className="mt-2 px-1 pb-1">
        <p className="text-muted-foreground hidden pb-2 text-center text-xs last:block">
          No documents found.
        </p>
        {filteredDocuments?.map((document) => (
          <div
            key={document._id}
            role="button"
            onClick={() => onClick(document._id)}
            className="hover:bg-primary/5 text-primary flex w-full items-center justify-between rounded-sm text-sm"
          >
            <span className="truncate pl-2">{document.title}</span>
            <div className="flex items-center">
              <div
                onClick={(e) => onRestore(e, document._id)}
                role="button"
                className="rounded-sm p-2 hover:bg-neutral-200 dark:hover:bg-neutral-600"
              >
                <UndoIcon className="text-muted-foreground h-4 w-4" />
              </div>
              <ConfirmModal onConfirm={() => onRemove(document._id)}>
                <div
                  role="button"
                  className="rounded-sm p-2 hover:bg-neutral-200 dark:hover:bg-neutral-600"
                >
                  <Trash2Icon className="text-muted-foreground h-4 w-4" />
                </div>
              </ConfirmModal>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Trash
