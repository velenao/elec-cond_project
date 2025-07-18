import mongoose from "mongoose";

const elecServicesSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    types: [{ type: mongoose.Schema.Types.ObjectId, ref: "elecTypesService" }],
    poster: { type: String, required: true },
    images: [{ type: String }],
    video: { type: String },
  },
  {
    collection: "electric",
  }
);

export default mongoose.model("elecServices", elecServicesSchema);
