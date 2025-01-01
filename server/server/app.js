require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5500;
const cors = require("cors");
const router = require("./app/routes/user_router");
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Use the router
app.use("/", router); // Now the route is accessible at /submit

// Start the server
async function start() {
  try {
    app.listen(port, () => {
      console.log(`listening on port http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error.message);
  }
}
start();
