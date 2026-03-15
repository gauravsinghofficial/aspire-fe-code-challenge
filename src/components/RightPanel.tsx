import { ChevronRight } from "lucide-react";
import { Transaction } from "./TransactionHistory";

interface RightPanelProps {
  transactions: Transaction[];
}

export const RightPanel: React.FC<RightPanelProps> = ({ transactions }) => {
  return (
    <div className="flex flex-col h-full">
      {/* Card Details Section */}
      <div className="px-6 py-6 border-b border-gray-200">
        <button className="flex items-center justify-between w-full hover:bg-blue-50 -mx-6 px-6 py-3 rounded-lg transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-blue-600 font-bold text-sm">💳</span>
            </div>
            <span className="font-semibold text-gray-900">Card details</span>
          </div>
          <ChevronRight size={20} className="text-gray-400" />
        </button>
      </div>

      {/* Recent Transactions Section */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        <h3 className="font-bold text-gray-900 mb-4 text-sm">
          Recent transactions
        </h3>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="hover:bg-gray-50 -mx-6 px-6 py-3 rounded-lg transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 text-sm">
                    {transaction.merchant}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {transaction.date}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 text-xs font-bold">✓</span>
                    </div>
                    <p className="text-xs text-gray-600">
                      {transaction.status === "refund"
                        ? "Refund on debit card"
                        : "Charged to debit card"}
                    </p>
                  </div>
                </div>
                <div className="text-right ml-4">
                  <p
                    className={`font-bold text-sm ${
                      transaction.status === "refund"
                        ? "text-green-600"
                        : "text-gray-900"
                    }`}
                  >
                    {transaction.status === "refund" ? "+" : "-"}S${" "}
                    {transaction.amount}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <button className="w-full mt-6 text-green-600 font-semibold text-sm hover:text-green-700 transition-colors">
          View all card transactions
        </button>
      </div>
    </div>
  );
};
