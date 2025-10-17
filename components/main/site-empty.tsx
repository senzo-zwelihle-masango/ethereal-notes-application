'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty'
import { Container } from '@/components/ui/container'
import { useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { toast } from 'sonner'
import EtherealNotesLogo from '@/components/ui/ethereal-notes-logo'

const SiteEmpty = () => {
  // creating a new document
  const router = useRouter()
  const create = useMutation(api.documents.create)

  const handleCreate = () => {
    const promise = create({ title: 'Untitled' }).then((documentId) =>
      router.push(`/documents/${documentId}`)
    )

    toast.promise(promise, {
      loading: 'Please wait...',
      success: 'New note created successfully!',
      error: 'Failed to create a new note.',
    })
  }
  return (
    <Container
      id="empty"
      size={'lg'}
      alignment={'center'}
      height={'screen'}
      padding={'px-sm'}
      gap={'none'}
      flow={'col'}
      className="space-y-6"
    >
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <EtherealNotesLogo className="size-9 rounded-sm" />
          </EmptyMedia>
          <EmptyTitle>No Notes Yet</EmptyTitle>
          <EmptyDescription>
            You haven&apos;t created any notes yet. Get started by creating your first note.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <div className="flex gap-2">
            <Button onClick={handleCreate}>Create Note</Button>
          </div>
        </EmptyContent>
      </Empty>
    </Container>
  )
}

export default SiteEmpty
