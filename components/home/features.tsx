import React from 'react'
import Image from 'next/image'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Container } from '@/components/ui/container'
import { CommandIcon } from 'lucide-react'
import BlockNoteIcon from '@/components/svg/blocknote'
import { ConvexIcon } from '@/components/svg/convex'
import { NextjsIcon } from '@/components/svg/next-js'
import ClerkIcon from '@/components/svg/clerk'
import { ReactIcon } from '@/components/svg/react'
import { TailwindCSSIcon } from '@/components/svg/tailwind'

const Features = () => {
  return (
    <Container
      size={'2xl'}
      alignment={'none'}
      height={'full'}
      padding={'px-lg'}
      gap={'none'}
      flow={'none'}
      id="features"
      className="relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto grid gap-2 sm:grid-cols-5">
          <Card className="group overflow-hidden shadow-zinc-950/5 sm:col-span-3 sm:rounded-none sm:rounded-tl-xl">
            <CardHeader>
              <div className="md:p-6">
                <p className="text-lg font-semibold text-balance sm:text-2xl">Block-Based Editor</p>
                <p className="mt-3 max-w-sm text-sm">
                  Create flexible, structured content with a Notion-style block editor powered by
                  Blocknote.
                </p>
              </div>
            </CardHeader>

            <div className="relative h-fit mask-b-from-75% mask-b-to-95% pl-6 md:pl-12">
              <div className="bg-background overflow-hidden rounded-tl-lg border-t border-l pt-2 pl-2 dark:bg-zinc-950">
                <Image
                  src="/images/blocknote-shadcn-editor-dark.png"
                  className="hidden rounded-tl-lg dark:block"
                  alt="blocknote shadcn editor dark"
                  width={1207}
                  height={929}
                />
                <Image
                  src="/images/blocknote-shadcn-editor.png"
                  className="rounded-tl-lg shadow dark:hidden"
                  alt="blocknote shadcn editor"
                  width={1207}
                  height={929}
                />
              </div>
            </div>
          </Card>

          <Card className="group overflow-hidden shadow-zinc-950/5 sm:col-span-2 sm:rounded-none sm:rounded-tr-xl">
            <p className="mx-auto my-6 max-w-md px-6 text-center text-lg font-semibold text-balance sm:text-2xl md:p-6">
              Smooth interactions, theme switching, command palette, and intuitive shortcuts built
              in.
            </p>

            <CardContent className="mt-auto h-fit">
              <div className="relative mask-radial-[75%_75%] mask-radial-from-75% mask-radial-at-right max-sm:mb-6">
                <div className="aspect-76/59 overflow-hidden rounded-r-lg border">
                  <Image
                    src="/images/dashboard-flipped-dark.png"
                    className="hidden dark:block"
                    alt="dashboard flipped dark"
                    width={1207}
                    height={929}
                  />
                  <Image
                    src="/images/dashboard-flipped.png"
                    className="shadow dark:hidden"
                    alt="dashboard flipped "
                    width={1207}
                    height={929}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="group p-6 shadow-zinc-950/5 sm:col-span-2 sm:rounded-none sm:rounded-bl-xl md:p-12">
            <p className="mx-auto mb-12 max-w-md text-center text-lg font-semibold text-balance sm:text-2xl">
              Fast Access with Keyboard Shortcuts
            </p>

            <div className="flex justify-center gap-6">
              <div className="bg-muted/35 relative flex aspect-square size-16 items-center rounded-[7px] border p-3 shadow-lg ring inset-shadow-sm dark:shadow-white/5 dark:ring-black dark:inset-shadow-white/5">
                <span className="absolute top-1 right-2 block text-sm font-medium">Ctrl</span>
                <CommandIcon className="mt-auto size-4" />
              </div>
              <div className="bg-muted/35 flex aspect-square size-16 items-center justify-center rounded-[7px] border p-3 shadow-lg ring inset-shadow-sm dark:shadow-white/5 dark:ring-black dark:inset-shadow-white/5">
                <span className="font-medium">K</span>
              </div>
            </div>
          </Card>
          <Card className="group relative shadow-zinc-950/5 sm:col-span-3 sm:rounded-none sm:rounded-br-xl">
            <CardHeader className="p-6 md:p-12">
              <p className="text-lg font-semibold text-balance sm:text-2xl">
                {' '}
                Built on a modern, flexible stack
              </p>
              <p className="text-muted-foreground mt-2 max-w-sm text-sm">
                Ethereal Notes is powered by technologies you know and trust — designed to scale
                with your ideas and enhance every part of your workflow.
              </p>
            </CardHeader>
            <CardContent className="relative h-fit px-6 pb-6 md:px-12 md:pb-12">
              <div className="grid grid-cols-4 gap-2 md:grid-cols-6">
                <div className="aspect-square rounded-(--radius) border border-dashed"></div>
                <div className="bg-muted/50 flex aspect-square items-center justify-center rounded-(--radius) border p-4">
                  <NextjsIcon />
                </div>

                <div className="aspect-square rounded-(--radius) border border-dashed"></div>
                <div className="bg-muted/50 flex aspect-square items-center justify-center rounded-(--radius) border p-4">
                  <ReactIcon />
                </div>

                <div className="aspect-square rounded-(--radius) border border-dashed"></div>
                <div className="bg-muted/50 flex aspect-square items-center justify-center rounded-(--radius) border p-4">
                  <ClerkIcon />
                </div>

                <div className="aspect-square rounded-(--radius) border border-dashed"></div>
                <div className="bg-muted/50 flex aspect-square items-center justify-center rounded-(--radius) border p-4">
                  <ConvexIcon />
                </div>

                <div className="aspect-square rounded-(--radius) border border-dashed"></div>
                <div className="bg-muted/50 flex aspect-square items-center justify-center rounded-(--radius) border p-4">
                  <BlockNoteIcon />
                </div>

                <div className="aspect-square rounded-(--radius) border border-dashed"></div>
                <div className="bg-muted/50 flex aspect-square items-center justify-center rounded-(--radius) border p-4">
                  <TailwindCSSIcon />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Container>
  )
}

export default Features
