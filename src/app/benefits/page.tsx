import Image from 'next/image';

const benefits = [
  { name: "Helps Relieve Stress", img: "/imgs/stress-relief.jpg", desc: "Camping helps reduce stress and improves mental health." },
  { name: "Learn New Skills", img: "/imgs/learn-skills.jpg", desc: "Outdoor activities help you learn survival skills and self-sufficiency." },
  { name: "Great Family Activity", img: "/imgs/family-camping.jpg", desc:  "Camping is a great way to bond with family and create memories." },
  { name: "Inexpensive Vacation", img: "/imgs/budget-travel.jpg", desc: "A budget-friendly way to enjoy a vacation close to nature." },
  { name: "Social or Secluded", img: "/imgs/social-secluded.jpg", desc: "You can camp alone for solitude or with friends for socializing." },
];

export default function Benefits() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      {/* Benefits Header */}
      <div className="border-2 border-blue-600 bg-blue-200 p-5 rounded-md shadow-md w-fit mb-6">
        <h1 className="text-3xl font-bold text-blue-700">Benefits of Camping</h1>
      </div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-white p-4 shadow-lg rounded-lg border border-gray-300 text-center">
            <h2 className="text-xl font-bold text-blue-700 mb-3">{benefit.name}</h2>
            <Image src={benefit.img} alt={benefit.name} width={300} height={200} className="rounded-md mx-auto" />
            <p className="text-gray-600 mt-2">{benefit.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}