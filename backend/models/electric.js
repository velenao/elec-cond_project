import mongoose from "mongoose";

const electricInfoSchema = new mongoose.Schema(
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
    collection: "electric",
  }
);

export default mongoose.model("electricInfo", electricInfoSchema);
