import { Transaction } from '../types';
import { subDays, subMonths } from 'date-fns';

const now = new Date();

export const MOCK_TRANSACTIONS: Transaction[] = [
  // Month -6: Net 2500
  {
    id: 'm6-1',
    amount: 2500,
    category: 'Salary',
    type: 'income',
    date: subMonths(now, 6).toISOString(),
    description: 'Monthly Salary',
  },
  
  // Month -5: Net +1500 (Balance: 4000)
  {
    id: 'm5-1',
    amount: 2500,
    category: 'Salary',
    type: 'income',
    date: subMonths(now, 5).toISOString(),
    description: 'Monthly Salary',
  },
  {
    id: 'm5-2',
    amount: 1000,
    category: 'Rent',
    type: 'expense',
    date: subDays(subMonths(now, 5), -2).toISOString(),
    description: 'Rent Payment',
  },

  // Month -4: Net +0 (Balance: 4000)
  {
    id: 'm4-1',
    amount: 2500,
    category: 'Salary',
    type: 'income',
    date: subMonths(now, 4).toISOString(),
    description: 'Monthly Salary',
  },
  {
    id: 'm4-2',
    amount: 2000,
    category: 'Shopping',
    type: 'expense',
    date: subDays(subMonths(now, 4), -5).toISOString(),
    description: 'New Electronics',
  },
  {
    id: 'm4-3',
    amount: 500,
    category: 'Transport',
    type: 'expense',
    date: subDays(subMonths(now, 4), -8).toISOString(),
    description: 'Car Repairs',
  },

  // Month -3: Net +1000 (Balance: 5000)
  {
    id: 'm3-1',
    amount: 2500,
    category: 'Salary',
    type: 'income',
    date: subMonths(now, 3).toISOString(),
    description: 'Monthly Salary',
  },
  {
    id: 'm3-2',
    amount: 1500,
    category: 'Rent',
    type: 'expense',
    date: subDays(subMonths(now, 3), -10).toISOString(),
    description: 'Rent & Utilities',
  },

  // Month -2: Net -1000 (Balance: 4000)
  {
    id: 'm2-1',
    amount: 2500,
    category: 'Salary',
    type: 'income',
    date: subMonths(now, 2).toISOString(),
    description: 'Monthly Salary',
  },
  {
    id: 'm2-2',
    amount: 3500,
    category: 'Travel',
    type: 'expense',
    date: subDays(subMonths(now, 2), -15).toISOString(),
    description: 'Vacation Flights',
  },

  // Month -1: Net +1400 (Balance: 5400)
  {
    id: 'm1-1',
    amount: 2500,
    category: 'Salary',
    type: 'income',
    date: subMonths(now, 1).toISOString(),
    description: 'Monthly Salary',
  },
  {
    id: 'm1-2',
    amount: 1100,
    category: 'Entertainment',
    type: 'expense',
    date: subDays(subMonths(now, 1), -4).toISOString(),
    description: 'Concert Tickets',
  },

  // Month 0 (Current): Net +1600 (Balance: 7000)
  {
    id: 'm0-1',
    amount: 2500,
    category: 'Salary',
    type: 'income',
    date: subDays(now, 6).toISOString(),
    description: 'Monthly Salary',
  },
  {
    id: 'm0-2',
    amount: 900,
    category: 'Food',
    type: 'expense',
    date: subDays(now, 2).toISOString(),
    description: 'Groceries & Dining',
  }
];
