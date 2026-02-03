'use client'

import { useState, useEffect, useCallback } from 'react'

interface EditableTextProps {
  id: string
  defaultText: string
  className?: string
  as?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'div'
}

const STORAGE_PREFIX = 'editable_text_'

function getSavedText(id: string): string | null {
  if (typeof window === 'undefined') return null
  return localStorage.getItem(STORAGE_PREFIX + id)
}

function saveText(id: string, text: string) {
  if (typeof window === 'undefined') return
  localStorage.setItem(STORAGE_PREFIX + id, text)
}

function isEditMode(): boolean {
  if (typeof window === 'undefined') return false
  return localStorage.getItem('edit_mode') === 'true'
}

export function EditableText({ id, defaultText, className = '', as = 'span' }: EditableTextProps) {
  const [text, setText] = useState(defaultText)
  const [editMode, setEditMode] = useState(false)
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    const saved = getSavedText(id)
    if (saved !== null) {
      setText(saved)
    }
    setEditMode(isEditMode())

    const handleStorage = () => {
      setEditMode(isEditMode())
    }
    window.addEventListener('storage', handleStorage)
    window.addEventListener('editModeChange', handleStorage)
    return () => {
      window.removeEventListener('storage', handleStorage)
      window.removeEventListener('editModeChange', handleStorage)
    }
  }, [id])

  const handleBlur = useCallback((e: React.FocusEvent<HTMLElement>) => {
    const newText = e.currentTarget.innerText
    setText(newText)
    saveText(id, newText)
    setIsEditing(false)
  }, [id])

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      ;(e.currentTarget as HTMLElement).blur()
    }
    if (e.key === 'Escape') {
      ;(e.currentTarget as HTMLElement).blur()
    }
  }, [])

  const Tag = as

  if (!editMode) {
    return <Tag className={className}>{text}</Tag>
  }

  return (
    <Tag
      className={`${className} ${isEditing ? 'ring-2 ring-blue-400 ring-offset-2 rounded' : 'hover:ring-2 hover:ring-blue-200 hover:ring-offset-1 rounded cursor-text'}`}
      contentEditable
      suppressContentEditableWarning
      onFocus={() => setIsEditing(true)}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    >
      {text}
    </Tag>
  )
}

export function EditModePanel() {
  const [editMode, setEditMode] = useState(false)
  const [hasChanges, setHasChanges] = useState(false)

  useEffect(() => {
    setEditMode(isEditMode())
    checkForChanges()
  }, [])

  const checkForChanges = () => {
    if (typeof window === 'undefined') return
    const keys = Object.keys(localStorage).filter(k => k.startsWith(STORAGE_PREFIX))
    setHasChanges(keys.length > 0)
  }

  const toggleEditMode = () => {
    const newMode = !editMode
    localStorage.setItem('edit_mode', String(newMode))
    setEditMode(newMode)
    window.dispatchEvent(new Event('editModeChange'))
  }

  const revertAll = () => {
    if (!confirm('모든 수정사항을 원래대로 되돌리시겠습니까?')) return
    const keys = Object.keys(localStorage).filter(k => k.startsWith(STORAGE_PREFIX))
    keys.forEach(k => localStorage.removeItem(k))
    setHasChanges(false)
    window.location.reload()
  }

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-2">
      {editMode && hasChanges && (
        <button
          onClick={revertAll}
          className="px-4 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl shadow-lg font-medium flex items-center gap-2 transition-all"
        >
          ↩️ 원래대로
        </button>
      )}
      <button
        onClick={toggleEditMode}
        className={`px-4 py-3 rounded-xl shadow-lg font-medium flex items-center gap-2 transition-all ${
          editMode 
            ? 'bg-blue-500 hover:bg-blue-600 text-white' 
            : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-200'
        }`}
      >
        {editMode ? '✓ 편집 중' : '✏️ 편집'}
      </button>
    </div>
  )
}
