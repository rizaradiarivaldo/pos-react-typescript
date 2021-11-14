import React from "react";
import { Modal, Button } from "react-bootstrap";

interface IProps {
  data: {
    show?: any;
    handleClose?: any;
  };
}

const ModalComp = (props: IProps) => {
  const { show, handleClose } = props.data;
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalComp;
