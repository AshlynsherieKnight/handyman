import CommentShow from './CommentShow';

const CommentsList = ({ comments, updateComments, deleteComment }) => (
  <>
    { comments.map(t => 
      <CommentShow
        key={t.id}
        {...t}
        updateComments={updateComments}
        deleteComment={deleteComment}
      />
    )}
  </>
)

export default CommentsList;