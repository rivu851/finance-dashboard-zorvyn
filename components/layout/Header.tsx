import React from 'react';
import { motion } from 'motion/react';
import { Menu, Bell } from 'lucide-react';
import { RoleToggle } from '../dashboard/InsightsAndRole';
import { ThemeToggle } from '../ui/ThemeToggle';
import { useFinance } from '../../context/FinanceContext';

interface HeaderProps {
  activeTab: string;
  setIsMobileMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, setIsMobileMenuOpen }) => {
  const { role } = useFinance();
  const getSubtitle = (tab: string) => {
    switch (tab) {
      case 'Overview':
        return "Welcome back! Here's what's happening.";
      case 'Transactions':
        return "View and manage all your past transactions.";
      default:
        return `Manage your ${tab.toLowerCase()} here.`;
    }
  };

  return (
    <header className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
      <div className="flex items-center justify-between w-full md:w-auto">
        <div className="flex items-center">
          <button
            className="lg:hidden p-2 mr-4 -ml-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
          <div>
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight"
            >
              {activeTab}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-500 dark:text-gray-400 mt-1 hidden sm:block text-sm sm:text-base"
            >
              {getSubtitle(activeTab)}
            </motion.p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end space-x-2 sm:space-x-4 w-full md:w-auto">
        <RoleToggle />
        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <button className="p-2.5 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:shadow-sm transition-all">
            <Bell size={20} />
          </button>
          <div className="flex items-center ml-2 border border-purple-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-full pr-1 pl-3 py-1 shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mr-3">
              {role}
            </span>
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-600 p-0.5 shadow-md">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-xs font-bold text-purple-600">
                JD
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;