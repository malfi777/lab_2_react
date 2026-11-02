// ==========================================
// ЛАБОРАТОРНА РОБОТА №4 — ЧАСТИНА 1 (Vanilla JS)
// ==========================================

const VARIANT = 1; // Номер варіанта за журналом
const REVIEWS_URL = `https://jsonplaceholder.typicode.com/posts/${VARIANT}/comments`;
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mnpponqq";
const FEEDBACK_DELAY = 60000; // 1 хвилина (60000 мс)
const FEEDBACK_SHOWN_KEY = "feedbackShown";

// --- 1. Визначення операційної системи та браузера ---
function detectOS(ua) {
  if (/win/i.test(ua)) return "Windows";
  if (/mac/i.test(ua)) return "macOS";
  if (/linux/i.test(ua)) return "Linux";
  if (/android/i.test(ua)) return "Android";
  if (/iphone|ipad/i.test(ua)) return "iOS";
  return "Невідома ОС";
}

function detectBrowser(ua) {
  if (/edg/i.test(ua)) return "Edge";
  if (/chrome|crios/i.test(ua)) return "Chrome";
  if (/firefox|fxios/i.test(ua)) return "Firefox";
  if (/safari/i.test(ua)) return "Safari";
  return "Браузер";
}

function collectSystemInfo() {
  const ua = navigator.userAgent;
  return {
    "Операційна система": detectOS(ua),
    "Браузер": detectBrowser(ua),
    "Платформа": navigator.platform || "-",
    "Мова": navigator.language,
    "Cookies": navigator.cookieEnabled ? "увімкнені" : "вимкнені",
    "Екран": `${screen.width} x ${screen.height}`,
    "Часовий пояс": Intl.DateTimeFormat().resolvedOptions().timeZone,
    "User-Agent": ua
  };
}

// --- 2. Збереження та відображення даних у localStorage ---
function saveSystemInfo() {
  localStorage.setItem("systemInfo", JSON.stringify(collectSystemInfo()));
  localStorage.setItem("lastVisit", new Date().toLocaleString("uk-UA"));
}

function renderLocalStorage() {
  const list = document.getElementById("sysinfo-list");
  if (!list) return;
  list.replaceChildren();

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const raw = localStorage.getItem(key);
    let value;
    try {
      value = JSON.parse(raw);
    } catch {
      value = raw;
    }

    if (value !== null && typeof value === "object") {
      for (const [field, fieldValue] of Object.entries(value)) {
        const dt = document.createElement("dt");
        const dd = document.createElement("dd");
        dt.textContent = field;
        dd.textContent = fieldValue;
        list.append(dt, dd);
      }
    } else {
      const dt = document.createElement("dt");
      const dd = document.createElement("dd");
      dt.textContent = key;
      dd.textContent = value;
      list.append(dt, dd);
    }
  }
}

// --- 3. Асинхронне завантаження відгуків (Fetch API) ---
function createReviewCard({ name, email, body }) {
  const li = document.createElement("li");
  li.className = "review-card";
  li.innerHTML = `
    <strong>${name}</strong>
    <br>
    <a href="mailto:${email}">${email}</a>
    <p>${body}</p>
  `;
  return li;
}

async function loadReviews() {
  const status = document.getElementById("reviews-status");
  const list = document.getElementById("reviews-list");
  if (!list || !status) return;

  try {
    const response = await fetch(REVIEWS_URL);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const comments = await response.json();

    list.append(...comments.map(createReviewCard));
    status.textContent = `Отримано відгуків: ${comments.length}`;
    status.classList.add("is-done");
  } catch (error) {
    console.error("Не вдалося завантажити відгуки:", error);
    status.textContent = "Не вдалося завантажити відгуки. Перевірте з'єднання.";
    status.classList.add("is-error");
  }
}

// --- 4. Модальне вікно з таймером (60 секунд) ---
function initFeedback() {
  const dialog = document.getElementById("feedback");
  const closeButton = document.getElementById("feedback-close");
  if (!dialog) return;

  closeButton?.addEventListener("click", () => dialog.close());

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });

  if (sessionStorage.getItem(FEEDBACK_SHOWN_KEY)) return;

  setTimeout(() => {
    dialog.showModal();
    sessionStorage.setItem(FEEDBACK_SHOWN_KEY, "true");
  }, FEEDBACK_DELAY);
}

// --- 5. Автоматичне та ручне перемикання теми ---
function getThemeByTime(date = new Date()) {
  const hours = date.getHours();
  return hours >= 7 && hours < 21 ? "light" : "dark";
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const toggle = document.getElementById("theme-toggle");
  if (toggle) {
    const isDark = theme === "dark";
    toggle.setAttribute("aria-pressed", String(isDark));
    const label = toggle.querySelector(".theme-toggle-label");
    if (label) label.textContent = isDark ? "Денна тема" : "Нічна тема";
  }
}

function initThemeToggle() {
  const toggle = document.getElementById("theme-toggle");
  toggle?.addEventListener("click", () => {
    const current = document.documentElement.dataset.theme;
    applyTheme(current === "dark" ? "light" : "dark");
  });
  applyTheme(document.documentElement.dataset.theme || getThemeByTime());
}

// Встановлюємо тему до малювання DOM
applyTheme(getThemeByTime());

// Ініціалізація після завантаження DOM
document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  saveSystemInfo();
  renderLocalStorage();
  loadReviews();
  initFeedback();
});