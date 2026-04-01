'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Wallet, TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { useFinance } from '../context/FinanceContext';
import { AnimatedNumber } from './AnimatedNumber';

export const SummaryCards = () => {
  const { stats } = useFinance();

  const cards = [
    {
      title: 'Total Balance',
      value: stats.totalBalance,
      icon: Wallet,
      color: 'bg-blue-500',
      gradient: 'from-blue-500/10 to-blue-600/5',
      textColor: 'text-blue-600',
      trend: stats.totalBalance >= 0 ? 'up' : 'down',
    },
    {
      title: 'Total Income',
      value: stats.totalIncome,
      icon: TrendingUp,
      color: 'bg-emerald-500',
      gradient: 'from-emerald-500/10 to-emerald-600/5',
      textColor: 'text-emerald-600',
      trend: 'up',
    },
    {
      title: 'Total Expenses',
      value: stats.totalExpenses,
      icon: TrendingDown,
      color: 'bg-rose-500',
      gradient: 'from-rose-500/10 to-rose-600/5',
      textColor: 'text-rose-600',
      trend: 'down',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          className={`relative overflow-hidden bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow`}
        >
          <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${card.gradient} rounded-bl-full opacity-50 -mr-8 -mt-8`} />
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-2.5 rounded-xl ${card.color} bg-opacity-10 ${card.textColor}`}>
                <card.icon size={24} />
              </div>
              <div className={`flex items-center text-xs font-medium px-2 py-1 rounded-full ${
                card.trend === 'up' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'
              }`}>
                {card.trend === 'up' ? <ArrowUpRight size={14} className="mr-1" /> : <ArrowDownRight size={14} className="mr-1" />}
                {card.trend === 'up' ? '+12%' : '-5%'}
              </div>
            </div>
            
            <h3 className="text-gray-500 text-sm font-medium mb-1">{card.title}</h3>
            <div className="flex items-baseline">
              <span className="text-2xl font-bold text-gray-900 mr-1">$</span>
              <AnimatedNumber value={card.value} className="text-2xl font-bold text-gray-900" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
