'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, ArrowUpDown, Trash2, PlusCircle } from 'lucide-react';
import { useFinance } from '../context/FinanceContext';
import { format } from 'date-fns';

export const TransactionList = ({ onAddClick }: { onAddClick: () => void }) => {
  const { 
    filteredTransactions, 
    searchQuery, 
    setSearchQuery, 
    filterType, 
    setFilterType,
    sortBy,
    setSortBy,
    sortOrder,
    setSortOrder,
    deleteTransaction,
    role
  } = useFinance();

  const toggleSort = (key: 'date' | 'amount') => {
    if (sortBy === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(key);
      setSortOrder('desc');
    }
  };

  return (
    <div className="mt-8 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="p-6 border-bottom border-gray-50">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h3 className="text-lg font-semibold text-gray-900">Recent Transactions</h3>
          
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search transactions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-blue-500/20 transition-all w-full md:w-64"
              />
            </div>

            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value as any)}
              className="px-4 py-2 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-blue-500/20 transition-all cursor-pointer"
            >
              <option value="all">All Types</option>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>

            {role === 'admin' && (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onAddClick}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm shadow-blue-200"
              >
                <PlusCircle size={18} className="mr-2" />
                Add New
              </motion.button>
            )}
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-50/50 text-gray-500 text-xs font-semibold uppercase tracking-wider">
              <th className="px-6 py-4 cursor-pointer hover:text-gray-900 transition-colors" onClick={() => toggleSort('date')}>
                <div className="flex items-center">
                  Date
                  <ArrowUpDown size={14} className="ml-1 opacity-50" />
                </div>
              </th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Description</th>
              <th className="px-6 py-4 cursor-pointer hover:text-gray-900 transition-colors text-right" onClick={() => toggleSort('amount')}>
                <div className="flex items-center justify-end">
                  Amount
                  <ArrowUpDown size={14} className="ml-1 opacity-50" />
                </div>
              </th>
              {role === 'admin' && <th className="px-6 py-4 text-right">Actions</th>}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            <AnimatePresence mode="popLayout">
              {filteredTransactions.map((tx) => (
                <motion.tr
                  key={tx.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="group hover:bg-gray-50/50 transition-colors"
                >
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {format(new Date(tx.date), 'MMM dd, yyyy')}
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs font-medium">
                      {tx.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                    {tx.description}
                  </td>
                  <td className={`px-6 py-4 text-sm font-bold text-right ${
                    tx.type === 'income' ? 'text-emerald-600' : 'text-rose-600'
                  }`}>
                    {tx.type === 'income' ? '+' : '-'}${tx.amount.toLocaleString()}
                  </td>
                  {role === 'admin' && (
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                          title="Edit (Simulated)"
                        >
                          <PlusCircle size={18} className="rotate-45" />
                        </button>
                        <button
                          onClick={() => deleteTransaction(tx.id)}
                          className="p-2 text-gray-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  )}
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
        
        {filteredTransactions.length === 0 && (
          <div className="p-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
              <Filter className="text-gray-400" size={32} />
            </div>
            <h4 className="text-gray-900 font-semibold mb-1">No transactions found</h4>
            <p className="text-gray-500 text-sm">Try adjusting your search or filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};
