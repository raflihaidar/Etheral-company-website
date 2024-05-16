import express from "express";
import path from "path";

const app = express();

app.use("/", express.static(path.resolve("./client")));

// Middleware untuk melayani file statis user
app.use("/user/src", express.static(path.resolve("./client/user/src")));

// Middleware untuk melayani file statis admin
app.use("/admin/src", express.static(path.resolve("./client/admin/src")));

// Route untuk aplikasi user
app.get("/*", (req, res) => {
  res.sendFile(path.resolve("./client/user/index.html"));
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve("./client/user/index.html"));
});

// Route untuk aplikasi admin
app.get("/admin/*", (req, res) => {
  res.sendFile(path.resolve("./client/admin/index.html"));
});

app.get("/admin", (req, res) => {
  res.sendFile(path.resolve("./client/admin/index.html"));
});

// app.get("/*", (req, res) => {
//   res.status(404).send("404 Not Found");
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
