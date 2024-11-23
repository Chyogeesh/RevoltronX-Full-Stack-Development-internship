import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  published: { type: Boolean, default: false },
});

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
