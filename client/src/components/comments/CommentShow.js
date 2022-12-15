import { useState } from 'react';
import CommentForm from './CommentForm';

const CommentShow = ({ id, title, rating, complete, price, updateComments, deleteComment }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      {
        editing ?
        <>
          <CommentForm
            id={id}
            comment_subject={comment_subject}
            comment_body={comment_body}
            updateComments={updateComments}
            setEdit={setEdit}
          />
          <button
            onClick={() => setEdit(false)}
          >
            Cancel
          </button>
        </> 
        :
        <>
          <button
            onClick={() => setEdit(true)}
          >
            Edit
          </button>
          <button
            onClick={() => deleteComment(id)}
          >
            Delete
          </button>
        </>
      }
    </>
  )
}

export default CommentShow;