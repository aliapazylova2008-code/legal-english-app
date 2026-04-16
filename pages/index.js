import Layout from '../components/Layout';
import words from '../data/words.json';

export default function Home() {
  const categories = [...new Set(words.map(w => w.category))];
  
  return (
    <Layout>
      <div className="space-y-8">
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Добро пожаловать!</h2>
          <p className="text-gray-600 text-lg">
            Изучайте юридический английский с приложением, созданным специально для русскоязычных юристов и студентов.
          </p>
        </section>
        
        <section className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-600">
            <h3 className="text-xl font-semibold mb-2">📚 Словарь</h3>
            <p className="text-gray-600">Более {words.length} юридических терминов с переводами и подробными объяснениями.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-green-600">
            <h3 className="text-xl font-semibold mb-2">🎯 Практика</h3>
            <p className="text-gray-600">Карточки и тесты для запоминания. Только один основной перевод!</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-purple-600">
            <h3 className="text-xl font-semibold mb-2">📊 Прогресс</h3>
            <p className="text-gray-600">Отслеживайте свой прогресс и возвращайтесь к сложным словам.</p>
          </div>
        </section>
        
        <section className="bg-blue-50 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3">📖 Категории</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <span key={cat} className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm">
                {cat}
              </span>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
