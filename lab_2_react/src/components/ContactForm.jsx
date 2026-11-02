import React, { useState, useEffect } from 'react';

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mnpponqq";
const OPEN_DELAY = 60000; // 1 хвилина
const SHOWN_KEY = "feedbackShown";

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SHOWN_KEY)) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem(SHOWN_KEY, "true");
    }, OPEN_DELAY);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem(SHOWN_KEY, "true");
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button 
          onClick={handleClose} 
          className="absolute top-3 right-3 text-gray-500 hover:text-black dark:hover:text-white font-bold"
          aria-label="Закрити"
        >
          ✕
        </button>
        <h2 className="text-xl font-bold mb-2">Зворотний зв'язок</h2>
        <p className="text-xs text-gray-500 mb-4">Напишіть мені повідомлення, і воно прийде на пошту.</p>
        
        <form action={FORMSPREE_ENDPOINT} method="POST" className="contact-form">
          <input type="text" name="name" placeholder="Ваше ім'я" required />
          <input type="email" name="email" placeholder="Ваш Email" required />
          <input type="tel" name="phone" placeholder="Номер телефону" required />
          <textarea name="message" placeholder="Текст повідомлення" required rows="4"></textarea>
          <div className="flex justify-end gap-2 mt-2">
            <button type="button" onClick={handleClose} className="bg-gray-400 hover:bg-gray-500 text-white">
              Закрити
            </button>
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
              Надіслати
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;