import Banner from '@/components/admin/banner'
import Menu from '@/components/admin/menu'
import Publish from '@/components/admin/publish'
import Title from '@/components/admin/title'
import { api } from '@/convex/_generated/api'
import { Id } from '@/convex/_generated/dataModel'
import { useQuery } from 'convex/react'
import { useParams } from 'next/navigation'
import React from 'react'

const SitePublish = () => {
  const params = useParams()

  const documentId = params.documentId as Id<'documents'> | undefined

  const document = useQuery(api.documents.getById, documentId ? { documentId } : 'skip')

  if (document === undefined) {
    return (
      <nav className="bg-background flex w-full items-center justify-between px-3 py-2">
        <Title.Skeleton />
        <div className="flex items-center gap-x-2">
          <Menu.Skeleton />
        </div>
      </nav>
    )
  }

  if (document === null) {
    return null
  }

  return (
    <>
      <div className="flex w-full items-center justify-between">
        {/* <Title initialData={document} /> */}
        <div className="flex items-center gap-x-2">
          <Publish initialData={document} />
          <Menu documentId={document._id} />
        </div>
      </div>
      {document.isArchived && <Banner documentId={document._id} />}
    </>
  )
}

export default SitePublish
