'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="p-2.5 bg-white border border-gray-100 rounded-xl text-gray-500 hover:text-gray-900 hover:shadow-sm transition-all dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-gray-100 w-10 h-10 flex items-center justify-center">
        <div className="w-5 h-5 opacity-0" />
      </button>
    );
  }

  const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="p-2.5 bg-white border border-gray-100 rounded-xl text-gray-500 hover:text-gray-900 hover:shadow-sm transition-all dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-gray-100 flex items-center justify-center"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
