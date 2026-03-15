import { useState, useCallback, useEffect } from "react";
import { PaymentCard, CardFormData } from "@/types/card";
import {
  createCard,
  getInitialCards,
  saveCardsToStorage,
} from "@/services/cardService";

export const useCardManagement = () => {
  const [cards, setCards] = useState<PaymentCard[]>([]);

  // Initialize cards from localStorage on mount
  useEffect(() => {
    const initialCards = getInitialCards();
    setCards(initialCards);
  }, []);

  // Save to localStorage whenever cards change
  useEffect(() => {
    if (cards.length > 0) {
      saveCardsToStorage(cards);
    }
  }, [cards]);

  const addCard = useCallback((cardData: CardFormData) => {
    const newCard = createCard(cardData);
    setCards((prevCards) => [...prevCards, newCard]);
  }, []);

  const toggleFrozen = useCallback((cardId: string) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === cardId ? { ...card, isFrozen: !card.isFrozen } : card,
      ),
    );
  }, []);

  const deleteCard = useCallback((cardId: string) => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== cardId));
  }, []);

  return {
    cards,
    addCard,
    toggleFrozen,
    deleteCard,
  };
};
