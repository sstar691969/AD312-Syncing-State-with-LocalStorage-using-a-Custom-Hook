# AD312-Syncing-State-with-LocalStorage-using-a-Custom-Hook
Assignment: Syncing State with LocalStorage using a Custom Hook


William Anderson

AD312

useLocalStorage Custom Hook – React Project



This project demonstrates a reusable React custom hook called **useLocalStorage**.  
It works like `useState`, but automatically saves and retrieves data from the browser's `localStorage`, so values persist even after page refresh.

---


- Custom React Hook (useLocalStorage)
- Persistent state using localStorage
- Automatically saves updates to browser storage
- Loads saved values on page refresh
- Built using React Hooks: useState + useEffect

---

Project Structure


src/
├── hooks/
│ └── useLocalStorage.js
├── App.jsx
├── main.jsx


---

How It Works

- On first render, the hook checks localStorage for saved data.
- If data exists, it loads it.
- If not, it uses the default initial value.
- Whenever the state changes, it automatically updates localStorage.

---

How to Run the Project

1. Install dependencies
```bash
npm install
2. Start the development server
npm run dev
3. Open in browser
http://localhost:5173


Test Cases:
Normal Cases:
Default value loads when no data exists in localStorage
Value updates when user interacts with UI
Value persists after page refresh


Edge Cases:
Empty localStorage (localStorage.clear())
App falls back to default value
Different storage keys
Each key stores independent values
Complex objects stored in localStorage
Objects are saved and restored using JSON

Technologies Used:
React
JavaScript (ES6+)
Vite
Browser localStorage API

Conclusion

This project shows how to create reusable custom React hooks and persist state using browser storage. It improves user experience by saving preferences like theme settings across sessions.
