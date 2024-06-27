import express from "express";
import { fileURLToPath } from "url";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

console.log(process.env.PORT, "====================");

const app = express();
const PORT = process.env.PORT || 3002;

app.use(
  cors({
    origin: "https://express-with-react.onrender.com",
  })
);

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// app.use(express.static(path.resolve(__dirname, "../client/build")));

app.get("/api", (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
// res.sendFile(
//   path.resolve(__dirname, "../client/build", "index.html"),
//   (err) => {
//     if (err) {
//       res.status(err.status).send("File not found");
//     }
//   }
// );
// });

// console.log(path.resolve(__dirname, "../client/build"));
// console.log(path.join(__dirname, "../client/build"));
