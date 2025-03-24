import Banner from '@/components/Banner';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-10 min-h-screen bg-gray-100 flex flex-col items-center">
      <Banner />

      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-6xl mt-10">
        <div className="bg-white p-6 border-4 border-green-500 rounded-lg shadow-lg w-full md:w-2/5">
          <h1 className="text-4xl font-bold text-green-700">Welcome to the Camp!</h1>
          <p className="text-gray-600 mt-3">Explore nature and enjoy outdoor activities.</p>

          <Link href="/activities">
            <button className="mt-5 px-6 py-3 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600">
              View Activities
            </button>
          </Link>
        </div>

      </div>
    </main>
  );
}