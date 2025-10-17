import { LoaderIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

function Spinner({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <Button size={'icon'} variant={'ghost'}>
      <LoaderIcon
        role="status"
        aria-label="Loading"
        className={cn('size-4 animate-spin', className)}
        {...props}
      />
    </Button>
  )
}

export { Spinner }
