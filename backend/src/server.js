import app from "./app.js";
import dotenv from "dotenv";
import dbConnect from "./config/db.js";
import router from "./routes/productRoutes.js";
dotenv.config();

const PORT = process.env.PORT || 3000

app.get("/health-check", (req, res) => {
    res.status(200).json({
        message: "working..."
    })
})

app.use('/', router)
app.listen(PORT, () => {
    dbConnect()
    console.log(`Listening on server ${PORT}`);
})