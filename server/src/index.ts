import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
console.log('MongoDB URI:', process.env.MONGO_URI);

mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => {
    console.log("MongoDB Connected.");
  })
  .catch((error) => {
    console.error("MongoDB Connection Error", error);
  });

app.get("/", (req, res) => {
  res.send("API Running");
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
