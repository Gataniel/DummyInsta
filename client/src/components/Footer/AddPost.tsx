import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useForm, FormContext } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import { PostFormData } from 'redux/interfaces';
import { feedPath } from 'lib/paths';

import { PostSchema } from 'components/Footer/postSchema';
import UploadModal from './UploadModal';

import './styles/AddPost.scss';

interface Props {
  createPost: (form: PostFormData) => void;
  isPostCreated: boolean;
  currentUserId: number;
}

const AddPost: React.FC<Props> = ({
  createPost,
  isPostCreated,
  currentUserId,
}) => {
  const [image, setImage] = React.useState({ preview: '', raw: '' });
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const history = useHistory();

  React.useEffect(() => {
    if (isPostCreated) {
      history.push(feedPath(currentUserId));
    }
  }, [isPostCreated, currentUserId, history]);

  const methods = useForm<PostFormData>({
    validationSchema: PostSchema,
    mode: 'onBlur',
  });

  const onSubmit = async (form: PostFormData) => {
    createPost(form);
    setIsOpen(false);
  };

  const triggerPreview = (e: any) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
      setIsOpen(true);
    }
  };

  return (
    <footer className="footer">
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <FormContext {...methods}>
        <label htmlFor="upload-button">
          <div className="content has-text-centered">
            <FontAwesomeIcon icon={faInstagram} size="3x" />
          </div>
        </label>

        <input
          id="upload-button"
          type="file"
          ref={methods.register}
          name="file"
          accept="image/png, image/jpeg"
          onChange={triggerPreview}
        />

        {modalIsOpen && (
          <UploadModal
            modalIsOpen={modalIsOpen}
            closeModal={() => setIsOpen(false)}
            preview={image.preview}
            onSubmit={onSubmit}
          />
        )}
      </FormContext>
    </footer>
  );
};

export default AddPost;
