import { useEffect, useMemo, useState } from 'react';

const enableDarkMode = () => {
  document.body.classList.add('darkMode');

  localStorage.setItem('darkMode', 'ENABLED');
};
const disableDarkMode = () => {
  document.body.classList.remove('darkMode');

  localStorage.setItem('darkMode', 'DISABLED');
};

const handleClick = (darkMode: string | null) => {
  if (darkMode !== 'ENABLED') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
};

const toggleHTMLDarkModeClass = (enabled: boolean) => {
  const htmlElement = document.getElementsByTagName('html')[0];

  if (enabled) {
    htmlElement.classList.add('dark');
  } else {
    htmlElement.classList.remove('dark');
  }
};

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const localDark = localStorage.getItem('darkMode');
    const initialDarkMode =
      localDark !== null
        ? localDark === 'true'
        : window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(initialDarkMode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((d) => !d);
  };

  useEffect(() => {
    toggleHTMLDarkModeClass(darkMode);
    localStorage.setItem('darkMode', darkMode ? 'true' : 'false');
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
