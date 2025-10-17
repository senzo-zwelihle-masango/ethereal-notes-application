import { metadata } from '@/lib/metadata'
import { polysansSlim, polysans, polysansMedian, polysansBulky } from '@/lib/font'
import { ReactLenis } from '@/components/providers/lenis-provider'
import { ConvexClientProvider } from '@/components/providers/convex-provider'
import { EdgeStoreProvider } from '@/components/providers/edgestore-provider'
import { NextThemeProvider } from '@/components/providers/theme-provider'
import { ModalProvider } from '@/components/providers/modal-provider'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

export { metadata }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ReactLenis
      root
      options={{
        smoothWheel: true,
        lerp: 0.1,
        duration: 2,
        orientation: 'vertical',
        gestureOrientation: 'both',
        syncTouch: true,
        syncTouchLerp: 0.075,
        touchInertiaExponent: 1.7,
        wheelMultiplier: 1,
        touchMultiplier: 1,
        infinite: false,
        autoResize: true,
        autoRaf: true,
        anchors: true,
      }}
    >
      <ConvexClientProvider>
        <EdgeStoreProvider>
          <html lang="en" suppressHydrationWarning>
            <body
              className={`${polysansSlim.variable} ${polysans.variable} ${polysansMedian.variable} ${polysansBulky.variable} font-polysans-slim antialiased`}
            >
              <NextThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                {children}

                <ModalProvider />
                <Toaster theme="system" />
              </NextThemeProvider>
            </body>
          </html>
        </EdgeStoreProvider>
      </ConvexClientProvider>
    </ReactLenis>
  )
}
