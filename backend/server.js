const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection (will work later via Docker)
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Test route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from Backend 🚀" });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});