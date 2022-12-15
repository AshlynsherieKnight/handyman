import { useState, useEffect } from 'react';

const CommentForm = ({ addComment, id, comment_subject, comment_body, updateComment, setEdit }) => {
  const [comment, setComment] = useState({ title: '', rating: 0, complete: false, price: null })

  useEffect( () => {
    if (id) {
      setComment({ comment_subject, comment_body })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateComment(id, comment)
      setEdit(false)
    } else {
      addComment(comment)
    }
    setComment({ comment_body: '', comment_subject: '' })
  }

  return (
    <>
      <h1>{id ? 'Update' : 'Create'} Todo</h1>
      <form onSubmit={handleSubmit}>
        <label>Subject</label>
        <input 
          name='subject'
          value={comment.subject}
          onChange={(e) => setComment({ ...comment, subject: e.target.value })}
          required
        />
        <label>Comment</label>
        <textarea 
          name='body'
          value={comment.comment_body}
          onChange={(e) => setComment({ ...comment, comment_body: e.target.value})}
          required
          max='5'
          min='0'
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default CommentForm;