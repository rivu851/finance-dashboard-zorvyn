import React from 'react';
import { motion } from 'motion/react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';
import { useFinance } from '../context/FinanceContext';
import { format, subMonths, startOfMonth, endOfMonth } from 'date-fns';

export function MonthlyComparison() {
  const { transactions } = useFinance();

  // Create last 6 months data
  const monthData = Array.from({ length: 6 }).map((_, i) => {
    const date = subMonths(new Date(), 5 - i);
    const monthStart = startOfMonth(date).getTime();
    const monthEnd = endOfMonth(date).getTime();

    const monthIncome = transactions
      .filter(tx => tx.type === 'income' && new Date(tx.date).getTime() >= monthStart && new Date(tx.date).getTime() <= monthEnd)
      .reduce((acc, tx) => acc + tx.amount, 0);

    const monthExpense = transactions
      .filter(tx => tx.type === 'expense' && new Date(tx.date).getTime() >= monthStart && new Date(tx.date).getTime() <= monthEnd)
      .reduce((acc, tx) => acc + tx.amount, 0);

    return {
      name: format(date, 'MMM yyyy'),
      Income: monthIncome,
      Expense: monthExpense,
      Net: monthIncome - monthExpense
    };
  });

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm transition-colors duration-200"
      >
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Monthly Financial Comparison</h2>
        
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af' }} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9ca3af' }} tickFormatter={(val) => `$${val}`} />
              <Tooltip 
                cursor={{ fill: 'rgba(0,0,0,0.02)' }}
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
              />
              <Legend wrapperStyle={{ paddingTop: '20px' }} />
              <Bar dataKey="Income" fill="#8b5cf6" radius={[4, 4, 0, 0]} barSize={32} />
              <Bar dataKey="Expense" fill="#f43f5e" radius={[4, 4, 0, 0]} barSize={32} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {monthData.slice(-3).reverse().map((data) => (
          <motion.div
            key={data.name}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-gray-800 p-5 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm transition-colors duration-200"
          >
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">{data.name} Summary</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-500 dark:text-gray-400">Income</span>
                <span className="font-semibold text-purple-600 dark:text-purple-400">${data.Income.toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 dark:text-gray-400">Expense</span>
                <span className="font-semibold text-rose-500 dark:text-rose-400">${data.Expense.toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
              </div>
              <div className="pt-3 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
                <span className="text-gray-900 dark:text-white font-medium">Net</span>
                <span className={`font-bold ${data.Net >= 0 ? 'text-emerald-500 dark:text-emerald-400' : 'text-rose-500 dark:text-rose-400'}`}>
                  ${data.Net.toLocaleString(undefined, {minimumFractionDigits: 2})}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
