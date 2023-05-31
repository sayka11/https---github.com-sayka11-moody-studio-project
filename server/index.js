const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoute = require("./routes/user");

const app = express();

const port = 8000;

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());

app.use("/", userRoute);

mongoose
  .connect(
    "mongodb+srv://tvaradzesuraya:glavnoenezabitparol11@cluster0.fxqv4ja.mongodb.net/moody-db",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB Connection Succeeded."))
  .catch((err) => console.log("Error in DB connection: " + err));

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}/`);
});
