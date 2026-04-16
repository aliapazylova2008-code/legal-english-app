import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
  const router = useRouter();
  
  const navItems = [
    { name: 'Главная', path: '/' },
    { name: 'Словарь', path: '/dictionary' },
    { name: 'Практика', path: '/practice' },
    { name: 'Профиль', path: '/profile' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-900 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold">Legal English for Russian Lawyers</h1>
          <nav className="mt-4">
            <ul className="flex space-x-6">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`hover:text-blue-200 transition ${
                      router.pathname === item.path ? 'border-b-2 border-white pb-1' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      
      <footer className="bg-gray-200 py-4 text-center text-gray-600 text-sm">
        © 2025 Legal English App — для юристов и студентов
      </footer>
    </div>
  );
}
