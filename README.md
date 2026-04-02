# 💸 Zorvyn Finance Dashboard

A modern, responsive finance dashboard built to help users track spending, analyze financial behavior, and explore insights through intuitive visualizations.

🔗 **Live Demo:** https://finance-dashboard-zorvyn-nu.vercel.app/
📦 **Repository:** https://github.com/rivu851/finance-dashboard-zorvyn

---

## 🚀 Features

### 📊 Dashboard Overview

* Summary cards (Balance, Income, Expenses)
* Time-based financial trends
* Category-wise spending breakdown

### 💳 Transactions

* View all transactions with:

  * Date
  * Amount
  * Category
  * Type (Income/Expense)
* Search, filter, and sort functionality

### 🔐 Role-Based UI (Simulated RBAC)

* **Viewer**

  * Read-only access
* **Admin**

  * Can add transactions
* Role switching with dynamic UI updates

---

### 📈 Insights

* Highest spending category
* Monthly comparisons
* Derived financial insights from transaction data

---

## 🧠 Tech Stack

* **Framework:** Next.js (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **Charts:** Recharts (or your charting library)
* **State Management:** React Context API

---

## 📁 Project Structure

```bash id="x9k2lp"
src/
│
├── app/                      # Next.js app router (pages, layout)
│
├── features/                 # Feature-based modular architecture
│   ├── dashboard/
│   │   ├── components/       # Dashboard UI components
│   │   ├── hooks/            # Dashboard-specific logic
│   │   ├── utils/            # Helper functions
│   │   └── index.ts
│   │
│   ├── transactions/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── utils/
│   │   └── index.ts
│   │
│   ├── insights/             # Insights feature
│   └── role/                 # Role-based UI logic
│
├── shared/                   # Reusable modules across features
│   ├── components/ui/        # Generic UI components
│   ├── hooks/                # Shared hooks
│   ├── utils/                # Utility functions
│   └── types/                # Global TypeScript types
│
├── context/                  # Global state (FinanceContext)
├── data/                     # Mock data
├── lib/                      # Configs and helpers
└── styles/                   # Global styles
```

---

## 🧩 Architecture Overview

* Uses a **feature-based modular architecture**
* Each feature encapsulates its own:

  * UI components
  * Business logic
  * Utilities
* Shared logic is abstracted into `shared/`
* Global state handled via **React Context API**

---

## ⚙️ Getting Started

```bash id="1qaz9p"
git clone https://github.com/rivu851/finance-dashboard-zorvyn.git
cd finance-dashboard-zorvyn
npm install
npm run dev
```

---

## 🎯 Design Decisions

* Adopted **feature-based architecture** for scalability
* Used **mock data** to simulate backend behavior
* Focused on **clean UI and usability**
* Implemented **RBAC at UI level** for demonstration

---

## 📱 Responsiveness

Fully responsive across:

* Desktop
* Tablet
* Mobile

---

## 🔄 State Management

Managed using **React Context API**, handling:

* Transactions
* Filters and search
* Role-based UI state

---

## 🧪 Edge Case Handling

* Empty data states
* No results after filtering
* Safe role switching

---

## ✨ Future Improvements

* API integration & persistence
* Advanced filtering (date ranges, grouping)
* Export data (CSV/JSON)
* Backend-based RBAC
* Animations and UI polish

---

## 👤 Author

**Rivu Chattopadhyay**

---

## 📄 License

This project is for evaluation purposes only.
