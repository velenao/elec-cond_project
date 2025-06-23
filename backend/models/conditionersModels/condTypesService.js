import mongoose from "mongoose";

const condTypesServiceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    price: { type: Number },
    service: { type: mongoose.Schema.Types.ObjectId, ref: "condServices" },
  },
  {
    collection: "condTypesServices",
  }
);

export default mongoose.model("condTypesService", condTypesServiceSchema);
