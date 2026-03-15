import { FormEvent } from "react";
import { CardFormData } from "@/types/card";
import { X } from "lucide-react";

interface AddCardModalProps {
  isOpen: boolean;
  cardName: string;
  onCardNameChange: (name: string) => void;
  onSubmit: (cardData: CardFormData) => void;
  onClose: () => void;
}

export const AddCardModal: React.FC<AddCardModalProps> = ({
  isOpen,
  cardName,
  onCardNameChange,
  onSubmit,
  onClose,
}) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (cardName.trim()) {
      onSubmit({ name: cardName });
      onCardNameChange("");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4 p-6 animate-fade-in">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-900">Add New Card</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="cardName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Card Name
            </label>
            <input
              id="cardName"
              type="text"
              placeholder="e.g., Debit Card, Travel Card"
              value={cardName}
              onChange={(e) => onCardNameChange(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              maxLength={50}
              required
            />
            <p className="text-xs text-gray-500 mt-1">
              Card number and expiry will be generated automatically
            </p>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!cardName.trim()}
              className="flex-1 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              Add Card
            </button>
          </div>
        </form>

        <style>{`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: scale(0.95);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          .animate-fade-in {
            animation: fade-in 0.2s ease-out;
          }
        `}</style>
      </div>
    </div>
  );
};
