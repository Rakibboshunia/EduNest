import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  const [colorTheme, setColorTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem("colorTheme");
      if (stored) return JSON.parse(stored);
    }
    return { name: "Default Blue", from: "#0f3b73", to: "#1e40af", secondary: "#36833b" };
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const root = window.document.documentElement;
    root.style.setProperty('--brand-primary', colorTheme.from);
    root.style.setProperty('--brand-primary-light', colorTheme.to);
    if (colorTheme.secondary) {
      root.style.setProperty('--brand-secondary', colorTheme.secondary);
    } else {
      // Create a complementary secondary color or just use the light version
      root.style.setProperty('--brand-secondary', colorTheme.to);
    }
    localStorage.setItem("colorTheme", JSON.stringify(colorTheme));
  }, [colorTheme]);

  const toggleTheme = () => {
    setTheme(prev => prev === "light" ? "dark" : "light");
  };

  const setDarkMode = (isDark) => {
    setTheme(isDark ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setDarkMode, isDark: theme === "dark", colorTheme, setColorTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
