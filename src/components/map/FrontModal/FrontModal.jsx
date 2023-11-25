import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Modal from "../../Modal/Modal";
import Destination from "./Destination";
import "./FrontModal.scss";

const FrontModal = () => {
  const [openModal, closeModal] = useState(true);

  const handleClose = () => {
    closeModal(!openModal);
  };

  return (
    <>
      <AnimatePresence>
        {openModal && (
          <Modal>
            <div className="front_modal">
              <Destination />
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default FrontModal;
