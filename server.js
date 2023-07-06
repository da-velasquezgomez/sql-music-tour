const express = require("express");
const app = express();
const methodOverride = require("method-override");


require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));


app.use("/event", require("./controllers/Event"));
app.use("/stage", require("./controllers/Stage"));


app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the Tour API",
  });
});


app.listen(process.env.PORT, () => {
  console.log(`🎸 Rockin' on port: ${process.env.PORT}`);
});
