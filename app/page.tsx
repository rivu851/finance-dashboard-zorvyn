'use client';

import React, { useState } from 'react';
import { FinanceProvider } from '../context/FinanceContext';
import { AddTransactionModal } from '../components/AddTransactionModal';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import MainContent from '../components/MainContent';

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Overview');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <FinanceProvider>
      <div className="min-h-screen bg-[#F8F9FB] dark:bg-gray-900 flex text-gray-900 dark:text-white">

        {/* Mobile Menu Backdrop */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Sidebar */}
        <Sidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />

        {/* Main Content */}
        <main className="flex-1 lg:ml-64 p-4 md:p-8 lg:p-10 w-full overflow-x-hidden">
          <Header activeTab={activeTab} setIsMobileMenuOpen={setIsMobileMenuOpen} />

          <MainContent
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            setIsModalOpen={setIsModalOpen}
          />

          <footer className="mt-12 text-center text-gray-400 text-sm">
            &copy; 2026 FinDash Premium Dashboard. All rights reserved.
          </footer>
        </main>

        <AddTransactionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </FinanceProvider>
  );
}
