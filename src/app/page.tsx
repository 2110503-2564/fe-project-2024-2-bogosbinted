import Banner from '@/components/Banner';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center">
      <Banner />
      <div className="flex flex-col md:flex-row items-start w-full max-w-6xl mt-10 gap-6">

        <div className="bg-white p-6 border-4 border-[rgb(255,173,66)] rounded-lg shadow-lg w-full md:flex-1">
          <h1 className="text-4xl font-bold text-[rgb(234,112,29)]">Welcome to the Camp!</h1>
          <p className="text-gray-600 mt-3">
          Explore nature and enjoy outdoor activities. Take a look at what we have to offer you by clicking the button below.
          </p>
          <Link href="/activities">
            <button className="mt-7 px-6 py-3 bg-[rgb(255,173,66)] text-white rounded-lg shadow-lg hover:bg-[rgb(217,100,24)] transition">
            View Activities
            </button>
          </Link>
        </div>

        <div className="bg-white p-6 border-4 border-emerald-500 rounded-lg shadow-lg w-full md:flex-1">
          <h1 className="text-4xl font-bold text-emerald-700">What are the benefits for camping?</h1>
          <p className="text-gray-600 mt-3">
            Wonder what do you gain from camping? Find out down here.
          </p>
          <Link href="/benefits">
            <button className="mt-3 px-6 py-3 bg-emerald-500 text-white rounded-lg shadow-lg hover:bg-emerald-600">
              View Benefits
            </button>
          </Link>
        </div>

      </div>
    </main>
  );
}
