const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors"); // Import cors
const connectDB = require("./config/db");

// Load environment variables
dotenv.config();

// MongoDB connection
connectDB();

// Rest object
const app = express();

// Middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors()); // Enable CORS for all routes

// Routes
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));
app.use("/api/v1/doctor", require("./routes/doctorRoutes"));

// Port
const port = process.env.PORT || 8080;

// Listen on the port
app.listen(port, () => {
  console.log(
    `Server Running in ${process.env.NODE_ENV || 'development'} Mode on port ${port}`
      .bgCyan.white
  );
});
