'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts';
import { useFinance } from '../../context/FinanceContext';
import { format, subMonths, startOfMonth, endOfMonth } from 'date-fns';

export function IncomeSplineChart() {
  const { transactions } = useFinance();

  // Create last 6 months data for Income
  const monthData = Array.from({ length: 6 }).map((_, i) => {
    const date = subMonths(new Date(), 5 - i);
    const monthStart = startOfMonth(date).getTime();
    const monthEnd = endOfMonth(date).getTime();

    const monthIncome = transactions
      .filter(tx => tx.type === 'income' && new Date(tx.date).getTime() >= monthStart && new Date(tx.date).getTime() <= monthEnd)
      .reduce((acc, tx) => acc + tx.amount, 0);

    return {
      name: format(date, 'MMM'),
      amount: monthIncome,
    };
  });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ 
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 },
        y: { duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.1 }
      }}
      className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm transition-colors duration-200 mt-8"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Income Trend</h3>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-purple-500 mr-2" />
          <span className="text-gray-500 dark:text-gray-400 text-sm">Income</span>
        </div>
      </div>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={monthData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" strokeOpacity={0.3} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} dy={10} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} tickFormatter={(val) => `$${val}`} />
            <Tooltip 
              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
              itemStyle={{ color: '#111827', fontWeight: 600 }}
              formatter={(value: any) => [`$${value}`, 'Income']}
            />
            <Area 
              type="monotone" 
              dataKey="amount" 
              stroke="#8b5cf6" 
              strokeWidth={4}
              fillOpacity={1} 
              fill="url(#colorIncome)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
