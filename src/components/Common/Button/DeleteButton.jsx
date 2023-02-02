import Modal from 'components/Modal';
import ModalContent from 'components/Modal/ModalContent/ModalContent';
import { useState } from 'react';
import { Button } from './Button.styled';

export const DeleteButton = ({ onClick, children }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const clickHandler = () => {
    closeModalHandler();
    onClick();
  };

  const openModalHandler = () => {
    setIsModalVisible(true);
  };

  const closeModalHandler = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="button" onClick={openModalHandler}>
        {children}
      </Button>
      {isModalVisible && (
        <Modal onClose={closeModalHandler}>
          <ModalContent
            message={`Are you sure?`}
            onClose={closeModalHandler}
            onClick={clickHandler}
          />
        </Modal>
      )}
    </>
  );
};
