import React from 'react';
import { Users } from 'lucide-react';

const AccountsView: React.FC = () => (
  <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm text-center">
    <Users size={48} className="mx-auto text-purple-500 mb-4" />
    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Connected Accounts</h2>
    <p className="text-gray-500 dark:text-gray-400">Manage your bank accounts, credit cards, and wallets here.</p>
  </div>
);

export default AccountsView;