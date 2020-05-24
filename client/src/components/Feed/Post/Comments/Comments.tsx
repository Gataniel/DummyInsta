import React from 'react';
import { Comment as CommentInterface } from 'redux/interfaces';

import Comment from './Comment';
import AddCommentContainer from './AddCommentContainer';

import './styles/Comments.scss';

interface Props {
  postId: number;
  comments: CommentInterface[];
  commentsCount: number;
  fetchCommentsList(postId: string): void;
}

const Comments: React.FC<Props> = ({
  postId,
  comments,
  fetchCommentsList,
  commentsCount,
}) => {
  const [fetchInitialized, setFetchInitialized] = React.useState(false);

  const loadComments = () => {
    if (!fetchInitialized) {
      setFetchInitialized(true);
      fetchCommentsList(postId.toString());
    }
  };

  return (
    <div className="comments has-text-centered">
      {!fetchInitialized && (
        <button
          className="button button_add-comment is-small is-link is-outlined is-fullwidth"
          onClick={loadComments}
        >
          {`See and add comments (${commentsCount || 0})`}
        </button>
      )}

      {fetchInitialized && <AddCommentContainer postId={postId} />}

      {comments &&
        comments.map((comment) => (
          <Comment comment={comment} key={comment.id} />
        ))}
    </div>
  );
};

export default Comments;
