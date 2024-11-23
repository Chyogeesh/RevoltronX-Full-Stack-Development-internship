import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold">Welcome to Smart Yoga</h1>
      <p className="mt-4 text-lg">Discover the best yoga products for your journey.</p>
      <Link href="/products">
        <button className="mt-6 px-6 py-3 bg-green-500 text-white rounded">
          Shop Now
        </button>
      </Link>
    </div>
  );
}
