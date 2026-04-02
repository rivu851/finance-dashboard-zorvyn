'use client';

import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { Transaction, UserRole, TransactionType, FinanceState } from '../types';
import { MOCK_TRANSACTIONS } from '../data/mockData';

interface FinanceContextType extends FinanceState {
  setRole: (role: UserRole) => void;
  addTransaction: (transaction: Omit<Transaction, 'id'>) => void;
  setSearchQuery: (query: string) => void;
  setFilterType: (type: TransactionType | 'all') => void;
  setSortBy: (sortBy: 'date' | 'amount') => void;
  setSortOrder: (order: 'asc' | 'desc') => void;
  deleteTransaction: (id: string) => void;
  filteredTransactions: Transaction[];
  stats: {
    totalBalance: number;
    totalIncome: number;
    totalExpenses: number;
    highestCategory: string;
  };
}

const FinanceContext = createContext<FinanceContextType | undefined>(undefined);

export function FinanceProvider({ children }: { children: React.ReactNode }) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [role, setRole] = useState<UserRole>('admin');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<TransactionType | 'all'>('all');
  const [sortBy, setSortBy] = useState<'date' | 'amount'>('date');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  // Load initial data
  useEffect(() => {
    const savedRole = localStorage.getItem('findash_role_v2');
    if (savedRole && (savedRole === 'admin' || savedRole === 'viewer')) {
      setRole(savedRole as UserRole);
    }
    
    const saved = localStorage.getItem('findash_transactions_v2');
    const data = saved ? JSON.parse(saved) : MOCK_TRANSACTIONS;
    setTimeout(() => setTransactions(data), 0);
  }, []);

  // Persist data
  useEffect(() => {
    if (transactions.length > 0) {
      localStorage.setItem('findash_transactions_v2', JSON.stringify(transactions));
    }
  }, [transactions]);
  
  useEffect(() => {
    localStorage.setItem('findash_role_v2', role);
  }, [role]);

  const addTransaction = (newTx: Omit<Transaction, 'id'>) => {
    const transaction: Transaction = {
      ...newTx,
      id: Math.random().toString(36).substr(2, 9),
    };
    setTransactions((prev) => [transaction, ...prev]);
  };

  const deleteTransaction = (id: string) => {
    setTransactions((prev) => prev.filter((tx) => tx.id !== id));
  };

  const filteredTransactions = useMemo(() => {
    return transactions
      .filter((tx) => {
        const matchesSearch = tx.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tx.category.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesType = filterType === 'all' || tx.type === filterType;
        return matchesSearch && matchesType;
      })
      .sort((a, b) => {
        if (sortBy === 'date') {
          const dateA = new Date(a.date).getTime();
          const dateB = new Date(b.date).getTime();
          return sortOrder === 'desc' ? dateB - dateA : dateA - dateB;
        } else {
          return sortOrder === 'desc' ? b.amount - a.amount : a.amount - b.amount;
        }
      });
  }, [transactions, searchQuery, filterType, sortBy, sortOrder]);

  const stats = useMemo(() => {
    const totalIncome = transactions
      .filter((tx) => tx.type === 'income')
      .reduce((acc, tx) => acc + tx.amount, 0);
    const totalExpenses = transactions
      .filter((tx) => tx.type === 'expense')
      .reduce((acc, tx) => acc + tx.amount, 0);

    const categoryMap: Record<string, number> = {};
    transactions
      .filter(tx => tx.type === 'expense')
      .forEach(tx => {
        categoryMap[tx.category] = (categoryMap[tx.category] || 0) + tx.amount;
      });

    const highestCategory = Object.entries(categoryMap).sort((a, b) => b[1] - a[1])[0]?.[0] || 'N/A';

    return {
      totalBalance: totalIncome - totalExpenses,
      totalIncome,
      totalExpenses,
      highestCategory,
    };
  }, [transactions]);

  return (
    <FinanceContext.Provider
      value={{
        transactions,
        role,
        searchQuery,
        filterType,
        sortBy,
        sortOrder,
        setRole,
        addTransaction,
        setSearchQuery,
        setFilterType,
        setSortBy,
        setSortOrder,
        deleteTransaction,
        filteredTransactions,
        stats,
      }}
    >
      {children}
    </FinanceContext.Provider>
  );
}

export function useFinance() {
  const context = useContext(FinanceContext);
  if (context === undefined) {
    throw new Error('useFinance must be used within a FinanceProvider');
  }
  return context;
}
