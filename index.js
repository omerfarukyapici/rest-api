import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 5000

//import routes
/* Error is here! */


dotenv.config();
app.use(express.json());



app.get("/", (req, res) => {
    res.end("Home page");
})


mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(console.log("Connected to MongoDB")).catch(error => console.log(error))


app.listen(PORT, () => {
    console.log("Backend is runnig.");
});
