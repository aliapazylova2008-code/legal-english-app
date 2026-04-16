import Layout from '../components/Layout';
import words from '../data/words.json';

export default function Profile() {
  const categories = [...new Set(words.map(w => w.category))];
  
  const wordsByCategory = categories.map(cat => ({
    name: cat,
    count: words.filter(w => w.category === cat).length
  }));
  
  return (
    <Layout>
      <div className="max-w-2xl mx-auto space-y-8">
        <h2 className="text-3xl font-bold text-gray-800">👤 Профиль</h2>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold mb-4">Ваш прогресс</h3>
          <div className="space-y-4">
            <div>
              <p className="text-gray-600">Всего слов в словаре</p>
              <p className="text-3xl font-bold text-blue-600">{words.length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold mb-4">📂 Слова по категориям</h3>
          <div className="space-y-2">
            {wordsByCategory.map(cat => (
              <div key={cat.name} className="flex justify-between items-center">
                <span className="text-gray-700">{cat.name}</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                  {cat.count} слов
                </span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="font-semibold mb-2">💡 Совет</h3>
          <p className="text-gray-700 text-sm">
            Практикуйтесь каждый день по 10-15 минут. Используйте карточки в разделе "Практика" — 
            там показан только основной перевод, чтобы не путаться.
          </p>
        </div>
      </div>
    </Layout>
  );
}
