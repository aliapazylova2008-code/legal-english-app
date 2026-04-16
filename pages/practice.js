import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import words from '../data/words.json';

export default function Practice() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [category, setCategory] = useState('Все');
  const [practiceWords, setPracticeWords] = useState(words);
  
  useEffect(() => {
    const filtered = category === 'Все' 
      ? words 
      : words.filter(w => w.category === category);
    setPracticeWords(filtered);
    setCurrentIndex(0);
    setShowAnswer(false);
  }, [category]);
  
  const currentWord = practiceWords[currentIndex];
  
  const handleNext = () => {
    setShowAnswer(false);
    setCurrentIndex((prev) => (prev + 1) % practiceWords.length);
  };
  
  const handlePrev = () => {
    setShowAnswer(false);
    setCurrentIndex((prev) => (prev - 1 + practiceWords.length) % practiceWords.length);
  };
  
  if (practiceWords.length === 0) {
    return (
      <Layout>
        <p className="text-center text-gray-500">Нет слов в этой категории</p>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="max-w-2xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center">🎯 Практика</h2>
        
        <div className="flex justify-center">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-4 py-2 border rounded-lg bg-white"
          >
            <option value="Все">Все категории</option>
            {[...new Set(words.map(w => w.category))].map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 min-h-[400px] flex flex-col items-center justify-center">
          <div className="text-center">
            <p className="text-gray-500 text-sm mb-4">
              {currentIndex + 1} / {practiceWords.length}
            </p>
            <h3 className="text-4xl font-bold text-gray-800 mb-6">
              {currentWord.ru}
            </h3>
            
            {!showAnswer ? (
              <button
                onClick={() => setShowAnswer(true)}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
              >
                Показать перевод
              </button>
            ) : (
              <div className="space-y-4">
                <p className="text-2xl text-green-600 font-semibold">
                  {currentWord.en}
                </p>
                <p className="text-gray-600 text-sm">
                  {currentWord.explanation_ru}
                </p>
                {currentWord.note && (
                  <p className="text-gray-500 text-xs italic">
                    📌 {currentWord.note}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
        
        <div className="flex justify-between gap-4">
          <button
            onClick={handlePrev}
            className="flex-1 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
          >
            ← Назад
          </button>
          <button
            onClick={handleNext}
            className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Дальше →
          </button>
        </div>
      </div>
    </Layout>
  );
}
