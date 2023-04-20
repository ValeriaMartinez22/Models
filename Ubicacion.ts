import { Schema } from "mongoose";

interface IUbicacion {
    id: number;
    calle: string;
    colonia: string;
    estado: string;
    codigo_postal: number;
}

const ubicacionSchema = new Schema<IUbicacion>({
    id: { type: Number, required: true },
    calle: { type: String, required: true },
    colonia: { type: String, required: true },
    estado: { type: String, required: true },
    codigo_postal: { type: Number, required: true } 
});


export default IUbicacion
export const ubicacion = ubicacionSchema
