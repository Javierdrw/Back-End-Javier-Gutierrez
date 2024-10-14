import { Schema, model } from "mongoose";

let collection = "motos";
let schema = new Schema(
  {
    brand: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    color: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    tank: { type: Number, required: true },
    consumption: { type: Number, required: true },
    weight: { type: Number, required: true },
    cylinder: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

let Moto = model(collection, schema);
export default Moto;
