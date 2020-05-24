import React from 'react';
import { Comment as CommentInterface } from 'redux/interfaces';

interface Props {
  comment: CommentInterface;
}

const Comment: React.FC<Props> = ({ comment }) => (
  <div className="box">
    <article className="media">
      <div className="media-content">
        <div className="content">
          <p>
            <strong>{`${comment.by}:`}</strong>
            <br />
            {comment.text}
          </p>
        </div>
      </div>
    </article>
  </div>
);

export default Comment;
