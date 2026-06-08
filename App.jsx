
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);

  return (
    <div style={{ padding: "20px" }}>
      <h1>{darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}</h1>

      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle Theme
      </button>
    </div>
  );
}

export default App;
