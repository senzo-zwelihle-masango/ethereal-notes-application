'use client'

import { useRouter } from 'next/navigation'
import { useUser } from '@clerk/clerk-react'
import { toast } from 'sonner'
import { GlobeIcon, MoreHorizontal, Trash } from 'lucide-react'
import { useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { Id } from '@/convex/_generated/dataModel'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import { Skeleton } from '@/components/ui/skeleton'

interface MenuProps {
  documentId: Id<'documents'>
}

const Menu = ({ documentId }: MenuProps) => {
  const router = useRouter()
  const { user } = useUser()

  const archive = useMutation(api.documents.archive)

  const onArchive = () => {
    const promise = archive({ id: documentId })

    toast.promise(promise, {
      loading: 'Moving to trash...',
      success: 'Note moved to trash!',
      error: 'Failed to archive note.',
    })

    router.push('/documents')
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="sm" variant="ghost">
          <GlobeIcon className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-60" align="end" alignOffset={8} forceMount>
        <DropdownMenuItem onClick={onArchive}>
          <Trash className="mr-2 h-4 w-4" />
          Delete
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <div className="text-muted-foreground p-2 text-xs">Last edited by: {user?.fullName}</div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Menu

Menu.Skeleton = function MenuSkeleton() {
  return <Skeleton className="h-4 w-4" />
}
