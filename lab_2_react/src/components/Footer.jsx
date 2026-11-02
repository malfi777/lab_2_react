import React, { useState, useEffect } from 'react';

function detectOS(ua) {
  if (/win/i.test(ua)) return 'Windows';
  if (/mac/i.test(ua)) return 'macOS';
  if (/linux/i.test(ua)) return 'Linux';
  if (/android/i.test(ua)) return 'Android';
  if (/iphone|ipad/i.test(ua)) return 'iOS';
  return 'Невідома ОС';
}

function detectBrowser(ua) {
  if (/edg/i.test(ua)) return 'Edge';
  if (/chrome|crios/i.test(ua)) return 'Chrome';
  if (/firefox|fxios/i.test(ua)) return 'Firefox';
  if (/safari/i.test(ua)) return 'Safari';
  return 'Браузер';
}

function collectSystemInfo() {
  const ua = navigator.userAgent;
  return {
    'Операційна система': detectOS(ua),
    'Браузер': detectBrowser(ua),
    'Платформа': navigator.platform || '-',
    'Мова': navigator.language,
    'Cookies': navigator.cookieEnabled ? 'Увімкнені' : 'Вимкнені',
    'Екран': `${window.screen.width}x${window.screen.height}`,
    'Часовий пояс': Intl.DateTimeFormat().resolvedOptions().timeZone,
    'User-Agent': ua
  };
}

function Footer() {
  const [sysInfo, setSysInfo] = useState(null);

  useEffect(() => {
    const info = collectSystemInfo();
    localStorage.setItem('systemInfo', JSON.stringify(info));
    try {
      const stored = localStorage.getItem('systemInfo');
      setSysInfo(JSON.parse(stored));
    } catch (e) {
      console.error('Помилка зчитування localStorage', e);
    }
  }, []);

  return (
    <footer className="mt-12 border-t border-gray-300 dark:border-gray-700 pt-6 pb-8 text-sm">
      <h3 className="font-bold mb-3 text-base">Дані системного середовища (з localStorage):</h3>
      {sysInfo ? (
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 opacity-90">
          {Object.entries(sysInfo).map(([key, value]) => (
            <div key={key} className="flex flex-col">
              <dt className="font-semibold text-xs text-gray-500 dark:text-gray-400">{key}:</dt>
              <dd className="break-all">{value}</dd>
            </div>
          ))}
        </dl>
      ) : (
        <p>Завантаження даних системи...</p>
      )}
      <p className="mt-6 text-xs text-gray-400 text-center">© 2026 Мельничук Максим</p>
    </footer>
  );
}

export default Footer;