const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const { connectDB } = require("./config/db");
const PORT = process.env.PORT || 5000;
const { errorHandler } = require("./middleware/errorMiddleware");

connectDB();
const app = express();

// Import middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

// Use Error middleware
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
