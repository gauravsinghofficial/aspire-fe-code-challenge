import { PaymentCard as PaymentCardType } from "@/types/card";

interface PaymentCardProps {
  card: PaymentCardType;
  showCardNumber?: boolean;
}

export const PaymentCard: React.FC<PaymentCardProps> = ({
  card,
  showCardNumber = false,
}) => {
  // Format card number for display
  const formatCardNumber = () => {
    if (showCardNumber) {
      return card.cardNumber;
    }
    return card.cardNumber
      .split("")
      .map((_, index) => {
        const positionInGroup = index % 4;
        if (positionInGroup === 0 && index > 0) {
          return " •";
        }
        return "•";
      })
      .join("");
  };

  // Extract expiry year and month
  const [expiryMonth, expiryYear] = card.expiryDate.split("/");

  return (
    <div
      className="relative w-full max-w-xl h-56 rounded-3xl p-8 flex flex-col justify-between text-white transition-all duration-300 shadow-2xl"
      style={{
        backgroundColor: card.isFrozen ? "#999999" : "#01D167",
        opacity: card.isFrozen ? 0.6 : 1,
      }}
    >
      {/* Top Section - Logo and Title */}
      <div className="flex justify-between items-start">
        <div
          style={{ color: "rgba(255, 255, 255, 0.8)" }}
          className="text-xs font-semibold"
        >
          aspire
        </div>
      </div>

      {/* Cardholder Name */}
      <div>
        <p
          style={{ color: "rgba(255, 255, 255, 0.8)" }}
          className="text-xs font-semibold mb-1"
        >
          Card Name
        </p>
        <h2 className="text-2xl font-bold">{card.name}</h2>
      </div>

      {/* Card Number and Notification Badge */}
      <div className="flex items-center justify-between">
        <div>
          <p
            style={{ color: "rgba(255, 255, 255, 0.8)" }}
            className="text-xs font-semibold mb-2"
          >
            Card Number
          </p>
          <p className="text-xl font-mono tracking-wider">
            {formatCardNumber()}
          </p>
        </div>
      </div>

      {/* Card Details Row */}
      <div className="flex justify-between items-end">
        <div>
          <p
            style={{ color: "rgba(255, 255, 255, 0.8)" }}
            className="text-xs font-semibold mb-1"
          >
            Expires
          </p>
          <p className="text-lg font-mono font-semibold">
            {expiryMonth}/{expiryYear}
          </p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold">VISA</p>
        </div>
      </div>
    </div>
  );
};
