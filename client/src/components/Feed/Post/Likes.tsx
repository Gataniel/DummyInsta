import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as fullHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as emptyHeart } from '@fortawesome/free-regular-svg-icons';

import { Model } from 'redux/interfaces';

import './styles/Likes.scss';

interface Props {
  count: number;
  referenceId: number;
  id: number;
  like: (referenceType: Model, referenceId: number) => void;
  dislike: (referenceId: number, id: number) => void;
}

const Likes: React.FC<Props> = ({ count, referenceId, like, dislike, id }) => {
  const handleClick = () => {
    id ? dislike(referenceId, id) : like(Model.Post, referenceId);
  };

  const likeIcon = id ? fullHeart : emptyHeart;

  return (
    <div className="likes" onClick={handleClick}>
      <div className="likes__count">{count}</div>
      <FontAwesomeIcon icon={likeIcon} size="2x" />
    </div>
  );
};

export default Likes;
