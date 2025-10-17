'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { useScroll, useTransform, motion } from 'motion/react'
import { Container } from '@/components/ui/container'
import Ipad from '@/public/images/iPad.png'
import Iphone from '@/public/images/iPhone.png'

const Showcase = () => {
  // parallax effect
  const ipadReference = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ipadReference,
    offset: ['start end', 'end start'],
  })
  const translateY = useTransform(scrollYProgress, [0, 1], [120, -120])
  // parallax effect
  const iphoneReference = useRef(null)
  const { scrollYProgress: scrollYProgressTwo } = useScroll({
    target: iphoneReference,
    offset: ['start end', 'end start'],
  })

  const translateX = useTransform(scrollYProgressTwo, [0, 1], [-120, 120])
  return (
    <Container
      size={'2xl'}
      alignment={'none'}
      height={'full'}
      padding={'px-lg'}
      gap={'none'}
      flow={'none'}
      id="showcase"
      className="relative space-y-60 overflow-hidden"
    >
      <section>
        <div className="pt-12 pb-24 md:pb-32 lg:pt-60 lg:pb-56">
          <div className="relative mx-auto flex flex-col lg:block">
            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
              <h1 className="mt-8 max-w-2xl text-5xl font-bold text-balance md:text-6xl lg:mt-16">
                Perfectly Captured on Any Device.
              </h1>
              <p className="mt-8 max-w-2xl text-pretty">
                Ethereal Notes syncs your ideas seamlessly across every screen. Whether you&apos;re
                on the go with your phone, deep in focus on your tablet, or powering through tasks
                on your desktop, your notes are always ready, right where you left them. Capture
                inspiration, organize projects, and access everything, everywhere.
              </p>
            </div>

            <motion.div
              style={{
                translateY: translateY,
              }}
              className="-z-10 order-first ml-auto h-56 w-full object-cover sm:h-96 lg:absolute lg:inset-0 lg:-top-96 lg:-right-20 lg:order-last lg:h-max lg:w-2/3 lg:object-contain dark:mix-blend-lighten dark:invert-0"
            >
              <Image
                ref={ipadReference}
                src={Ipad}
                alt="ipad mini image"
                quality={100}
                height={2000}
                width={1500}
                className="mx-auto scale-75"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section>
        <div className="pt-12 pb-24 md:pb-32 lg:pb-56">
          <div className="relative mx-auto flex flex-col items-center lg:flex-row">
            <motion.div
              style={{
                translateX: translateX,
              }}
              className="-z-10 h-56 w-full object-cover sm:h-96 lg:static lg:ml-0 lg:h-max lg:w-1/2 lg:object-contain"
            >
              <Image
                ref={iphoneReference}
                src={Iphone}
                alt="iphone 14 pro max image"
                width={1500}
                height={2000}
                priority
                quality={80}
                loading="eager"
                className="mx-auto scale-50 object-contain dark:mix-blend-lighten dark:invert-0"
              />
            </motion.div>

            <div className="max-w-lg text-center lg:ml-auto lg:w-1/2 lg:text-left">
              <h1 className="mt-8 max-w-2xl text-5xl font-bold text-balance md:text-6xl lg:mt-16">
                Coming Soon to Your Pocket.
              </h1>
              <p className="mt-8 max-w-2xl text-pretty">
                Get ready to capture inspiration anywhere, anytime. Our dedicated mobile app for
                Ethereal Notes is currently in the works, bringing powerful note-taking right to
                your smartphone. Look for us soon on the App Store and Google Play!
              </p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default Showcase
