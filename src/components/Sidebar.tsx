import { Home, CreditCard, Wallet, TrendingUp, Settings } from "lucide-react";

type MenuItem = "home" | "cards" | "payments" | "credits" | "settings";

interface SidebarProps {
  activeMenu: MenuItem;
  onMenuChange: (menu: MenuItem) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeMenu,
  onMenuChange,
}) => {
  const menuItems: Array<{
    id: MenuItem;
    label: string;
    icon: React.ReactNode;
  }> = [
    { id: "home", label: "Home", icon: <Home size={20} /> },
    { id: "cards", label: "Cards", icon: <CreditCard size={20} /> },
    { id: "payments", label: "Payments", icon: <Wallet size={20} /> },
    { id: "credits", label: "Credit", icon: <TrendingUp size={20} /> },
    { id: "settings", label: "Settings", icon: <Settings size={20} /> },
  ];

  return (
    <div
      className="w-64 text-white h-screen fixed left-0 top-0 flex flex-col p-6 shadow-2xl z-50"
      style={{ backgroundColor: "#0C365A" }}
    >
      {/* Logo */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-2">
          <div
            className="w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm text-white"
            style={{ backgroundColor: "#01D167" }}
          >
            ▲
          </div>
          <span className="text-lg font-bold tracking-wide">aspire</span>
        </div>
        <p
          className="text-xs mt-2 leading-tight"
          style={{ color: "rgba(255, 255, 255, 0.6)" }}
        >
          Trusted way of banking for 1,000+ SMEs and startups in Singapore
        </p>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onMenuChange(item.id)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md transition-colors text-sm relative ${
              activeMenu === item.id ? "font-semibold" : ""
            }`}
            style={{
              color:
                activeMenu === item.id ? "#01D167" : "rgba(255, 255, 255, 0.6)",
            }}
          >
            {activeMenu === item.id && (
              <div
                className="absolute left-0 top-0 w-1 h-full rounded-r"
                style={{ backgroundColor: "#01D167" }}
              ></div>
            )}
            <span className={activeMenu === item.id ? "ml-3" : ""}>
              {item.icon}
            </span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Footer */}
      <div
        className="text-xs pt-4 border-t"
        style={{
          color: "rgba(255, 255, 255, 0.4)",
          borderColor: "rgba(255, 255, 255, 0.1)",
        }}
      >
        <p>© 2024 Aspire</p>
        <p className="mt-1" style={{ color: "rgba(255, 255, 255, 0.5)" }}>
          v1.0.0
        </p>
      </div>
    </div>
  );
};
