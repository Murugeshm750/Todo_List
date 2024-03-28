import express from "express";
import cors from "cors";
import router from "./Router/router.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5175",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);
app.listen(5000, () => {
  console.log("port 5000 is running");
});
