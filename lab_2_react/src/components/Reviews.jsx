import React, { useState, useEffect } from 'react';

const VARIANT = 1; // Замініть за потреби на ваш номер за журналом
const REVIEWS_URL = `https://jsonplaceholder.typicode.com/posts/${VARIANT}/comments`;

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    const controller = new AbortController();

    async function fetchReviews() {
      try {
        const response = await fetch(REVIEWS_URL, { signal: controller.signal });
        if (!response.ok) throw new Error(`HTTP помилка! Статус: ${response.status}`);
        const data = await response.json();
        setReviews(data);
        setStatus('done');
      } catch (error) {
        if (error.name === 'AbortError') return;
        console.error('Не вдалося завантажити відгуки:', error);
        setStatus('error');
      }
    }

    fetchReviews();
    return () => controller.abort();
  }, []);

  return (
    <section id="reviews" className="my-8">
      <h2 className="text-2xl font-bold mb-4">Відгуки роботодавців</h2>
      
      {status === 'loading' && <p className="text-gray-500">Завантаження відгуків...</p>}
      
      {status === 'error' && (
        <p className="text-red-500 font-semibold">
          Помилка: не вдалося завантажити відгуки. Перевірте з'єднання.
        </p>
      )}

      {status === 'done' && (
        <div className="space-y-4">
          <p className="text-xs text-gray-500">Отримано відгуків: {reviews.length}</p>
          <div className="grid gap-4">
            {reviews.map(review => (
              <div 
                key={review.id} 
                className="p-4 border rounded-lg shadow-sm bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 transition-all hover:shadow-md"
              >
                <h3 className="font-semibold text-lg text-blue-600 dark:text-blue-400">
                  {review.name}
                </h3>
                <a href={`mailto:${review.email}`} className="text-xs text-gray-500 hover:underline">
                  {review.email}
                </a>
                <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  {review.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default Reviews;