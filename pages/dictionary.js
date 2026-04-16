import { useState } from 'react';
import Layout from '../components/Layout';
import words from '../data/words.json';

export default function Dictionary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Все');
  
  const categories = ['Все', ...new Set(words.map(w => w.category))];
  
  const filteredWords = words.filter(word => {
    const matchesSearch = word.ru.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          word.en.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Все' || word.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-800">📖 Словарь</h2>
        
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Поиск по русскому или английскому..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        
        <div className="space-y-3">
          {filteredWords.map((word) => (
            <div key={word.id} className="bg-white rounded-lg shadow p-5 hover:shadow-md transition">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{word.ru}</h3>
                  <p className="text-lg text-blue-600 font-semibold mt-1">{word.en}</p>
                  <p className="text-gray-600 mt-2 text-sm">{word.explanation_ru}</p>
                  {word.note && (
                    <p className="text-gray-500 mt-2 text-sm italic border-l-3 border-gray-300 pl-3">
                      📌 {word.note}
                    </p>
                  )}
                </div>
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs">
                  {word.category}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {filteredWords.length === 0 && (
          <p className="text-center text-gray-500 py-8">Ничего не найдено</p>
        )}
      </div>
    </Layout>
  );
}
