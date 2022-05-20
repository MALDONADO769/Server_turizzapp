import mongoose, { Schema } from "mongoose";

const tienda = new Schema({
  nombre: { type: String },
  descripcion: { type: String },
  calle: { type: String },
  estado: { type: String },
  municipio: { type: String },
  colonia: { type: String },
  codigoPostal: { type: String },
  id_categoria: { type: String },
});

const nTienda = mongoose.model("nTienda", tienda);
export default nTienda;
