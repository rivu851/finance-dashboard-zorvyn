'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Shield, Eye, PieChart, AlertCircle, BarChart2 } from 'lucide-react';
import { useFinance } from '../context/FinanceContext';

export const InsightsSection = () => {
  const { stats, transactions } = useFinance();

  const expensePercentage = stats.totalIncome > 0 
    ? (stats.totalExpenses / stats.totalIncome) * 100 
    : 0;
  
  const cashFlowDiff = stats.totalIncome - stats.totalExpenses;
  const isPositiveFlow = cashFlowDiff >= 0;

  const insights = [
    {
      title: 'Highest Spending Category',
      value: stats.highestCategory,
      subtitle: 'From all expenses',
      icon: PieChart,
      color: 'text-purple-600',
      bg: 'bg-purple-50',
    },
    {
      title: 'Monthly Comparison',
      value: isPositiveFlow ? 'Surplus' : 'Deficit',
      subtitle: `${isPositiveFlow ? '+' : '-'}$${Math.abs(cashFlowDiff).toLocaleString()} vs last month target`,
      icon: BarChart2,
      color: isPositiveFlow ? 'text-emerald-600' : 'text-rose-600',
      bg: isPositiveFlow ? 'bg-emerald-50' : 'bg-rose-50',
    },
    {
      title: 'Data Observation',
      value: expensePercentage > 80 ? 'Critical' : expensePercentage > 50 ? 'Warning' : 'Healthy',
      subtitle: `${expensePercentage.toFixed(0)}% of income spent`,
      icon: AlertCircle,
      color: expensePercentage > 80 ? 'text-rose-600' : expensePercentage > 50 ? 'text-amber-600' : 'text-emerald-600',
      bg: expensePercentage > 80 ? 'bg-rose-50' : expensePercentage > 50 ? 'bg-amber-50' : 'bg-emerald-50',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      {insights.map((insight, index) => (
        <motion.div
          key={insight.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + index * 0.1 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm flex items-start space-x-4 transition-colors duration-200"
        >
          <div className={`p-3 rounded-xl ${insight.bg} ${insight.color} dark:bg-opacity-20`}>
            <insight.icon size={24} />
          </div>
          <div>
            <h4 className="text-gray-500 dark:text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1">{insight.title}</h4>
            <div className="text-xl font-bold text-gray-900 dark:text-white mb-1">{insight.value}</div>
            <p className="text-gray-400 dark:text-gray-500 text-xs">{insight.subtitle}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export const RoleToggle = () => {
  const { role, setRole } = useFinance();

  return (
    <div className="flex items-center bg-gray-100 dark:bg-gray-800 p-1 rounded-xl transition-colors duration-200 border border-transparent dark:border-gray-700">
      <button
        onClick={() => setRole('viewer')}
        className={`flex items-center px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
          role === 'viewer' ? 'bg-white dark:bg-gray-700 text-purple-600 dark:text-purple-400 shadow-sm' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
        }`}
      >
        <Eye size={16} className="mr-2" />
        Viewer
      </button>
      <button
        onClick={() => setRole('admin')}
        className={`flex items-center px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
          role === 'admin' ? 'bg-white dark:bg-gray-700 text-purple-600 dark:text-purple-400 shadow-sm' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
        }`}
      >
        <Shield size={16} className="mr-2" />
        Admin
      </button>
    </div>
  );
};
