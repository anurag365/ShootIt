const express = require("express");
const app = express();
const port = 5000;

const cors = require("cors");

const userRouter = require("./routers/userRouter");
const equipmentRouter = require("./routers/equipmentRouter");

app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);
app.use(express.json());

app.use("/user", userRouter);
app.use("/equipment", equipmentRouter);

app.listen(port, () => {
  console.log("server started");
});