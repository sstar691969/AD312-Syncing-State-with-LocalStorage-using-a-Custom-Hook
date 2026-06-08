
import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
  // Load saved value from localStorage on first render
  const [value, setValue] = useState(() => {
    const savedValue = localStorage.getItem(key);

    if (savedValue !== null) {
      return JSON.parse(savedValue);
    }

    return initialValue;
  });

  // Save value whenever it changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;