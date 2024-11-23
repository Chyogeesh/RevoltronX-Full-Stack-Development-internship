import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="border p-4 rounded">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
      <h3 className="mt-2 text-xl">{product.name}</h3>
      <p className="text-gray-600">{product.description}</p>
      <p className="mt-2 font-bold text-lg">${product.price}</p>
      <Link href={`/products/${product._id}`}>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          View Details
        </button>
      </Link>
    </div>
  );
}
