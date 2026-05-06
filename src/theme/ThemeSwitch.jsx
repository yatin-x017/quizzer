"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import "./theme.css";

const ThemeSwitch = () => {
  const [checked, setChecked] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // On mount, check localStorage for theme
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setChecked(true);
      document.documentElement.classList.add("dark");
    } else {
      setChecked(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const handleCheckedChange = useCallback(
    (isChecked) => {
      setChecked(isChecked);
      if (isChecked) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    },
    []
  );

  if (!mounted) return null;

  return (
    <div className="theme-switch-root">
      <label className="theme-switch">
        <input
          type="checkbox"
          checked={checked}
          onChange={e => handleCheckedChange(e.target.checked)}
        />
        <span className="slider">
          {checked ? <MoonIcon size={16} /> : <SunIcon size={16} />}
        </span>
      </label>
    </div>
  );
};

export default ThemeSwitch;
