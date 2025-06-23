import mongoose from "mongoose";

const condServicesSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    types: [{ type: mongoose.Schema.Types.ObjectId, ref: "condTypesService" }],
  },
  {
    collection: "conditioners",
  }
);

export default mongoose.model("condServices", condServicesSchema);
