import mongoose from "mongoose";

export async function connectDB() {
    await mongoose.connect('mongodb+srv://giovanna89:G@dev1@cluster0.tazti.mongodb.net/food-delivery').then(console.log("DB Connected"));
}