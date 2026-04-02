import React from 'react';
import { Settings } from 'lucide-react';

const SettingsView: React.FC = () => (
  <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm text-center">
    <Settings size={48} className="mx-auto text-gray-400 mb-4" />
    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Platform Settings</h2>
    <p className="text-gray-500">Configure your dashboard preferences and account settings.</p>
  </div>
);

export default SettingsView;