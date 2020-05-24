import React from 'react';
import Modal from 'react-modal';
import { useFormContext } from 'react-hook-form';

import { PostFormData } from 'redux/interfaces';

import Description from './Description';

import './styles/UploadModal.scss';

interface Props {
  preview: string;
  modalIsOpen: boolean;
  closeModal(): void;
  onSubmit(data: PostFormData): void;
}

const UploadModal: React.FC<Props> = ({
  modalIsOpen,
  preview,
  closeModal,
  onSubmit,
}) => {
  const { handleSubmit } = useFormContext<PostFormData>();

  return (
    <Modal isOpen={modalIsOpen} className="modal" onRequestClose={closeModal}>
      <div className="modal-background" />

      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={closeModal}
      />

      <div className="modal-content">
        <img src={preview} alt="preview" width="300" height="300" />

        <Description />

        <button
          className="button is-block is-info"
          onClick={handleSubmit(onSubmit)}
        >
          Upload
        </button>
      </div>
    </Modal>
  );
};

export default UploadModal;
