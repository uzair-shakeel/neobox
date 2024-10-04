import React, { useState } from "react";
import SetupSecurity from "./Security";
import Modal from "../../components/setup/SuccessModal";

const SecuritySetupPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <SetupSecurity openModal={openModal} />
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default SecuritySetupPage;
