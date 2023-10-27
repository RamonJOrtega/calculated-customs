import { useEffect, useState } from 'react';

const toggleHTMLDarkModeClass = (enabled: boolean) => {
  if (enabled) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    const initialDarkMode =
      localTheme !== null
        ? localTheme === 'dark'
        : window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(initialDarkMode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((d) => !d);
  };

  useEffect(() => {
    toggleHTMLDarkModeClass(darkMode);
    localStorage.setItem('theme', darkMode ? 'light' : 'dark');
  }, [darkMode]);

  return (
    <>
      <label className={'sr-only'}>Toggle Dark Mode</label>
      <a
        href={'#'}
        aria-disabled={'true'}
        aria-label={'Toggle dark mode'}
        onClick={toggleDarkMode}
        className={'p-1 text-2xl'}
      >
        {' '}
        {/* TODO: Replace with better icons? */}
        {darkMode ? '☀️' : '🌑'}{' '}
      </a>
    </>
  );
}
