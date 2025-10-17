import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://ethereal-notes-application.vercel.app/'),
  title: {
    default: 'Ethereal Notes Application',
    template: '%s | Ethereal',
  },
  description:
    'Ethereal is a fast, minimal Notion-like notes and documentation app with blocks, rich-text editing, collaboration, and powerful organization tools.',
  keywords: [
    'notes app',
    'documentation',
    'rich text editor',
    'collaboration',
    'productivity',
    'Ethereal',
    'notes',
    'knowledge base',
    'Next.js',
    'React',
    'TypeScript',
  ],
  authors: [{ name: 'Ethereal', url: 'https://ethereal-notes-application.vercel.app/' }],
  creator: 'Senzo Masango',
  publisher: 'Senzo Masango',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ethereal-notes-application.vercel.app/',
    title: 'Ethereal — Notion-like Notes & Docs',
    description:
      'Create, organize, and collaborate on notes and docs with Ethereal — fast, beautiful, and extensible knowledge workspace.',
    siteName: 'Ethereal',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ethereal — Notion-like Notes & Docs',
    description:
      'Create and collaborate on notes and docs with Ethereal — a fast, minimal knowledge workspace.',
    creator: '@senzomasango',
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      {
        url: '/favicon/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/favicon/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/favicon/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    other: [{ rel: 'manifest', url: '/favicon/site.webmanifest' }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}
