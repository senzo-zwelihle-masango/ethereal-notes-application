'use client'

import React from 'react'
import Link from 'next/link'
import { useConvexAuth } from 'convex/react'
import { SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import { MenuIcon, XIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navigationMenuItems } from '@/data/constants/navigation-items'
import { Button } from '@/components/ui/button'
import EtherealNotesLogo from '@/components/ui/ethereal-notes-logo'
import { Spinner } from '@/components/ui/spinner'
import ThemeSwitcher from '@/components/ui/theme-switcher'

const NavigationMenu = () => {
  const { isAuthenticated, isLoading } = useConvexAuth()
  const [menuState, setMenuState] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  React.useEffect(() => {
    console.log('Authentication status:', isAuthenticated)
  }, [isAuthenticated])

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <header>
      <nav data-state={menuState && 'active'} className="fixed z-20 w-full px-2">
        <div
          className={cn(
            'mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12',
            isScrolled && 'bg-background/50 max-w-7xl rounded-2xl border backdrop-blur-sm lg:px-5'
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <Link href="/" aria-label="home" className="flex items-center space-x-2">
                <EtherealNotesLogo className="size-9 rounded-sm" />
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <MenuIcon className="m-auto size-6 duration-200 in-data-[state=active]:scale-0 in-data-[state=active]:rotate-180 in-data-[state=active]:opacity-0" />
                <XIcon className="absolute inset-0 m-auto size-6 scale-0 -rotate-180 opacity-0 duration-200 in-data-[state=active]:scale-100 in-data-[state=active]:rotate-0 in-data-[state=active]:opacity-100" />
              </button>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                {navigationMenuItems.map((item, index) => (
                  <li key={index}>
                    <Link href={item.href} className="block duration-150">
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-background mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 in-data-[state=active]:block md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none lg:in-data-[state=active]:flex dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {navigationMenuItems.map((item, index) => (
                    <li key={index}>
                      <Link href={item.href} className="block duration-150">
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <ThemeSwitcher />
                {/* auth states */}
                {isLoading && <Spinner />}

                {!isAuthenticated && !isLoading && (
                  <>
                    <Button asChild variant="outline" className={cn(isScrolled && 'lg:hidden')}>
                      <SignInButton mode="modal">Sign In</SignInButton>
                    </Button>
                    <Button asChild className={cn(isScrolled && 'lg:hidden')}>
                      <SignUpButton mode="modal">Sign Up</SignUpButton>
                    </Button>
                  </>
                )}
                {isAuthenticated && !isLoading && (
                  <>
                    <UserButton />
                    <Button asChild className={cn(isScrolled ? 'lg:inline-flex' : 'hidden')}>
                      <Link href="/documents">
                        <span>Start Building</span>
                      </Link>
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default NavigationMenu
