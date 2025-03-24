import Banner from '@/components/Banner';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center">
      <Banner />

      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-6xl mt-10">
        <div className="bg-white p-6 border-4 border-[rgb(231,158,56)] rounded-lg shadow-lg w-full md:w-2/5">
          <h1 className="text-4xl font-bold text-[rgb(231,158,56)]">Welcome to the Camp!</h1>
          <p className="text-gray-600 mt-3">Explore nature and enjoy outdoor activities. Take a look at what we have to offer you by clicking the button below.</p>

          <Link href="/activities">
            <button className="mt-7 px-6 py-3 bg-[rgb(231,158,56)] text-white rounded-lg shadow-lg hover:bg-[rgb(140,96,34)]">
              View Activities
            </button>
          </Link>
        </div>

      </div>
    </main>
  );
}