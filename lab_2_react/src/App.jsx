import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import './App.css';

function getThemeByTime() {
  const hours = new Date().getHours();
  return hours >= 7 && hours < 21 ? 'light' : 'dark';
}

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    setTheme(getThemeByTime());
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    document.body.className = `${theme}-mode`;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="min-h-screen px-4 max-w-4xl mx-auto transition-colors duration-300">
      <header className="flex justify-between items-center py-6 border-b border-gray-300 dark:border-gray-700 mb-6">
        <h1 className="text-xl font-bold">Резюме | Лабораторна №4</h1>
        <button 
          onClick={toggleTheme}
          className="px-4 py-2 border rounded-md text-sm font-semibold transition-all hover:opacity-80"
        >
          {theme === 'dark' ? '☀️ Денна тема' : '🌙 Нічна тема'}
        </button>
      </header>

      <main>
        <Header />
        <Experience />
        <Education />
        <Reviews />
      </main>

      <Footer />
      <ContactForm />
    </div>
  );
}

export default App;