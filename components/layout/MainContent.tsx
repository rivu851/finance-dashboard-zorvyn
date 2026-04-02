import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SummaryCards } from '../dashboard/SummaryCards';
import { ChartsSection } from '../charts/ChartsSection';
import { TransactionList } from '../transactions/TransactionList';
import { InsightsSection } from '../dashboard/InsightsAndRole';
import { MonthlyComparison } from '../charts/MonthlyComparison';
import { IncomeSplineChart } from '../charts/IncomeSplineChart';
import AccountsView from '../views/AccountsView';
import SettingsView from '../views/SettingsView';

interface MainContentProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  setIsModalOpen: (open: boolean) => void;
}

const MainContent: React.FC<MainContentProps> = ({ activeTab, setActiveTab, setIsModalOpen }) => {
  const renderTabContent = () => {
    switch (activeTab) {
      case 'Overview':
        return (
          <>
            <SummaryCards 
              onMonthlyComparisonClick={() => setActiveTab('Monthly Comparison')} 
              onEditTransactionsClick={() => setActiveTab('Transactions')} 
            />
            <ChartsSection />
            <InsightsSection />
            <TransactionList
              isCompact={true}
              onViewAll={() => setActiveTab('Transactions')}
              onAddClick={() => setIsModalOpen(true)}
            />
            <IncomeSplineChart />
          </>
        );
      case 'Transactions':
        return (
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm transition-colors duration-200">
            <TransactionList onAddClick={() => setIsModalOpen(true)} />
          </div>
        );
      case 'Analytics':
        return (
          <>
            <ChartsSection />
            <IncomeSplineChart />
            <InsightsSection />
          </>
        );
      case 'Monthly Comparison':
        return <MonthlyComparison />;
      case 'Accounts':
        return <AccountsView />;
      case 'Settings':
        return <SettingsView />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="space-y-8"
        >
          {renderTabContent()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default MainContent;