import express from "express"
import cors from "cors"
import "dotenv/config"
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import orderRouter from "./routes/orderRoute.js"

//App config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

//Middleware
app.use(express.json());
app.use(cors());

// API endopoints
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);

app.get('/', (req,res) => {
    res.send("API Working");
})

app.listen(port, () => console.log("Server started on PORT : " + port));