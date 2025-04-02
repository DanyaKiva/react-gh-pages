import React, { useState, useEffect } from 'react';

const LifecycleDemo: React.FC = () => {
  const [count, setCount] = useState(0);
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    setMessages((prev) => [...prev, 'Компонент змонтовано']);
    return () => {
      setMessages((prev) => [...prev, 'Компонент демонтовано']);
    };
  }, []);

  useEffect(() => {
    setMessages((prev) => [...prev, `Компонент оновлено: лічильник = ${count}`]);
  }, [count]);

  return (
    <div>
      <h2>Демонстрація життєвого циклу</h2>
      <p>Лічильник: {count}</p>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <button
          type="button" // Додано, щоб уникнути перезавантаження сторінки
          onClick={() => setCount(count + 1)}
          style={{
            padding: '10px 20px',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s',
            position: 'static', // Змінено на static, щоб кнопка залишалася на місці
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = 'blue';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '';
          }}
        >
          Збільшити
        </button>
        <button
          onClick={() => setMessages([])}
          style={{
            padding: '10px 20px',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer',
            backgroundColor: 'red',
            color: 'white',
          }}
        >
          Знищити компонент
        </button>
      </div>
      <div>
        <h3>Повідомлення життєвого циклу:</h3>
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Page: React.FC = () => {
  return (
    <div>
      <h1></h1>
      <LifecycleDemo />
    </div>
  );
};

export default Page;
