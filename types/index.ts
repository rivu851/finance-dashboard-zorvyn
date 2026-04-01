export type TransactionType = 'income' | 'expense';

export interface Transaction {
  id: string;
  amount: number;
  category: string;
  type: TransactionType;
  date: string;
  description: string;
}

export type UserRole = 'viewer' | 'admin';

export interface FinanceState {
  transactions: Transaction[];
  role: UserRole;
  searchQuery: string;
  filterType: TransactionType | 'all';
  sortBy: 'date' | 'amount';
  sortOrder: 'asc' | 'desc';
}
