import { Schema } from "mongoose";

interface IImagen {
    id: number;
    nombre: string;
    fecha_de_subida: Date;
    link: string;
}

const imagenSchema = new Schema<IImagen>({
    id: { type: Number, required: true },
    nombre: { type: String, required: true },
    fecha_de_subida: {type: Date, required: true },
    link: { type: String, required: true }
});

export default IImagen
export const imagen = imagenSchema
