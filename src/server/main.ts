import express from "express";
import path from "path";

const app = express();

app.use(express.json());

// app.use(express.static(path.join(__dirname, "..", "public")));
app.use(express.static(path.join(`${__dirname}../../public`)));

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../", "public/index.html"));
});

console.log("HI");

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal Server Error!");
});

app.listen(3000, () => {
  console.log("app listening on 3000");
});
