import { useState } from "react";

interface UseAddCardModalReturn {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  cardName: string;
  setCardName: (name: string) => void;
  resetForm: () => void;
}

export const useAddCardModal = (): UseAddCardModalReturn => {
  const [isOpen, setIsOpen] = useState(false);
  const [cardName, setCardName] = useState("");

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const resetForm = () => {
    setCardName("");
    closeModal();
  };

  return {
    isOpen,
    openModal,
    closeModal,
    cardName,
    setCardName,
    resetForm,
  };
};
