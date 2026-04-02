# 💸 Zorvyn Finance Dashboard

A modern, responsive finance dashboard built to help users track spending, analyze financial behavior, and explore insights through intuitive visualizations.

🔗 **Live Demo:** https://finance-dashboard-zorvyn-nu.vercel.app/
📦 **Repository:** https://github.com/rivu851/finance-dashboard-zorvyn

---

## 🚀 Features

### 📊 Dashboard Overview

* Summary cards (Total Balance, Income, Expenses)
* Time-based financial trend visualization
* Category-wise spending breakdown

---

### 💳 Transactions

* View transactions with:

  * Date
  * Amount
  * Category
  * Type (Income / Expense)
* Search, filter, and sorting functionality

---

### 🔐 Role-Based UI (Simulated RBAC)

* **Viewer**

  * Read-only access
* **Admin**

  * Can add transactions
* Role switching with dynamic UI updates

---

### 📈 Insights

* Highest spending category
* Monthly comparison
* Derived financial observations

---

## 🧠 Tech Stack

* **Framework:** Next.js (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **Charts:** Recharts (or charting library used)
* **State Management:** React Context API

---

## 📁 Project Structure

```bash id="a91xkd"
finance-dashboard-zorvyn/
│
├── app/                      # Next.js app router (pages, layout)
│
├── components/
│   ├── charts/              # Chart components (line, pie, etc.)
│   ├── dashboard/           # Dashboard-specific UI components
│   ├── transactions/        # Transaction-related components
│   ├── ui/                  # Reusable UI elements
│   ├── views/               # Page-level composed views
│   └── layout/              # Layout components (header, wrappers)
│
├── context/
│   └── FinanceContext.tsx   # Global state management
│
├── hooks/
│   └── use-mobile.ts        # Custom reusable hooks
│
├── data/
│   └── mockData.ts          # Mock dataset
│
├── lib/                     # Utility functions and helpers
├── types/                   # TypeScript type definitions
│
├── styles/                  # Global styles
│
├── public/                  # Static assets
│
└── config files             # ESLint, TypeScript, etc.
```

---

## 🧩 Structure Explanation

* **components/** → Organized by feature for UI composition

* **charts/** → Contains reusable data visualization components

* **dashboard/** → Core dashboard elements (summary cards, insights, etc.)

* **transactions/** → Transaction list and related UI

* **ui/** → Generic reusable components

* **views/** → Page-level structure combining multiple components

* **context/** → Centralized state (transactions, roles, filters)

* **hooks/** → Custom reusable logic

* **data/** → Mock data simulating backend behavior

* **types/** → Strong typing for maintainability

* **lib/** → Shared utilities and helper functions

---

## 🏗️ Architecture & Approach

* Component-based architecture with **clear separation of concerns**
* State managed using **React Context API**
* UI structured by feature folders for better readability
* Mock data used to simulate real-world financial scenarios

---

## ⚙️ Getting Started

```bash id="j2l9mq"
git clone https://github.com/rivu851/finance-dashboard-zorvyn.git
cd finance-dashboard-zorvyn
npm install
npm run dev
```

---

## 🎯 Design Decisions

* Focused on **simplicity and clarity**
* Built using **mock data** for frontend-only evaluation
* Prioritized **clean UI and usability**
* Implemented **role-based UI simulation** without backend complexity

---

## 📱 Responsiveness

Fully responsive across:

* Desktop
* Tablet
* Mobile

---

## 🔄 State Management

Handled using **React Context API**, managing:

* Transactions data
* Filters and search
* Role-based UI state

---

## 🧪 Edge Case Handling

* Empty transaction states
* No results after filtering
* Safe role switching behavior

---

## ✨ Future Improvements

* Data persistence (localStorage / API integration)
* Advanced filtering (date range, grouping)
* Export functionality (CSV/JSON)
* Backend-driven RBAC
* Animations and micro-interactions

---

## 👤 Author

**Rivu Chattopadhyay**

---

## 📄 License

This project is for evaluation purposes only.
