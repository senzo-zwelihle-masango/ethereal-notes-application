import Link from 'next/link'
import React from 'react'
import EtherealNotesLogo from '../ui/ethereal-notes-logo'
import { navigationMenuItems } from '@/data/constants/navigation-items'

const FooterMenu = () => {
  return (
    <footer className="bg-background border-b py-12">
      <div className="mx-auto px-8 md:px-10 lg:px-12">
        <div className="flex flex-wrap justify-between gap-12">
          <div className="order-last flex items-center gap-3 md:order-first">
            <Link href="/" aria-label="go home">
              <EtherealNotesLogo className="size-9 rounded-sm" />
            </Link>
            <span className="text-muted-foreground block text-center text-sm">
              © {new Date().getFullYear()} Ethereal Notes Application, All rights reserved
            </span>
          </div>

          <div className="order-first flex flex-wrap gap-x-6 gap-y-4 md:order-last">
            {navigationMenuItems.map((link, index) => (
              <Link key={index} href={link.href} className="block duration-150">
                <span>{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterMenu
