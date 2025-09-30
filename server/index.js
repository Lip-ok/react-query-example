const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000;

app.use(cors());

const users = [
  { id: 1, name: "Иван", email: "ivan@example.com" },
  { id: 2, name: "Мария", email: "maria@example.com" },
  { id: 3, name: "Андрей", email: "andrey@example.com" }
];

app.get("/api/users", (req, res) => {
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`✅ Сервер запущен: http://localhost:${PORT}`);
});
