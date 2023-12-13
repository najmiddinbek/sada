import { Schema, model, models } from "mongoose";

const PhotoSchema = new Schema({
    public_id: String,
    secure_url: String,
}, { timestamps: true })

const Photo = models.photos || models('photos', PhotoSchema)

export default Photo