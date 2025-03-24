import Image from 'next/image';

const activities = [
  { name: "Hiking", img: "/imgs/hiking.jpg", desc: "Explore scenic trails and breathtaking views." },
  { name: "Bird Watching", img: "/imgs/birdwatching.jpg", desc: "Discover rare and beautiful bird species." },
  { name: "Cycling", img: "/imgs/cycling.jpg", desc: "Ride through stunning landscapes and nature trails." },
  { name: "Kayaking", img: "/imgs/kayaking.jpg", desc: "Paddle through serene waters and enjoy the view." },
  { name: "Campfire Cooking", img: "/imgs/campfire.jpg", desc: "Enjoy delicious meals cooked over an open fire." },
  { name: "Swimming", img: "/imgs/swimming.jpg", desc: "Cool off in natural lakes and rivers." },
  { name: "Slacklining", img: "/imgs/slacklining.jpg", desc: "Test your balance and have fun on a slackline." },
];

export default function Activities() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      
      <div className="border-2 border-green-600 bg-green-200 p-5 rounded-md shadow-md w-fit mb-6">
        <h1 className="text-3xl font-bold text-green-700">Camp Activities</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {activities.map((act, index) => (
          <div key={index} className="bg-white p-4 shadow-lg rounded-lg border border-gray-300 text-center">
            
            <h2 className="text-xl font-bold text-green-700 mb-3">{act.name}</h2>
            
            <Image src={act.img} alt={act.name} width={300} height={200} className="rounded-md mx-auto" />
            
            <p className="text-gray-600 mt-2">{act.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}