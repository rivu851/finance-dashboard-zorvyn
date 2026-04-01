'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from 'recharts';
import { useFinance } from '../context/FinanceContext';
import { format, subDays, startOfDay } from 'date-fns';

export const ChartsSection = () => {
  const { transactions } = useFinance();

  // Prepare Line Chart Data (Last 7 days)
  const lineData = Array.from({ length: 7 }).map((_, i) => {
    const date = subDays(new Date(), 6 - i);
    const dateStr = format(date, 'MMM dd');
    const dayStart = startOfDay(date).getTime();
    const dayEnd = dayStart + 86400000;

    const dayIncome = transactions
      .filter(tx => tx.type === 'income' && new Date(tx.date).getTime() >= dayStart && new Date(tx.date).getTime() < dayEnd)
      .reduce((acc, tx) => acc + tx.amount, 0);
    
    const dayExpense = transactions
      .filter(tx => tx.type === 'expense' && new Date(tx.date).getTime() >= dayStart && new Date(tx.date).getTime() < dayEnd)
      .reduce((acc, tx) => acc + tx.amount, 0);

    return { name: dateStr, income: dayIncome, expense: dayExpense };
  });

  // Prepare Pie Chart Data
  const categoryDataMap: Record<string, number> = {};
  transactions
    .filter(tx => tx.type === 'expense')
    .forEach(tx => {
      categoryDataMap[tx.category] = (categoryDataMap[tx.category] || 0) + tx.amount;
    });
  
  const pieData = Object.entries(categoryDataMap).map(([name, value]) => ({ name, value }));
  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Cash Flow</h3>
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-blue-500 mr-2" />
              <span className="text-gray-500">Income</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-rose-500 mr-2" />
              <span className="text-gray-500">Expense</span>
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
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
              />
              <Line 
                type="monotone" 
                dataKey="income" 
                stroke="#3b82f6" 
                strokeWidth={3} 
                dot={{ r: 4, fill: '#3b82f6', strokeWidth: 2, stroke: '#fff' }}
                activeDot={{ r: 6, strokeWidth: 0 }}
              />
              <Line 
                type="monotone" 
                dataKey="expense" 
                stroke="#f43f5e" 
                strokeWidth={3} 
                dot={{ r: 4, fill: '#f43f5e', strokeWidth: 2, stroke: '#fff' }}
                activeDot={{ r: 6, strokeWidth: 0 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Expenses by Category</h3>
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
              <Legend verticalAlign="bottom" height={36}/>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </div>
  );
};
