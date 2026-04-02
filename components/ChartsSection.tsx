'use client';

import React from 'react';
import { motion } from 'motion/react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from 'recharts';
import { useFinance } from '../context/FinanceContext';
import { format, subDays, startOfDay, subMonths } from 'date-fns';

export const ChartsSection = () => {
  const { transactions } = useFinance();

  // Prepare Line Chart Data - Cumulative Balance over 6 intervals
  // To simulate the provided image, we want 6-8 distinct data points tracking balance.
  // We'll calculate balance at the end of each of the last 6 months.
  const intervals = 7;
  const lineData = Array.from({ length: intervals }).map((_, i) => {
    const date = subMonths(new Date(), intervals - 1 - i);
    const dateStr = format(date, 'MMM');
    const endOfMonthTime = new Date(date.getFullYear(), date.getMonth() + 1, 0, 23, 59, 59).getTime();

    // calculate balance up to this month
    const balance = transactions
      .filter(tx => new Date(tx.date).getTime() <= endOfMonthTime)
      .reduce((acc, tx) => acc + (tx.type === 'income' ? tx.amount : -tx.amount), 0);

    // We add a starting baseline offset if empty to not look too flat if no early transactions
    return { name: dateStr, balance: balance || 0 };
  });

  // Prepare Pie Chart Data
  const categoryDataMap: Record<string, number> = {};
  transactions
    .filter(tx => tx.type === 'expense')
    .forEach(tx => {
      categoryDataMap[tx.category] = (categoryDataMap[tx.category] || 0) + tx.amount;
    });

  const pieData = Object.entries(categoryDataMap).map(([name, value]) => ({ name, value }));
  const COLORS = ['#6A2AF3', '#FF9900', '#3366FF', '#ef4444', '#10b981', '#ec4899'];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="lg:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm transition-colors duration-200"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Cash Flow</h3>
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-[#52b6bfr] mr-2" style={{ backgroundColor: '#52b6bf' }} />
              <span className="text-gray-500 dark:text-gray-400">Balance</span>
            </div>
          </div>
        </div>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#9ca3af', fontSize: 12 }}
                dy={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#9ca3af', fontSize: 12 }}
                tickFormatter={(value) => `$${value}`}
              />
              <Tooltip
                contentStyle={{ borderRadius: '12px', border: '1px solid #f3f4f6', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                formatter={(value: any) => [`$${value}`, 'Balance']}
              />
              <Line
                type="linear"
                dataKey="balance"
                stroke="#52b6bf"
                strokeWidth={5}
                dot={{ r: 6, fill: '#fff', strokeWidth: 4, stroke: '#52b6bf' }}
                activeDot={{ r: 8, strokeWidth: 0, fill: '#52b6bf' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm transition-colors duration-200"
      >
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Expenses by Category</h3>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
              />
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </div>
  );
};
