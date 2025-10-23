'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/distributionData'
import { getComments } from '@/lib/distributionData'
import { Button } from '@/components/ui/Button'
import { v4 as uuidv4 } from 'uuid'


export default function CommentsSection() {
  const [comment, setComment] = useState('')
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [comments, setComments] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [userToken, setUserToken] = useState<string | null>(null)
  const [visibleCount, setVisibleCount] = useState(3)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [editingText, setEditingText] = useState('')

  useEffect(() => {
    let token = localStorage.getItem('comment_user_token')
    if (!token) {
      token = uuidv4()
      localStorage.setItem('comment_user_token', token)
    }
    setUserToken(token)
    loadComments()
  }, [])

  const loadComments = async () => {
    const data = await getComments()
    setComments(data || [])
  }

  const handleSubmit = async () => {
    if (!comment.trim() || !userToken) return
    setLoading(true)

    const { error } = await supabase.from('comments').insert([
      {
        content: comment,
        likes: 0,
        user_token: userToken,
      },
    ])

    if (error) console.error(error)
    else {
      setComment('')
      loadComments()
    }

    setLoading(false)
  }

  const handleEdit = async (id: number, newContent: string) => {
    const { error } = await supabase.from('comments').update({ content: newContent }).eq('id', id)
    if (!error) {
      setComments((prev) =>
        prev.map((c) => (c.id === id ? { ...c, content: newContent } : c))
      )
    }
  }

  const handleDelete = async (id: number) => {
    const { error } = await supabase.from('comments').delete().eq('id', id)
    if (!error) setComments((prev) => prev.filter((c) => c.id !== id))
  }

  const handleLike = async (id: number, currentLikes: number) => {
    const { error } = await supabase
      .from('comments')
      .update({ likes: currentLikes + 1 })
      .eq('id', id)

    if (!error) {
      setComments((prev) =>
        prev.map((c) => (c.id === id ? { ...c, likes: c.likes + 1 } : c))
      )
    }
  }

  return (
    <div className="max-w-xl mx-auto mt-14 p-4  bg-white dark:bg-gray-900 ">
      <h2 className="text-xl font-semibold mb-3 text-center text-secondary">التعليقات</h2>
      
      {/* 📝 إدخال التعليق */}
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="اكتب تعليقك هنا..."
        className="w-full h-28 p-3 border rounded-lg mb-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className='flex flex-row justify-end'>
        <Button handleChange={handleSubmit} id="comment" style={"buttonheader2"}>
        {loading ? 'جاري الإرسال...' : 'إرسال التعليق'}
      </Button>
      </div>
      

      {/* 💬 عرض التعليقات */}
      <div className="mt-6 space-y-3">
        {comments.length === 0 ? (
          <p className="text-gray-500 text-center">لا توجد تعليقات بعد.</p>
        ) : (
          comments.slice(0, visibleCount).map((c) => (
            <div
              key={c.id}
              className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm transition hover:shadow-md"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  {editingId === c.id ? (
                    <>
                      <textarea
                        value={editingText}
                        onChange={(e) => setEditingText(e.target.value)}
                        className="w-full p-2 border rounded mb-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                        autoFocus
                      />
                      <div>
                       
                        <Button handleChange={
                          () => {
                            handleEdit(c.id, editingText)
                            setEditingId(null)
                          }

                        } id="edit-comment" style={"buttonheader2"}>
                          حفظ
                        </Button>
                        <Button handleChange={
                          () => setEditingId(null)

                        } id="edit-comment" style={"buttonheader2"}>
                          إلغاء
                        </Button>
                       
                      </div>
                    </>
                  ) : (
                    <p
                      className={`text-gray-900 dark:text-gray-100 break-words ${c.user_token === userToken ? 'cursor-pointer' : ''
                        }`}
                      onClick={() => {
                        if (c.user_token === userToken) {
                          setEditingId(c.id)
                          setEditingText(c.content)
                        }
                      }}
                      title={
                        c.user_token === userToken
                          ? 'انقر لتعديل تعليقك'
                          : 'تعليق المستخدم'
                      }
                    >
                      {c.content}
                    </p>
                  )}
                  <span className="text-sm text-gray-500">
                    {new Date(c.created_at).toLocaleString('ar-DZ')}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {/* 👍 زر الإعجاب */}
                  <button
                    onClick={() => handleLike(c.id, c.likes)}
                    className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition"
                    title="إعجاب"
                  >
                    👍 <span>{c.likes}</span>
                  </button>

                  {/* 🗑️ حذف فقط */}
                  {c.user_token === userToken && editingId !== c.id && (
                    <button
                      onClick={() => {
                        if (confirm('هل أنت متأكد من حذف هذا التعليق؟'))
                          handleDelete(c.id)
                      }}
                      title="حذف التعليق"
                      className="p-1 rounded-full bg-red-100 hover:bg-red-200 text-red-700 transition"
                    >
                      🗑️
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* 📜 زر عرض المزيد */}
      {visibleCount < comments.length && (
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setVisibleCount((prev) => prev + 10)}
            className="text-blue-600 hover:underline"
          >
            عرض المزيد
          </button>
        </div>
      )}
      <div>
        <p className="text-gray-500 text-center mt-3">
          يمكنك تعديل تعليقك بالنقر عليه
        </p>
      </div>
      
    </div>
  )
}
