'use client'

import React, { useEffect, useState } from 'react'
import CoverImageModal from '@/components/settings/image'
import SettingsModal from '@/components/settings/settings'

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }
  return (
    <>
      <CoverImageModal />
      <SettingsModal />
    </>
  )
}
