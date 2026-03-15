export interface PaymentCard {
  id: string;
  name: string;
  cardNumber: string;
  expiryDate: string;
  isFrozen: boolean;
  createdAt: Date;
}

export interface CardFormData {
  name: string;
}

export interface CardContextType {
  cards: PaymentCard[];
  addCard: (cardData: CardFormData) => void;
  toggleFrozen: (cardId: string) => void;
  deleteCard: (cardId: string) => void;
}
