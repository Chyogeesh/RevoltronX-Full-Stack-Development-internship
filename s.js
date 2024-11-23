import axios from "axios";

export default function ProductDetail({ product }) {
  return (
    <div className="p-6">
      <img src={product.image} alt={product.name} className="w-full h-80 object-cover" />
      <h1 className="text-3xl mt-4">{product.name}</h1>
      <p className="mt-2">{product.description}</p>
      <p className="mt-4 font-bold text-lg">${product.price}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  const res = await axios.get(`http://localhost:3000/api/products/${id}`);
  return { props: { product: res.data } };
}
