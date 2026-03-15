export interface Transaction {
  id: string;
  merchant: string;
  amount: number;
  date: string;
  status: "refund" | "charged" | "pending";
  icon?: string;
}

interface TransactionHistoryProps {
  transactions: Transaction[];
}

export const TransactionHistory: React.FC<TransactionHistoryProps> = ({
  transactions,
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "refund":
        return "text-green-600";
      case "charged":
        return "text-red-600";
      case "pending":
        return "text-yellow-600";
      default:
        return "text-gray-600";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "refund":
        return "Refund on debit card";
      case "charged":
        return "Charged to debit card";
      case "pending":
        return "Pending";
      default:
        return status;
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Recent Transactions
      </h2>

      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between pb-4 border-b border-gray-200 last:border-b-0"
          >
            <div className="flex items-center gap-3 flex-1">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-sm">
                {transaction.merchant.charAt(0)}
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">
                  {transaction.merchant}
                </p>
                <p className={`text-xs ${getStatusColor(transaction.status)}`}>
                  {getStatusText(transaction.status)}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p
                className={`font-semibold ${transaction.status === "refund" ? "text-green-600" : "text-red-600"}`}
              >
                {transaction.status === "refund" ? "+" : "-"}S${" "}
                {transaction.amount}
              </p>
              <p className="text-xs text-gray-500">{transaction.date}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <button className="text-green-600 font-medium text-sm hover:text-green-700 transition-colors">
          View all card transactions →
        </button>
      </div>
    </div>
  );
};
