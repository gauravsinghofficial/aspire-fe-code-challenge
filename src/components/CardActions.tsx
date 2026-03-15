import { Lock, Unlock, Settings, RefreshCw, Gift, XCircle } from "lucide-react";

interface CardActionsProps {
  isFrozen: boolean;
  onToggleFrozen: () => void;
  onSetSpendLimit?: () => void;
  onAddToGPay?: () => void;
  onReplaceCard?: () => void;
  onCancelCard?: () => void;
}

export const CardActions: React.FC<CardActionsProps> = ({
  isFrozen,
  onToggleFrozen,
  onSetSpendLimit,
  onAddToGPay,
  onReplaceCard,
  onCancelCard,
}) => {
  const actions = [
    {
      id: "freeze",
      label: isFrozen ? "Unfreeze card" : "Freeze card",
      icon: isFrozen ? <Unlock size={24} /> : <Lock size={24} />,
      onClick: onToggleFrozen,
      bgColor: "#EDF3FF",
      iconColor: "#325BAF",
    },
    {
      id: "spend",
      label: "Set spend limit",
      icon: <Settings size={24} />,
      onClick: onSetSpendLimit,
      bgColor: "#EDF3FF",
      iconColor: "#325BAF",
    },
    {
      id: "gpay",
      label: "Add to GPay",
      icon: <Gift size={24} />,
      onClick: onAddToGPay,
      bgColor: "#EDF3FF",
      iconColor: "#325BAF",
    },
    {
      id: "replace",
      label: "Replace card",
      icon: <RefreshCw size={24} />,
      onClick: onReplaceCard,
      bgColor: "#EDF3FF",
      iconColor: "#325BAF",
    },
    {
      id: "cancel",
      label: "Cancel card",
      icon: <XCircle size={24} />,
      onClick: onCancelCard,
      bgColor: "#FDE8E8",
      iconColor: "#EF4444",
    },
  ];

  return (
    <div className="grid grid-cols-5 gap-4 mt-6">
      {actions.map((action) => (
        <button
          key={action.id}
          onClick={action.onClick}
          className="flex flex-col items-center gap-2 p-3 rounded-lg hover:opacity-80 transition-opacity"
          title={action.label}
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{
              backgroundColor: action.bgColor,
              color: action.iconColor,
            }}
          >
            {action.icon}
          </div>
          <span className="text-xs font-medium text-gray-700 text-center">
            {action.label}
          </span>
        </button>
      ))}
    </div>
  );
};
