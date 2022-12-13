import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

const Comments = () => {
  const [comments, setComment] = useState([])
  const { serviceId } = useParams()

  useEffect( () => {
    axios.get(`/api/lists/${serviceId}/comments`)
      .then(res => setComment(res.data))
      .catch( err => console.log(err))
  }, [])
  
  const addComment = (comment) => {
    axios.post(`/api/lists/${serviceId}/comments`, { comment })
      .then( res => setComment([...comments, res.data]))
      .catch( err => console.log(err))
  }

  const updateComments = (id, comment) => {
    axios.put(`/api/lists/${serviceId}/comments/${id}`, { comment })
      .then( res => {
        const newUpdatedComments = comments.map( t => {
          if (t.id === id) {
            return res.data
          } 
          return t
        })
        setComment(newUpdatedComments)
      })
      .catch( err => console.log(err))
  }

  const deleteComment = (id) => {
    axios.delete(`/api/lists/${serviceId}/comments/${id}`)
      .then( res => {
        setComment( comments.filter(t => t.id !== id ))
        alert(res.data.message)
      })
      .catch( err => console.log(err))
  }

  return (
    <>
      <CommentForm addComment={addComment} />
      <h1>All comments</h1>
      <CommentList 
        comments={comments}
        updateComments={updateComments}
        deleteComment={deleteComment}
      />
    </>
  )
}

export default Comments;