import { useEffect, useState } from "react";

function ThemeToggle() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

 return (
  <button
    className="theme-toggle"
    onClick={toggleTheme}
    aria-label="Toggle theme"
    title="Toggle theme"
  >
    <span className="icon">
      {theme === "light" ? "🌙" : "☀️"}
    </span>
  </button>
);

}

export default ThemeToggle;
