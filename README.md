
useLocalStorage Custom Hook – React Project

Assignment: Syncing State with LocalStorage using a Custom Hook

William Anderson
AD312


useLocalStorage Custom Hook – React Lab Assignment

The Scenario

Have you ever visited a website, switched it to Dark Mode, and then felt frustrated because it reset back to Light Mode the moment you refreshed the page?

To solve this problem, web developers use the browser’s built-in **localStorage API**. It allows us to store small pieces of data (such as user preferences) directly inside the browser so that the data remains even after refreshing the page.

However, writing localStorage logic inside multiple components can lead to messy and duplicated code. To improve reusability and maintainability, we create a **custom React hook called `useLocalStorage`**.

This hook behaves exactly like React’s `useState`, but automatically saves any updated value to localStorage and restores it when the page reloads.

---

What You Will Learn

- How to combine React state (`useState`) with browser storage (`localStorage`)
- How to use lazy initialization in `useState` to safely load stored data
- How to use `useEffect` to watch state changes and automatically save updates
- How to create reusable custom React hooks

---

Project Goal

Build a custom hook called **useLocalStorage** that:
- Works like `useState`
- Saves values automatically to localStorage
- Loads saved values when the app reloads
- Prevents repeated manual storage code in components

---

Project Structure

src/
├── hooks/
│ └── useLocalStorage.js
├── App.jsx
├── main.jsx


---

How It Works

1. On first render, the hook checks localStorage for an existing value.
2. If a value exists, it is loaded and used as the initial state.
3. If no value exists, a default value is used.
4. Whenever the state changes, `useEffect` automatically updates localStorage.

---

How to Run the Project
1. Install dependencies
npm install
2. Start development server
npm run dev
3. Open in browser
http://localhost:5173

3. Open in browser
http://localhost:5173

Testing Scenarios
Normal Cases
Default value loads correctly when no stored data exists
State updates correctly when user interacts with the UI
Values persist after page refresh

 Edge Cases
Empty localStorage (localStorage.clear()) resets to default value
Multiple keys store independent values
Objects can be stored and restored using JSON serialization

Technologies Used:
React
JavaScript (ES6+)
Vite
useState Hook
useEffect Hook
Browser localStorage API

Conclusion:
This project demonstrates how to build reusable React hooks and manage persistent state using localStorage. It improves user experience by ensuring preferences such as dark mode remain saved even after refreshing the page.



