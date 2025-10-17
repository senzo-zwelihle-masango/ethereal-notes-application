'use client'

import { forwardRef, RefAttributes, HTMLAttributes } from 'react'
import { useRouter } from 'next/navigation'
import { ChevronDown, ChevronRight, LucideIcon, MoreHorizontal, Plus, Trash } from 'lucide-react'
import { useMutation } from 'convex/react'
import { useUser } from '@clerk/clerk-react'
import { Id } from '@/convex/_generated/dataModel'
import { api } from '@/convex/_generated/api'
import { toast } from 'sonner'
import { cn } from '@/lib/utils'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import { Skeleton } from '@/components/ui/skeleton'

interface SidebarItemProps extends HTMLAttributes<HTMLDivElement> {
  id?: Id<'documents'>
  documentIcon?: string
  active?: boolean
  expanded?: boolean
  isSearch?: boolean
  level?: number
  onExpand?: () => void
  label: string
  onClick?: () => void
  icon: LucideIcon
}

interface ItemSkeletonProps {
  level?: number
}

type SidebarItemComponent = React.ForwardRefExoticComponent<
  SidebarItemProps & RefAttributes<HTMLDivElement>
> & {
  Skeleton: React.FC<ItemSkeletonProps>
}

const SidebarItem = forwardRef<HTMLDivElement, SidebarItemProps>(
  (
    {
      id,
      label,
      onClick,
      icon: Icon,
      active,
      documentIcon,
      isSearch,
      level = 0,
      onExpand,
      expanded,
      className,
      ...props
    },
    ref
  ) => {
    const { user } = useUser()
    const router = useRouter()
    const create = useMutation(api.documents.create)
    const archive = useMutation(api.documents.archive)
    const ChevronIcon = expanded ? ChevronDown : ChevronRight

    const onArchive = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      event.stopPropagation()
      if (!id) return
      const promise = archive({ id }).then(() => router.push('/documents'))

      toast.promise(promise, {
        loading: 'Moving to trash...',
        success: 'Note moved to trash!',
        error: 'Failed to archive note.',
      })
    }

    const handleExpand = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      event.stopPropagation()
      onExpand?.()
    }

    const onCreate = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      event.stopPropagation()
      if (!id) return
      const promise = create({ title: 'Untitled', parentDocument: id }).then((documentId) => {
        if (!expanded) {
          onExpand?.()
        }
        router.push(`/documents/${documentId}`)
      })

      toast.promise(promise, {
        loading: 'Please wait...',
        success: 'New note created successfully!',
        error: 'Failed to create a new note.',
      })
    }

    return (
      <div
        ref={ref}
        onClick={onClick}
        role="button"
        style={{
          paddingLeft: level ? `${level * 12 + 12}px` : '12px',
        }}
        className={cn(
          'group flex min-h-[27px] w-full cursor-pointer items-center py-1 pr-3 text-sm',
          className
        )}
        {...props}
      >
        {!!id && (
          <div
            role="button"
            className="mr-1 h-full rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600"
            onClick={handleExpand}
          >
            <ChevronIcon className="text-muted-foreground/50 h-4 w-4 shrink-0" />
          </div>
        )}
        {documentIcon ? (
          <div className="mr-2 shrink-0 text-[18px]">{documentIcon}</div>
        ) : (
          <Icon className="text-muted-foreground mr-2 h-[18px] w-[18px] shrink-0" />
        )}
        <span className="truncate">{label}</span>
        {isSearch && (
          <kbd className="bg-muted text-muted-foreground pointer-events-none ml-auto inline-flex h-5 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 select-none">
            <span className="text-xs">⌘</span>K
          </kbd>
        )}

        {!!id && (
          <div className="ml-auto flex items-center gap-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger onClick={(e) => e.stopPropagation()} asChild>
                <div
                  role="button"
                  className="ml-auto h-full rounded-sm opacity-0 group-hover:opacity-100 hover:bg-neutral-300 dark:hover:bg-neutral-600"
                >
                  <MoreHorizontal className="text-muted-foreground h-4 w-4" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-60" align="start" side="right" forceMount>
                <DropdownMenuItem onClick={onArchive}>
                  <Trash className="mr-2 h-4 w-4" />
                  Delete
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <div className="text-muted-foreground p-2 text-xs">
                  Last edited by: {user?.fullName}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            <div
              role="button"
              onClick={onCreate}
              className="ml-auto h-full rounded-sm opacity-0 group-hover:opacity-100 hover:bg-neutral-300 dark:hover:bg-neutral-600"
            >
              <Plus className="text-muted-foreground h-4 w-4" />
            </div>
          </div>
        )}
      </div>
    )
  }
) as SidebarItemComponent

const ItemSkeleton = ({ level }: ItemSkeletonProps) => {
  return (
    <div
      style={{
        paddingLeft: level ? `${level * 12 + 25}px` : '12px',
      }}
      className="flex gap-x-2 py-[3px]"
    >
      <Skeleton className="h-4 w-4" />
      <Skeleton className="h-4 w-[30%]" />
    </div>
  )
}

SidebarItem.Skeleton = ItemSkeleton

export default SidebarItem
