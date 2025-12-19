import app from "./app.js";
import dotenv from "dotenv";
import dbConnect from "./config/db.js";
dotenv.config();

const PORT = process.env.PORT || 3000

app.get("/", (req, res) => {
    res.status(200).json({
        message: "All Products"
    })
})
app.listen(PORT, () => {
    dbConnect()
    console.log(`Listening on server ${PORT}`);
})