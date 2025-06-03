import mongoose from "mongoose";

const condInfoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    subServices: [
      {
        title: String,
        price: Number,
      },
    ],
  },
  {
    collection: "conditioners",
  }
);

export default mongoose.model("condInfo", condInfoSchema);
