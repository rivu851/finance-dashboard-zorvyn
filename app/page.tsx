'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FinanceProvider } from '../context/FinanceContext';
import { SummaryCards } from '../components/SummaryCards';
import { ChartsSection } from '../components/ChartsSection';
import { TransactionList } from '../components/TransactionList';
import { InsightsSection, RoleToggle } from '../components/InsightsAndRole';
import { AddTransactionModal } from '../components/AddTransactionModal';
import { Bell, LayoutDashboard, CreditCard, PieChart, Users, Settings, HelpCircle } from 'lucide-react';

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <FinanceProvider>
      <div className="min-h-screen bg-[#F8F9FB] flex">
        {/* Sidebar */}
        <aside className="hidden lg:flex w-64 bg-white border-r border-gray-100 flex-col p-6 fixed h-full">
          <div className="flex items-center space-x-3 mb-10 px-2">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-200">
              F
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">FinDash</span>
          </div>

          <nav className="flex-1 space-y-2">
            {[
              { icon: LayoutDashboard, label: 'Overview', active: true },
              { icon: CreditCard, label: 'Transactions' },
              { icon: PieChart, label: 'Analytics' },
              { icon: Users, label: 'Accounts' },
              { icon: Settings, label: 'Settings' },
            ].map((item) => (
              <button
                key={item.label}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  item.active 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="mt-auto pt-6 border-t border-gray-50">
            <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-all">
              <HelpCircle size={20} />
              <span>Support</span>
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-64 p-4 md:p-8 lg:p-10">
          <header className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
            <div>
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-3xl font-bold text-gray-900 tracking-tight"
              >
                Dashboard
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="text-gray-500 mt-1"
              >
                Welcome back! Here&apos;s what&apos;s happening with your money.
              </motion.p>
            </div>

            <div className="flex items-center space-x-4">
              <RoleToggle />
              <div className="flex items-center space-x-2">
                <button className="p-2.5 bg-white border border-gray-100 rounded-xl text-gray-500 hover:text-gray-900 hover:shadow-sm transition-all">
                  <Bell size={20} />
                </button>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-600 p-0.5 shadow-md">
                  <div className="w-full h-full rounded-[10px] bg-white flex items-center justify-center text-sm font-bold text-blue-600">
                    JD
                  </div>
                </div>
              </div>
            </div>
          </header>

          <div className="max-w-7xl mx-auto space-y-8">
            <SummaryCards />
            
            <ChartsSection />
            
            <InsightsSection />

            <TransactionList onAddClick={() => setIsModalOpen(true)} />
          </div>

          <footer className="mt-12 text-center text-gray-400 text-sm">
            &copy; 2024 FinDash Premium Dashboard. All rights reserved.
          </footer>
        </main>

        <AddTransactionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </FinanceProvider>
  );
}
