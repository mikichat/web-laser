'use client'

import { useState, useEffect, useCallback, createContext, useContext } from 'react'

// Content Context - 서버에서 불러온 콘텐츠 공유
interface ContentContextType {
  content: Record<string, string>
  setContent: (id: string, text: string) => void
  editMode: boolean
  setEditMode: (mode: boolean) => void
  pendingChanges: Record<string, string>
  saveChanges: (password: string) => Promise<{ success: boolean; error?: string }>
  revertChanges: () => void
  isLoading: boolean
}

const ContentContext = createContext<ContentContextType | null>(null)

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [serverContent, setServerContent] = useState<Record<string, string>>({})
  const [pendingChanges, setPendingChanges] = useState<Record<string, string>>({})
  const [editMode, setEditMode] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // 서버에서 콘텐츠 불러오기
  useEffect(() => {
    fetch('/api/content')
      .then(res => res.json())
      .then(data => {
        setServerContent(data || {})
        setIsLoading(false)
      })
      .catch(() => {
        setIsLoading(false)
      })
  }, [])

  const content = { ...serverContent, ...pendingChanges }

  const setContent = useCallback((id: string, text: string) => {
    setPendingChanges(prev => ({ ...prev, [id]: text }))
  }, [])

  const saveChanges = useCallback(async (password: string) => {
    try {
      const res = await fetch('/api/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password, content: pendingChanges })
      })
      
      const data = await res.json()
      
      if (res.ok) {
        // 저장 성공 - 서버 콘텐츠 업데이트
        setServerContent(prev => ({ ...prev, ...pendingChanges }))
        setPendingChanges({})
        return { success: true }
      } else {
        return { success: false, error: data.error || '저장 실패' }
      }
    } catch {
      return { success: false, error: '네트워크 오류' }
    }
  }, [pendingChanges])

  const revertChanges = useCallback(() => {
    setPendingChanges({})
  }, [])

  return (
    <ContentContext.Provider value={{
      content,
      setContent,
      editMode,
      setEditMode,
      pendingChanges,
      saveChanges,
      revertChanges,
      isLoading
    }}>
      {children}
    </ContentContext.Provider>
  )
}

function useContent() {
  const ctx = useContext(ContentContext)
  if (!ctx) throw new Error('ContentProvider 필요')
  return ctx
}

// 편집 가능한 텍스트 컴포넌트
interface EditableTextProps {
  id: string
  defaultText: string
  className?: string
  as?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'div'
}

export function EditableText({ id, defaultText, className = '', as = 'span' }: EditableTextProps) {
  const { content, setContent, editMode } = useContent()
  const [isEditing, setIsEditing] = useState(false)
  
  const text = content[id] ?? defaultText

  const handleBlur = useCallback((e: React.FocusEvent<HTMLElement>) => {
    const newText = e.currentTarget.innerText
    if (newText !== text) {
      setContent(id, newText)
    }
    setIsEditing(false)
  }, [id, text, setContent])

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

// 편집 모드 제어 패널
export function EditModePanel() {
  const { editMode, setEditMode, pendingChanges, saveChanges, revertChanges, isLoading } = useContent()
  const [showPasswordModal, setShowPasswordModal] = useState(false)
  const [password, setPassword] = useState('')
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  const hasChanges = Object.keys(pendingChanges).length > 0

  const handleSave = async () => {
    setSaving(true)
    setError('')
    
    const result = await saveChanges(password)
    
    setSaving(false)
    
    if (result.success) {
      setShowPasswordModal(false)
      setPassword('')
      alert('저장되었습니다!')
    } else {
      setError(result.error || '저장 실패')
    }
  }

  const handleRevert = () => {
    if (confirm('수정사항을 모두 취소하시겠습니까?')) {
      revertChanges()
    }
  }

  if (isLoading) return null

  return (
    <>
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-2">
        {editMode && hasChanges && (
          <>
            <button
              onClick={() => setShowPasswordModal(true)}
              className="px-4 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl shadow-lg font-medium flex items-center gap-2 transition-all"
            >
              💾 저장하기
            </button>
            <button
              onClick={handleRevert}
              className="px-4 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl shadow-lg font-medium flex items-center gap-2 transition-all"
            >
              ↩️ 취소
            </button>
          </>
        )}
        <button
          onClick={() => setEditMode(!editMode)}
          className={`px-4 py-3 rounded-xl shadow-lg font-medium flex items-center gap-2 transition-all ${
            editMode 
              ? 'bg-blue-500 hover:bg-blue-600 text-white' 
              : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-200'
          }`}
        >
          {editMode ? '✓ 편집 중' : '✏️ 편집'}
        </button>
      </div>

      {/* 비밀번호 입력 모달 */}
      {showPasswordModal && (
        <div className="fixed inset-0 z-[200] bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-2xl">
            <h3 className="text-xl font-bold text-gray-800 mb-4">관리자 비밀번호</h3>
            
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호 입력"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl mb-4 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none"
              onKeyDown={(e) => e.key === 'Enter' && handleSave()}
              autoFocus
            />
            
            {error && (
              <p className="text-red-500 text-sm mb-4">{error}</p>
            )}
            
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setShowPasswordModal(false)
                  setPassword('')
                  setError('')
                }}
                className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors"
              >
                취소
              </button>
              <button
                onClick={handleSave}
                disabled={saving || !password}
                className="flex-1 px-4 py-3 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 transition-colors disabled:opacity-50"
              >
                {saving ? '저장 중...' : '저장'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
