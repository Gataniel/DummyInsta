import React from 'react';
import LazyLoad from 'react-lazyload';
import moment from 'moment';

import { Post as PostInterface } from 'redux/interfaces';

import CommentsContainer from 'components/Feed/Post/Comments/CommentsContainer';
import LikesContainer from 'components/Feed/Post/LikesContainer';

import './styles/Post.scss';

interface Props {
  post: PostInterface;
}

const Post: React.FC<Props> = ({ post }) => {
  return (
    <LazyLoad height={200} offset={100} once>
      <div className="card card_post">
        <div className="card-image">
          <figure className="image">
            <img src={`http://localhost:8080${post.img_url}`} />
          </figure>
        </div>

        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-6">{post.by}</p>
            </div>
          </div>

          <div className="content">
            {post.description}
            <br />
            <time>{moment(post.created_at).calendar()}</time>

            <LikesContainer
              referenceId={post.id}
              count={post.likes_count}
              id={post.current_users_like_id}
            />

            <CommentsContainer
              postId={post.id}
              commentsCount={post.comments_count}
            />
          </div>
        </div>
      </div>
    </LazyLoad>
  );
};

export default Post;
