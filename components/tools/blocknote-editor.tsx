'use client'

import React from 'react'
import { useTheme } from 'next-themes'
import { useCreateBlockNote } from '@blocknote/react'
import { BlockNoteView } from '@blocknote/shadcn'
import { PartialBlock } from '@blocknote/core'
import '@blocknote/shadcn/style.css'
import { useEdgeStore } from '../providers/edgestore-provider'

interface EditorProps {
  onChange: (value: string) => void
  initialContent?: string
  editable?: boolean
}

const BlockNoteEditor = ({ onChange, initialContent, editable = true }: EditorProps) => {
  const { resolvedTheme } = useTheme()
  const { edgestore } = useEdgeStore()

  const handleUpload = async (file: File) => {
    const response = await edgestore.publicFiles.upload({
      file,
    })
    return response.url
  }

  const editor = useCreateBlockNote({
    initialContent: initialContent ? (JSON.parse(initialContent) as PartialBlock[]) : undefined,
    uploadFile: handleUpload,
  })
  return (
    <BlockNoteView
      theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
      onChange={() => {
        // Only trigger onChange if the editor is editable
        if (editable) {
          onChange(JSON.stringify(editor.document, null, 2))
        }
      }}
      editor={editor}
      editable={editable}
      shadCNComponents={
        {
          // Pass modified ShadCN components from your project here.
          // Otherwise, the default ShadCN components will be used.
        }
      }
    />
  )
}

export default BlockNoteEditor
