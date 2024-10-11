import { Schema, model } from "mongoose";

let collection = "aviones";
let schema = new Schema(
  {
    brand: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    color: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    tank: { type: Number, required: true },
    passengers: { type: Number, required: true },
    capacity: { type: Number, required: true },
    manufacturer: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

let Avion = model(collection, schema);
export default Avion;
