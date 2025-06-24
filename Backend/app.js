require('dotenv').config();
const express = require("express");
const userRouter = require("./routes/userRouter");
const categoryRouter = require("./routes/categoryRouter");
const transactionRouter = require("./routes/transactionRouter");
const mongoose = require("mongoose");
const errorHandler = require("./middleware/errorHandler");
const app = express();
const PORT = process.env.PORT || 8000;
const cors = require("cors");

// connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Middleware
app.use(express.json());

const corsOptions = {
  origin: ["https://mern-with-ai-expense-tracker-6rsx.vercel.app/"]
}

app.use(cors(corsOptions));
//? routes
app.use("/", userRouter);
app.use("/", categoryRouter);
app.use("/", transactionRouter);

//? error handlers
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
