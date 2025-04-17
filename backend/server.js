import express from "express";
import cors from "cors";


const app = express();
app.use(cors())
app.use(express.json())

app.post("/api/new_task", (req, res) => {
    console.log('New task received:', req.body);
    res.status(200).json({ message: 'Task received' });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server is running on port 3000");
});
