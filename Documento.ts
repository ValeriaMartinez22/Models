import { Schema } from "mongoose";

interface IDocumento {
    id: number;
    nombre: string;
    fecha_de_subida: Date;
    link: string;
}

const documentoSchema = new Schema<IDocumento>({
    id: Number,
    nombre: String,
    fecha_de_subida: Date,
    link: String
});

export default IDocumento
export const documento = documentoSchema
