import { PaymentCard, CardFormData } from "@/types/card";

// Generate a random card number (16 digits)
export const generateCardNumber = (): string => {
  const digits = Array.from({ length: 16 }, () =>
    Math.floor(Math.random() * 10),
  ).join("");
  return digits.replace(/(\d{4})/g, "$1 ").trim();
};

// Generate expiry date (MM/YY format, 2-5 years from now)
export const generateExpiryDate = (): string => {
  const today = new Date();
  const yearsToAdd = Math.floor(Math.random() * 4) + 2; // 2-5 years
  const expiryDate = new Date(
    today.setFullYear(today.getFullYear() + yearsToAdd),
  );
  const month = String(expiryDate.getMonth() + 1).padStart(2, "0");
  const year = String(expiryDate.getFullYear()).slice(-2);
  return `${month}/${year}`;
};

// Create a new card with auto-generated details
export const createCard = (cardData: CardFormData): PaymentCard => {
  return {
    id: `card-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    name: cardData.name,
    cardNumber: generateCardNumber(),
    expiryDate: generateExpiryDate(),
    isFrozen: false,
    createdAt: new Date(),
  };
};

// Get initial cards from localStorage or return default cards
export const getInitialCards = (): PaymentCard[] => {
  const stored = localStorage.getItem("aspire_cards");
  if (stored) {
    let cards = JSON.parse(stored);
    // Migrate old card names if needed
    cards = cards.map((card: PaymentCard) => {
      if (card.name === "Primary Card") {
        return { ...card, name: "Mark Henry" };
      }
      if (card.name === "Secondary Card") {
        return { ...card, name: "John Doe" };
      }
      return card;
    });
    return cards;
  }

  // Return default cards if nothing in localStorage
  return [
    {
      id: "card-default-1",
      name: "Mark Henry",
      cardNumber: "4532 1234 5678 9010",
      expiryDate: "12/26",
      isFrozen: false,
      createdAt: new Date("2024-01-15"),
    },
    {
      id: "card-default-2",
      name: "John Doe",
      cardNumber: "5425 2334 3010 9903",
      expiryDate: "08/27",
      isFrozen: false,
      createdAt: new Date("2024-02-20"),
    },
  ];
};

// Save cards to localStorage
export const saveCardsToStorage = (cards: PaymentCard[]): void => {
  localStorage.setItem("aspire_cards", JSON.stringify(cards));
};
