import connectDB from "../../../utils/db";
import Product from "../../../models/Product";

export default async function handler(req, res) {
  await connectDB();

  const { id } = req.query;

  if (req.method === "GET") {
    const product = await Product.findById(id);
    return res.status(200).json(product);
  }

  if (req.method === "PUT") {
    const { name, description, price, image } = req.body;
    const product = await Product.findByIdAndUpdate(
      id,
      { name, description, price, image },
      { new: true }
    );
    return res.status(200).json(product);
  }

  if (req.method === "DELETE") {
    await Product.findByIdAndDelete(id);
    return res.status(204).send();
  }

  res.status(405).send("Method Not Allowed");
}
