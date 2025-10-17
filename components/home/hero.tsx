import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/ui/container'
import { Spotlight } from '@/components/ui/spotlight'
import { Button } from '@/components/ui/button'

const Hero = () => {
  return (
    <Container
      size={'2xl'}
      alignment={'none'}
      height={'full'}
      padding={'px-lg'}
      gap={'none'}
      flow={'none'}
      id="hero"
      className="relative overflow-hidden"
    >
      <Spotlight />

      <div className="bg-muted/50 dark:bg-background overflow-hidden">
        <div className="relative mx-auto pt-28 lg:pt-24">
          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-semibold text-balance md:text-5xl lg:text-6xl">
              Ethereal Notes, Where Productivity Meets Elegance
            </h1>
            <p className="text-muted-foreground mx-auto my-8 max-w-2xl text-xl">
              Ethereal Notes takes your organization and creativity to new heights. Whether you&apos;re a
              student, professional, or creative thinker.
            </p>

            <Button asChild>
              <Link href="#">
                <span className="btn-label">Start Building</span>
              </Link>
            </Button>
          </div>
        </div>

        <div className="mx-auto">
          <div className="pl-8 lg:pl-44">
            <div className="rotate-x-20 skew-x-12 mask-r-from-75% mask-b-from-55% mask-b-to-100% pt-6 pl-6 lg:h-176">
              <Image
                className="rounded-(--radius) border shadow-xl dark:hidden"
                src="/images/dashboard.png"
                alt="dashboard image"
                width={2880}
                height={2074}
              />
              <Image
                className="hidden rounded-(--radius) border shadow-xl dark:block"
                src="/images/dashboard-dark.png"
                alt="dashboard image dark variant"
                width={2880}
                height={2074}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Hero
