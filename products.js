import axios from "axios";
import ProductCard from "../../components/ProductCard";

export default function Products({ products }) {
  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const res = await axios.get("http://localhost:3000/api/products");
  return { props: { products: res.data } };
}
