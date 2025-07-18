import mongoose from "mongoose";

const elecTypesServiceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    price: { type: Number },
    service: { type: mongoose.Schema.Types.ObjectId, ref: "elecServices" },
  },
  {
    collection: "elecTypesServices",
  }
);

export default mongoose.model("elecTypesService", elecTypesServiceSchema);
