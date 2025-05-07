import mongoose from "mongoose";

const condInfoSchema = new mongoose.Schema(
  {
    description: { type: String, required: true },
    services: [
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
