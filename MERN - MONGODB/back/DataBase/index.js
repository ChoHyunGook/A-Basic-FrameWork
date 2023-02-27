import dotenv from "dotenv";
import mongoose from "mongoose";
import DatabaseModel from "./database.js";


const db = {}
db.mongoose = mongoose
db.url = dotenv.MONGO_URI
db.DatabaseModel=new DatabaseModel(mongoose)

export default db
