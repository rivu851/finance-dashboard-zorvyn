import React from 'react';
import { Menu, X, LayoutDashboard, CreditCard, PieChart, Users, Settings, HelpCircle, BarChart as BarChartIcon } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const navItems = [
    { icon: LayoutDashboard, label: 'Overview' },
    { icon: CreditCard, label: 'Transactions' },
    { icon: PieChart, label: 'Analytics' },
    { icon: BarChartIcon, label: 'Monthly Comparison' },
    { icon: Users, label: 'Accounts' },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <aside className={`fixed top-0 left-0 h-full w-64 bg-[#6A2AF3] border-none flex flex-col p-6 z-50 transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
      <div className="flex items-center justify-between mb-10 px-2">
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center text-[#FFD700]">
            <PieChart size={28} />
          </div>
          <span className="text-xl font-bold text-white tracking-tight">Finance</span>
        </div>
        <button
          className="lg:hidden p-2 text-white/70 hover:text-white"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <X size={20} />
        </button>
      </div>

      <nav className="flex-1 space-y-2">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => {
              setActiveTab(item.label);
              setIsMobileMenuOpen(false);
            }}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-full text-sm font-medium transition-all ${activeTab === item.label
                ? 'bg-white text-[#6A2AF3] shadow-md'
                : 'text-white/70 hover:bg-white/10 hover:text-white'
              }`}
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto pt-6 border-t border-white/10">
        <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-full text-sm font-medium text-white/70 hover:bg-white/10 hover:text-white transition-all">
          <HelpCircle size={20} />
          <span>Support</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;