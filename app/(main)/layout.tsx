'use client'

import { Container } from '@/components/ui/container'
import { SiteHeader } from '@/components/main/site-header'
import SiteSidebar from '@/components/main/site-sidebar'
import SearchCommand from '@/components/tools/search-command'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { useConvexAuth } from 'convex/react'
import { redirect } from 'next/navigation'
import { Spinner } from '@/components/ui/spinner'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useConvexAuth()

  if (isLoading) {
    return (
      <Container size={'2xl'} height={'full'} padding={'md'} alignment={'center'}>
        <Spinner />
      </Container>
    )
  }

  if (!isAuthenticated) {
    return redirect('/')
  }
  return (
    <SidebarProvider>
      <SiteSidebar />
      <SidebarInset>
        <SiteHeader />
        <main className="h-full flex-1 overflow-y-auto">
          <SearchCommand />
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default MainLayout
