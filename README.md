You are a senior frontend engineer and UI/UX designer.

Build a modern, visually stunning Finance Dashboard web application using the following stack:

* Next.js (App Router)
* TypeScript
* Tailwind CSS
* Framer Motion (for animations)
* Recharts (for data visualization)
* Lucide React (for icons)

The design must use a LIGHT THEME only and should look premium, clean, and highly polished — similar to modern fintech apps like Stripe, Revolut, or Linear dashboards.

---

🎯 CORE OBJECTIVE:
Create a beautiful, interactive finance dashboard that demonstrates strong UI/UX design, clean component architecture, smooth animations, and excellent state management.

This is NOT just functional — it must feel delightful and impressive.

---

🎨 DESIGN REQUIREMENTS:

* Use a clean light theme with soft neutral backgrounds (off-white, light gray)
* Use a primary accent color (blue or teal gradient preferred)
* Apply subtle shadows, rounded corners (2xl), and spacing for a premium feel
* Maintain strong visual hierarchy and readability
* Use consistent padding, margins, and typography scale
* Use modern card-based layout
* Ensure full responsiveness (mobile, tablet, desktop)

---

✨ ANIMATION REQUIREMENTS (VERY IMPORTANT):

Use Framer Motion extensively but tastefully:

* Smooth page and component entry animations (fade + slide)
* Staggered animations for cards and lists
* Hover effects on cards (scale + shadow elevation)
* Button interactions (tap scale, ripple feel)
* Animated number counters for financial values
* Smooth transitions for filtering and sorting
* Chart animations on load
* Role switching animation (UI changes smoothly)

Animations should feel smooth, fast, and premium — NOT excessive.

---

📊 FEATURES TO IMPLEMENT:

1. DASHBOARD OVERVIEW:

* Summary cards:

  * Total Balance
  * Total Income
  * Total Expenses
* Cards should include icons, subtle gradients, and animated values
* Include:

  * Line chart (balance over time)
  * Pie chart (expense categories)

2. TRANSACTIONS SECTION:

* Table or card-based list of transactions
* Fields:

  * Date
  * Amount
  * Category
  * Type (income/expense)
* Features:

  * Search input with debounce
  * Filter (income/expense)
  * Sort (date/amount)
* Smooth animation when filtering/sorting

3. ROLE-BASED UI:

* Toggle between:

  * Viewer
  * Admin
* Viewer:

  * Can only view data
* Admin:

  * Can add transactions via modal form
* Animate UI transitions when role changes

4. ADD TRANSACTION MODAL:

* Animated modal using Framer Motion
* Form fields:

  * Amount
  * Category
  * Type
  * Date
* Clean validation and UX

5. INSIGHTS SECTION:

* Show:

  * Highest spending category
  * Monthly comparison
  * Total expense percentage
* Display as cards with icons and subtle animations

---

🧠 STATE MANAGEMENT:

* Use React Context API with TypeScript
* Manage:

  * Transactions
  * Role
  * Filters
* Keep logic clean and modular

---

📁 PROJECT STRUCTURE:

Use clean scalable structure:

app/
components/
context/
data/
utils/

---

📦 DATA:

* Use mock data (no backend required)
* Optionally persist data in localStorage

---

📱 RESPONSIVENESS:

* Mobile-first design
* Use grid layouts:

  * 1 column (mobile)
  * 2–3 columns (desktop)
* Ensure tables are scrollable or adaptive

---

💎 EXTRA POLISH (IMPORTANT FOR SELECTION):

* Empty state UI (no transactions)
* Loading skeletons
* Subtle micro-interactions
* Clean scrollbar styling
* Smooth hover states everywhere

---

📝 CODE QUALITY:

* Use TypeScript properly (types/interfaces)
* Use reusable components
* Keep code modular and clean
* Follow best practices for Next.js App Router

---

🎯 FINAL GOAL:

The final UI should look like a real fintech product — elegant, modern, smooth, and visually impressive enough to stand out immediately to recruiters.

Focus on clarity, beauty, and interaction quality.

---

Generate complete working code with all components and clear structure.
