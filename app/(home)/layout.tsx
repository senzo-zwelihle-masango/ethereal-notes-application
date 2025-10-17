import FooterMenu from '@/components/home/footer-menu'
import NavigationMenu from '@/components/home/navigation-menu'
import React from 'react'

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <NavigationMenu />
      {children}
      <FooterMenu />
    </main>
  )
}

export default HomeLayout
