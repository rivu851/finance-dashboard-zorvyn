# 💸 Zorvyn Finance Dashboard

A modern, responsive finance dashboard designed to help users track financial activity, analyze spending patterns, and gain actionable insights through intuitive visualizations.

🔗 **Live Demo:** https://finance-dashboard-zorvyn-nu.vercel.app/
📦 **Repository:** https://github.com/rivu851/finance-dashboard-zorvyn

---

## 📌 Project Overview

This project was built as part of a frontend assignment to demonstrate the ability to design and implement a clean, interactive finance dashboard UI.

The application focuses on:

* Presenting financial data clearly
* Enabling transaction exploration
* Simulating role-based UI behavior
* Delivering a responsive and user-friendly experience

---

## 🚀 Features (Mapped to Assignment Requirements)

### ✅ 1. Dashboard Overview

* Summary cards:

  * Total Balance
  * Income
  * Expenses
* Time-based visualization (financial trends)
* Category-based visualization (spending breakdown)

---

### ✅ 2. Transactions Section

* Transaction list displaying:

  * Date
  * Amount
  * Category
  * Type (Income / Expense)
* Features implemented:

  * Search
  * Filtering
  * Sorting

---

### ✅ 3. Role-Based UI (Simulated RBAC)

* Viewer:

  * Read-only access
* Admin:

  * Ability to add transactions
* Role switching dynamically updates UI behavior

---

### ✅ 4. Insights Section

* Highest spending category
* Monthly comparisons
* Derived insights from transaction data

---

### ✅ 5. State Management

* Centralized using React Context API
* Handles:

  * Transactions data
  * Filters
  * Role state

---

### ✅ 6. UI & UX

* Clean and readable design
* Fully responsive across devices
* Handles empty and filtered states gracefully

---

## 🧠 Tech Stack

* **Framework:** Next.js (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **Charts:** Recharts (or chart library used)
* **State Management:** React Context API

---

## 📁 Project Structure

```bash
finance-dashboard-zorvyn/
│
├── app/                      # Next.js app router
│
├── components/
│   ├── charts/              # Data visualization components
│   ├── dashboard/           # Dashboard UI components
│   ├── transactions/        # Transaction components
│   ├── ui/                  # Reusable UI elements
│   ├── views/               # Page-level compositions
│   └── layout/              # Layout components
│
├── context/
│   └── FinanceContext.tsx   # Global state management
│
├── hooks/                   # Custom hooks
├── data/                    # Mock data
├── lib/                     # Utility functions
├── types/                   # TypeScript types
├── styles/                  # Global styles
├── public/                  # Static assets
│
└── config files             # ESLint, TSConfig, etc.
```

---

## 🧩 Architecture & Approach

* Component-based architecture with separation of concerns
* State managed using React Context API
* Feature-specific components grouped logically
* Mock data used to simulate real-world financial data

---

## ⚙️ Getting Started

```bash
git clone https://github.com/rivu851/finance-dashboard-zorvyn.git
cd finance-dashboard-zorvyn
npm install
npm run dev
```

---

## 📸 Screenshots

> *(Add screenshots here for maximum impact — highly recommended)*

### Dashboard Overview

![Dashboard Screenshot](./public/screenshots/dashboard.png)

### Transactions View

![Transactions Screenshot](./public/screenshots/transactions.png)

### Insights Section

![Insights Screenshot](./public/screenshots/insights.png)

---

## 📱 Responsiveness

* Desktop
* Tablet
* Mobile

Fully optimized for all screen sizes.

---

## 🧪 Edge Case Handling

* Empty transaction state
* No results after filtering
* Safe role switching behavior

---

## ✨ Future Improvements

* Data persistence (localStorage / API integration)
* Advanced filtering (date ranges, grouping)
* Export functionality (CSV/JSON)
* Backend-based RBAC
* Animations and micro-interactions

---

## 👤 Author

**Rivu Chattopadhyay**

---

## 📄 License

This project is for evaluation purposes only.
