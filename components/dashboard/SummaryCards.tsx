'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Wallet, TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight, Edit3 } from 'lucide-react';
import { useFinance } from '../../context/FinanceContext';
import { toast } from 'react-hot-toast';
import { AnimatedNumber } from '../ui/AnimatedNumber';

interface SummaryCardsProps {
  onMonthlyComparisonClick?: () => void;
  onEditTransactionsClick?: () => void;
}

export const SummaryCards: React.FC<SummaryCardsProps> = ({ onMonthlyComparisonClick, onEditTransactionsClick }) => {
  const { stats, role } = useFinance();

  const cards = [
    {
      title: 'Total Balance',
      value: stats.totalBalance,
      icon: Wallet,
      bgClass: 'bg-gradient-to-tr from-[#902BF5] to-[#B666F6]',
      trend: stats.totalBalance >= 0 ? 'up' : 'down',
    },
    {
      title: 'Total Income',
      value: stats.totalIncome,
      icon: TrendingUp,
      bgClass: 'bg-gradient-to-tr from-[#FC4141] to-[#FD7C7C]',
      trend: 'up',
    },
    {
      title: 'Total Expenses',
      value: stats.totalExpenses,
      icon: TrendingDown,
      bgClass: 'bg-gradient-to-tr from-[#1B5BFB] to-[#5591FB]',
      trend: 'down',
    },
  ];

  return (
    <div className="space-y-4">
      {onMonthlyComparisonClick && (
        <div className="flex justify-end space-x-3 mb-5">
          {role === 'admin' && onEditTransactionsClick && (
            <button
              onClick={onEditTransactionsClick}
              className="flex items-center space-x-2 px-4 py-2 bg-purple-600 border border-purple-600 text-sm font-medium text-white rounded-xl shadow-sm shadow-purple-200 hover:bg-purple-700 transition-all"
            >
              <Edit3 size={16} />
              <span>Edit Transactions</span>
            </button>
          )}
          <button
            onClick={onMonthlyComparisonClick}
            className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-xl shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-purple-600 dark:hover:text-purple-400 transition-all"
          >
            <TrendingUp size={16} />
            <span>View Monthly Comparison</span>
          </button>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [0, -8, 0] }}
            transition={{ 
              opacity: { duration: 0.5, delay: index * 0.1 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }
            }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            className={`relative overflow-hidden ${card.bgClass} p-6 rounded-2xl shadow-sm hover:shadow-md transition-all`}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full opacity-50 -mr-8 -mt-8" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-white/20 text-white">
                  <card.icon size={24} />
                </div>
                <div className="flex items-center text-xs font-medium px-2 py-1 rounded-full bg-white/20 text-white">
                  {card.trend === 'up' ? <ArrowUpRight size={14} className="mr-1" /> : <ArrowDownRight size={14} className="mr-1" />}
                  {card.trend === 'up' ? '+12%' : '-5%'}
                </div>
              </div>

              <h3 className="text-white/80 text-sm font-medium mb-1">{card.title}</h3>
              <div className="flex items-baseline">
                <span className="text-2xl font-bold text-white mr-1">$</span>
                <AnimatedNumber value={card.value} className="text-2xl font-bold text-white" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
