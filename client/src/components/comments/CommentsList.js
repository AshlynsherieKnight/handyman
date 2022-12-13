import CommentShow from './CommentShow';

const CommentList = ({ comments, updateComments, deleteComment }) => (
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

export default CommentList;