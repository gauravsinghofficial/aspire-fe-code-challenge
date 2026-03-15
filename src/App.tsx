import { useState } from "react";
import { useCardManagement } from "@/hooks/useCardManagement";
import { useAddCardModal } from "@/hooks/useAddCardModal";
import { PaymentCard } from "@/components/PaymentCard";
import { AddCardModal } from "@/components/AddCardModal";
import { Sidebar } from "@/components/Sidebar";
import { CardActions } from "@/components/CardActions";
import { Transaction } from "@/components/TransactionHistory";
import { Plus, Eye, EyeOff } from "lucide-react";
import "@/styles/globals.css";

type MenuItem = "home" | "cards" | "payments" | "credits" | "settings";

function App() {
  const { cards, addCard, toggleFrozen, deleteCard } = useCardManagement();
  const { isOpen, openModal, closeModal, cardName, setCardName, resetForm } =
    useAddCardModal();
  const [activeMenu, setActiveMenu] = useState<MenuItem>("cards");
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  const [showCardNumber, setShowCardNumber] = useState(false);
  const [cardDetailsExpanded, setCardDetailsExpanded] = useState(false);
  const [recentTransactionsExpanded, setRecentTransactionsExpanded] =
    useState(true);

  // Sample transactions data
  const [transactions] = useState<Transaction[]>([
    {
      id: "1",
      merchant: "Hamleys",
      amount: 150,
      date: "15 May 2025",
      status: "refund",
    },
    {
      id: "2",
      merchant: "Hamleys",
      amount: 150,
      date: "14 May 2025",
      status: "charged",
    },
    {
      id: "3",
      merchant: "Hamleys",
      amount: 150,
      date: "13 May 2025",
      status: "charged",
    },
    {
      id: "4",
      merchant: "Hamleys",
      amount: 150,
      date: "12 May 2025",
      status: "charged",
    },
  ]);

  const handleAddCard = (cardData: { name: string }) => {
    addCard(cardData);
    resetForm();
  };

  const selectedCard = cards[selectedCardIndex];

  return (
    <div className="flex h-screen" style={{ backgroundColor: "#F5F7FA" }}>
      {/* Sidebar */}
      <Sidebar activeMenu={activeMenu} onMenuChange={setActiveMenu} />

      {/* Main Content with Flex Layout */}
      <div
        className="flex-1 ml-64 overflow-hidden flex flex-col"
        style={{ backgroundColor: "#F5F7FA" }}
      >
        {/* Top Bar - Available Balance and Add Card Button */}
        <div
          className="px-8 py-6 flex justify-between items-start"
          style={{ backgroundColor: "#F5F7FA" }}
        >
          <div>
            <p className="text-gray-600 text-sm font-semibold mb-2">
              Available balance
            </p>
            <div className="flex items-center gap-3">
              <div
                className="text-white px-3 py-2 rounded-full text-sm font-bold"
                style={{ backgroundColor: "#01D167" }}
              >
                $
              </div>
              <p className="text-4xl font-bold text-gray-900">3,000</p>
            </div>
          </div>
          <button
            onClick={openModal}
            className="flex items-center gap-2 text-white px-6 py-3 rounded font-semibold transition-colors shadow-md"
            style={{ backgroundColor: "#325BAF" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#274B9F")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#325BAF")
            }
          >
            <Plus size={20} />
            Add Card
          </button>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-hidden px-8 pb-8 flex flex-col gap-6">
          {selectedCard && (
            <>
              {/* Card Selection Tabs */}
              <div className="flex gap-4 items-center">
                <button
                  className="text-gray-900 font-semibold text-sm pb-2"
                  style={{ borderBottom: "2px solid #01D167" }}
                >
                  My debit cards
                </button>
                <button className="text-gray-500 font-semibold text-sm pb-2">
                  All company cards
                </button>
              </div>

              {/* Main Container - Two Column Layout */}
              <div className="flex-1 overflow-hidden flex gap-6 bg-white rounded-lg p-6 shadow-md">
                {/* Left Column - Card Section (~60%) */}
                <div className="flex-[0.6] overflow-y-auto flex flex-col items-center">
                  {/* Show Card Number Toggle */}
                  <button
                    onClick={() => setShowCardNumber(!showCardNumber)}
                    className="flex items-center justify-center gap-2 mb-3 cursor-pointer transition-colors"
                    style={{ color: "#01D167" }}
                  >
                    <span className="text-sm font-semibold">
                      Show card number
                    </span>
                    {showCardNumber ? <Eye size={18} /> : <EyeOff size={18} />}
                  </button>

                  {/* Debit Card */}
                  <div className="w-full max-w-[520px] mb-6">
                    <PaymentCard
                      card={selectedCard}
                      showCardNumber={showCardNumber}
                    />
                  </div>

                  {/* Card Carousel Indicator Dots */}
                  {cards.length > 1 && (
                    <div className="flex justify-center gap-1.5 mt-3 mb-5">
                      {cards.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedCardIndex(index)}
                          className={`transition-all ${
                            index === selectedCardIndex
                              ? "w-4 h-2 rounded-full"
                              : "w-2 h-2 rounded-full"
                          }`}
                          style={{
                            backgroundColor:
                              index === selectedCardIndex
                                ? "#01D167"
                                : "#D1D5DB",
                          }}
                          aria-label={`Select card ${index + 1}`}
                        />
                      ))}
                    </div>
                  )}

                  {/* Card Actions */}
                  <div className="w-full max-w-[520px]">
                    <CardActions
                      isFrozen={selectedCard.isFrozen}
                      onToggleFrozen={() => toggleFrozen(selectedCard.id)}
                      onSetSpendLimit={() =>
                        alert("Set spend limit functionality")
                      }
                      onAddToGPay={() =>
                        alert("Add to Google Pay functionality")
                      }
                      onReplaceCard={() => alert("Replace card functionality")}
                      onCancelCard={() => {
                        if (
                          window.confirm(
                            "Are you sure you want to cancel this card?",
                          )
                        ) {
                          deleteCard(selectedCard.id);
                        }
                      }}
                    />
                  </div>
                </div>

                {/* Right Column - Details Section (~40%) */}
                <div className="flex-[0.4] overflow-hidden flex flex-col gap-4">
                  {/* Card Details Accordion */}
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <button
                      onClick={() =>
                        setCardDetailsExpanded(!cardDetailsExpanded)
                      }
                      className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
                          style={{
                            backgroundColor: "#EDF3FF",
                            color: "#325BAF",
                          }}
                        >
                          💳
                        </div>
                        <span className="font-semibold text-gray-900 text-sm">
                          Card details
                        </span>
                      </div>
                      <svg
                        className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                          cardDetailsExpanded ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                    {cardDetailsExpanded && (
                      <div className="px-4 py-3 border-t border-gray-200 text-xs text-gray-600">
                        <p>Card number ending in •••• 5678</p>
                        <p className="mt-2">Expires 12/28</p>
                        <p className="mt-2">Status: Active</p>
                      </div>
                    )}
                  </div>

                  {/* Recent Transactions Accordion */}
                  <div className="bg-white rounded-lg shadow-md overflow-hidden flex-1 overflow-y-auto flex flex-col">
                    <button
                      onClick={() =>
                        setRecentTransactionsExpanded(
                          !recentTransactionsExpanded,
                        )
                      }
                      className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors cursor-pointer flex-shrink-0"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
                          style={{
                            backgroundColor: "#EDF3FF",
                            color: "#325BAF",
                          }}
                        >
                          📊
                        </div>
                        <span className="font-semibold text-gray-900 text-sm">
                          Recent transactions
                        </span>
                      </div>
                      <svg
                        className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                          recentTransactionsExpanded ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                    {recentTransactionsExpanded && (
                      <div className="flex-1 overflow-y-auto">
                        <div className="px-4 py-3 border-t border-gray-200">
                          <div className="space-y-3">
                            {transactions.map((transaction) => (
                              <div
                                key={transaction.id}
                                className="hover:bg-gray-50 p-3 rounded-lg transition-colors border border-gray-100"
                              >
                                <div className="flex items-start justify-between gap-2">
                                  <div className="flex-1 min-w-0">
                                    <p className="font-semibold text-gray-900 text-xs truncate">
                                      {transaction.merchant}
                                    </p>
                                    <p className="text-xs text-gray-500 mt-1">
                                      {transaction.date}
                                    </p>
                                    <div className="flex items-center gap-2 mt-2">
                                      <div
                                        className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                                        style={{
                                          backgroundColor: "#EDF3FF",
                                          color: "#325BAF",
                                        }}
                                      >
                                        <span className="text-xs font-bold">
                                          ✓
                                        </span>
                                      </div>
                                      <p className="text-xs text-gray-600">
                                        {transaction.status === "refund"
                                          ? "Refund"
                                          : "Charged"}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="text-right flex-shrink-0">
                                    <p
                                      className="font-bold text-xs whitespace-nowrap"
                                      style={{
                                        color:
                                          transaction.status === "refund"
                                            ? "#01D167"
                                            : "#222222",
                                      }}
                                    >
                                      {transaction.status === "refund"
                                        ? "+"
                                        : "-"}
                                      S${transaction.amount}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Empty State */}
          {!selectedCard && (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <Plus size={48} className="text-gray-300 mb-4 mx-auto" />
                <p className="text-2xl font-bold text-gray-900 mb-2">
                  No cards yet
                </p>
                <p className="text-gray-600 mb-6">
                  Add your first card to get started
                </p>
                <button
                  onClick={openModal}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Add Card
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      <AddCardModal
        isOpen={isOpen}
        cardName={cardName}
        onCardNameChange={setCardName}
        onSubmit={handleAddCard}
        onClose={closeModal}
      />
    </div>
  );
}

export default App;
