'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { Container } from '@/components/ui/container'
import PriceFlow from '@/components/ui/pricing-flow'
import { Button } from '../ui/button'

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true)
  return (
    <Container
      size={'2xl'}
      alignment={'none'}
      height={'full'}
      padding={'px-lg'}
      gap={'none'}
      flow={'none'}
      id="pricing"
      className="relative overflow-hidden"
    >
      <div className=" relative py-16 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-balance md:text-4xl lg:text-5xl lg:tracking-tight">
              Simple pricing for everyone
            </h2>
            <p className="text-foreground/70 mx-auto mt-4 max-w-xl text-lg text-balance">
              One plan, all features. No hidden fees, no complicated tiers.
            </p>
            <div className="my-12">
              <div className="inline-flex items-center rounded-full border p-1">
                <Button
                  variant={!isAnnual ? "default" : "ghost"}
                  className="relative w-24"
                  onClick={() => setIsAnnual(false)}
                >
                  Monthly
                </Button>
                <Button
                  variant={isAnnual ? "default" : "ghost"}
                  className="relative w-24"
                  onClick={() => setIsAnnual(true)}
                >
                  Annually
                </Button>
              </div>
              <div className="mt-3 text-center text-xs">
                <span className="text-brand font-medium">Save 20%</span> On Annual Billing
              </div>
            </div>
          </div>
          <div className="container">
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
              {/* Free Tier */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex h-[650px] cursor-pointer flex-col overflow-hidden rounded-2xl border bg-card p-8 hover:shadow-lg transition-shadow"
                data-animate-card
              >
                <div className="card-content relative z-10 flex h-full flex-col">
                  {/* Title */}
                  <h3 className="text-foreground mb-4 text-2xl font-bold">Free</h3>

                  {/* Price & Duration */}
                  <div className="mb-6">
                    <span className="text-foreground text-3xl font-semibold">
                      R0
                    </span>
                    <span className="text-foreground/70 mx-2">•</span>
                    <span className="text-foreground/70">Perfect for personal use</span>
                  </div>

                  {/* CTA Button */}
                  <Button className="mb-6 w-full" variant="default" size="lg">
                    Get Started
                  </Button>

                  {/* Description */}
                  <p className="text-foreground/70 mb-6 flex-grow text-sm leading-relaxed">
                    Perfect for trying out Ethereal Notes and personal note-taking. Get started with essential features.
                  </p>

                  {/* What's Included */}
                  <div className="space-y-4">
                    <h4 className="text-foreground/70 text-xs font-medium tracking-wider uppercase">
                      What&apos;s included:
                    </h4>
                    <ul className="space-y-3">
                      {[
                        'Up to 10 Notes',
                        '50MB File Storage',
                        'Basic Search',
                        'Markdown Support',
                        'Share Notes (Read-only)',
                      ].map((item) => (
                        <li className="text-foreground flex items-center gap-3 text-sm" key={item}>
                          <div className="bg-foreground flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full">
                            <svg
                              className="text-background h-2 w-2"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                            >
                              <path
                                clipRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                fillRule="evenodd"
                              />
                            </svg>
                          </div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Pro Tier */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex h-[650px] cursor-pointer flex-col overflow-hidden rounded-2xl border bg-card p-8 shadow-md hover:shadow-xl transition-shadow"
                data-animate-card
              >
                {/* Gradient Accent */}
                <div className="gradient-accent absolute top-0 right-0 h-4 w-32 rounded-bl-2xl bg-primary" />

                <div className="card-content relative z-10 flex h-full flex-col">
                  {/* Title */}
                  <h3 className="text-foreground mb-4 text-2xl font-bold">Pro</h3>

                  {/* Price & Duration */}
                  <div className="mb-6">
                    <span className="text-foreground text-3xl font-semibold">
                      R{isAnnual ? '2,999' : '299'}
                    </span>
                    <span className="text-foreground/70">{isAnnual ? '/year' : '/month'}</span>
                    <span className="text-foreground/70 mx-2">•</span>
                    <span className="text-foreground/70">Perfect for professionals</span>
                  </div>

                  {/* CTA Button */}
                  <Button className="mb-6 w-full" variant="default" size="lg">
                    Get Started
                  </Button>

                  {/* Description */}
                  <p className="text-foreground/70 mb-6 flex-grow text-sm leading-relaxed">
                    Everything in Free, plus advanced features for serious note-takers and teams. Unlock the full potential.
                  </p>

                  {/* What's Included */}
                  <div className="space-y-4">
                    <h4 className="text-foreground/70 text-xs font-medium tracking-wider uppercase">
                      What&apos;s included:
                    </h4>
                    <ul className="space-y-3">
                      {[
                        'Unlimited Notes',
                        'Advanced Templates',
                        'Collaboration Tools',
                        '10GB File Storage',
                        'Priority Support',
                        'Advanced Search & AI',
                        'Custom Branding',
                        'API Access',
                        'Version History',
                        'Offline Access',
                      ].map((item) => (
                        <li className="text-foreground flex items-center gap-3 text-sm" key={item}>
                          <div className="bg-foreground flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full">
                            <svg
                              className="text-background h-2 w-2"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                            >
                              <path
                                clipRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                fillRule="evenodd"
                              />
                            </svg>
                          </div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Pricing
